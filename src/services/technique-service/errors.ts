import { ApplicationError } from "@/protocols";

export function duplicatedExerciseError(): ApplicationError {
  return {
    name: "DuplicatedExerciceError",
    message: "An exercise with the given name already exists",
  };
}
