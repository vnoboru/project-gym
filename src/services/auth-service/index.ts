import { conflictError } from "@/errors";
import { credentialsError } from "@/errors/credential-error";
import authRepository from "@/repositories/auth-repository";
import sessionRepository from "@/repositories/session-repository";
import userRepository from "@/repositories/user-repository";
import { user } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

async function createUser({ email, password }: CreateUserParams): Promise<user> {
  await validateUniqueEmail(email);

  const hashedPassword = await bcrypt.hash(password, 12);

  return authRepository.create({
    email,
    password: hashedPassword,
  });
}

async function validateUniqueEmail(email: string) {
  const userWithSameEmail = await authRepository.findByNameEmail(email);

  if (userWithSameEmail) {
    throw conflictError();
  }
}

async function loginUser(params: loginParams): Promise<loginResult> {
  const { email, password } = params;

  const user = await getUserOrFail(email);

  await validatePasswordOrFail(password, user.password);

  const token = await createSession(user.id);

  return {
    user: exclude(user, "password"),
    token,
  };
}
async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
  const user = await userRepository.findByEmail(email, { id: true, email: true, password: true });
  if (!user) {
    throw credentialsError();
  }

  return user;
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.create({
    token,
    userId,
  });

  return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) {
    throw credentialsError();
  }
}

export type loginParams = Pick<user, "email" | "password">;

type loginResult = {
  user: Pick<user, "id" | "email">;
  token: string;
};

type GetUserOrFailResult = Pick<user, "id" | "email" | "password">;

export type CreateUserParams = Pick<user, "email" | "password">;
const authService = {
  createUser,
  loginUser,
};

export default authService;

function exclude<T, Key extends keyof T>(entity: T, ...keys: Key[]): Omit<T, Key> {
  const newEntity = JSON.parse(JSON.stringify(entity));
  for (const key of keys) {
    delete newEntity[key];
  }
  return newEntity;
}
