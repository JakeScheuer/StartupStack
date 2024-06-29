"use server";

import { LogLevel } from "./types";

export const serverLog = (message: string, level: LogLevel = "info") => {
  switch (level) {
    case "info":
      console.log(message);
    case "warn":
      console.warn(message);
    case "error":
      console.error(message);
    default:
      return;
  }
};
