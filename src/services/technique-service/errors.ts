import { ApplicationError } from "@/protocols";

export function duplicatedExerciceError(): ApplicationError {
  return {
    name: "DuplicatedExerciceError",
    message: "An exercise with the given name already exists",
  };
}
