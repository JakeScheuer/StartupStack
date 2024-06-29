import Link from "next/link";

export default function MainPage() {
  return (
    <main className="flex min-h-screen p-8 bg-base-200 text-base-content">
      <div className="flex flex-col gap-4 w-full items-center justify-center">
        <span>
          {
            "Here is the main landing page. Give some info abut what the site is here"
          }
        </span>
        <Link className="btn bg-base-300" href={"/auth"}>
          {"Go to Login"}
        </Link>
      </div>
    </main>
  );
}
