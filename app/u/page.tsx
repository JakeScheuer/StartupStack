import FormOnlyLayout from "@/src/components/FormOnlyLayout";
import { PageProps } from "@/src/types";
import { getUserInfo } from "./actions";
import { logout } from "../auth/actions";
import FormSubmitButton from "@/src/components/FormSubmitButton";

export default async function HomePage(pageProps: PageProps) {
  const userInfo = await getUserInfo();
  return (
    <FormOnlyLayout>
      <div className="p-8 flex flex-col h-full w-full bg-base-200 justify-center items-center">
        <span>{`Hello ${userInfo.first_name}!`}</span>
        <span>{`You are now logged in.`}</span>
        <span>{`Your userId is: ${userInfo.user_id}`}</span>
        <form>
          <FormSubmitButton
            formAction={logout}
            text="Logout"
            className="btn bg-base-300"
          />
        </form>
      </div>
    </FormOnlyLayout>
  );
}
