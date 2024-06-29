import { redirect } from "next/navigation";
import { serverLog } from "./serverLog";
import { ErrorOpts } from "./types";

export default function joinClasses(
  ...classes: (string | boolean | undefined)[]
) {
  return classes.filter(Boolean).join(" ");
}

export const prettyPrint = (obj: Object) => {
  return JSON.stringify(obj, null, 2);
};

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const handleError = (opts: ErrorOpts) => {
  const { serverMessage, clientMessage, logLevel } = opts;
  const uiMessage = clientMessage ?? serverMessage;
  serverLog(serverMessage, logLevel);
  redirect(`/error?m=${uiMessage}`);
};
