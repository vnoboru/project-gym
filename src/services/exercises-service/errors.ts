import { ApplicationError } from "@/protocols";

export function duplicatedExerciseError(): ApplicationError {
  return {
    name: "DuplicatedExerciseError",
    message: "An exercise with the given name already exists.",
  };
}

export function notFoundExerciseError(): ApplicationError {
  return {
    name: "NotFoundExerciseError",
    message: "No result for this search.",
  };
}
