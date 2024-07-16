import { redirect } from "next/navigation";
import { serverLog } from "./serverLog";
import { ErrorOpts } from "./types";

// Allows style to change based on a condition
// useage: className={reactiveStyle(isSelected ? "bg-green-500" : "bg-gray-500", "...non conditional classes")}
export default function reactiveStyle(
  ...classes: (string | boolean | undefined)[]
) {
  return classes.filter(Boolean).join(" ");
}

// Prints Object out in readable format
// usage: <pre>{prettyPrint(object)}</pre>
export const prettyPrint = (obj: Object) => {
  return JSON.stringify(obj, null, 2);
};

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

// Logs a message on the server, redirects user in ui, displays message to user
export const handleError = (opts: ErrorOpts) => {
  const { serverMessage, clientMessage, logLevel } = opts;
  const uiMessage = clientMessage ?? serverMessage;
  serverLog(serverMessage, logLevel);
  redirect(`/error?m=${uiMessage}`);
};
