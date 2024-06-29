export type PageProps = {
  params: Record<string, string> | null | undefined;
  searchParams: Record<string, string> | null | undefined;
};

export type FormInput = string | ((formData: FormData) => void) | undefined;

export type LogLevel = "info" | "warn" | "error";

export type ErrorOpts = {
  serverMessage: string;
  clientMessage?: string;
  logLevel?: LogLevel;
};
