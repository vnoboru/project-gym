import { ApplicationError } from "@/protocols";

export function conflictError(): ApplicationError {
  return {
    name: "ConflictError",
    message: "This data has already been registered.",
  };
}
