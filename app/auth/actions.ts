"use server";
import { redirect } from "next/navigation";
import { createClient } from "@/src/supabase/server";
import { handleError } from "@/src/utils";

export async function signup(formData: FormData) {
  const supabase = createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;

  const { error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    handleError({
      serverMessage: `Supabase sign up failed: ${authError.message}`,
      clientMessage: "There was an issue when signing up, please try again",
      logLevel: "error",
    });
  }

  const { data } = await supabase.auth.getSession();
  const userId = data.session?.user.id;

  const { error: profileError } = await supabase.from("user_profiles").insert([
    {
      user_id: userId,
      first_name: firstName,
    },
  ]);

  if (profileError) {
    handleError({
      serverMessage: `Creating a new user profile failed: ${profileError.message}`,
      clientMessage: "There was an issue when signing up, please try again",
      logLevel: "error",
    });
  }

  redirect("/u");
}

export async function login(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    handleError({
      serverMessage: `User not found: ${error.message}`,
      clientMessage: "Log in failed, please try again",
      logLevel: "info",
    });
  }

  redirect("/u");
}

export async function logout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    handleError({
      serverMessage: `Supabase sign out failed: ${error.message}`,
      clientMessage: "Failed to logout, please try again",
      logLevel: "error",
    });
  }

  redirect("/");
}
