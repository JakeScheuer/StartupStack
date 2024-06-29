import FormOnlyLayout from "@/src/components/FormOnlyLayout";
import { PageProps } from "@/src/types";
import Link from "next/link";

export default function ErrorPage({ searchParams }: PageProps) {
  const errorMessage = searchParams?.m ?? "There was an error";

  return (
    <FormOnlyLayout>
      <div className="p-8 flex flex-col h-full justify-between">
        <div className="flex flex-col">
          <div className="text-xl font-semibold self-center mt-8">Error</div>
          <div className="text-md mt-16">{errorMessage}</div>
        </div>

        <Link href={"/"} className="btn btn-secondary normal-case">
          {"Go Home"}
        </Link>
      </div>
    </FormOnlyLayout>
  );
}
