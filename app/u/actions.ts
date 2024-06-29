import { getSupabaseClient } from "@/src/supabase/server";
import { handleError } from "@/src/utils";

export const getUserInfo = async () => {
  const { supabase, user_id } = await getSupabaseClient();

  const { data, error } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("user_id", user_id)
    .single();

  if (error) {
    return handleError({
      serverMessage: `Failed to find a user profile for user_id:${user_id}, message:${error.message}`,
      clientMessage: "Failed to get profile for user, please try again",
      logLevel: "warn",
    });
  }

  return data;
};
