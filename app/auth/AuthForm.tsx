"use client";

import { useState } from "react";
import { login, signup } from "./actions";
import FormSubmitButton from "@/src/components/FormSubmitButton";
import reactiveStyle from "@/src/utils";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex flex-col w-full h-full bg-base-200">
      <div role="tablist" className="tabs tabs-bordered mb-4">
        <a
          role="tab"
          className={reactiveStyle(
            !isSignUp && "tab-active font-semibold",
            "tab"
          )}
          onClick={() => setIsSignUp(false)}
        >
          {"Log in"}
        </a>
        <a
          role="tab"
          className={reactiveStyle(
            isSignUp && "tab-active font-semibold",
            "tab"
          )}
          onClick={() => setIsSignUp(true)}
        >
          {"Sign up"}
        </a>
      </div>

      <form className="flex flex-col w-full h-full gap-2">
        <div className="flex flex-col w-full h-80 gap-2">
          <label className="label-text" htmlFor="email">
            Email:
          </label>
          <input
            className="input input-bordered"
            id="email"
            name="email"
            type="email"
            required
          />
          <label className="label-text" htmlFor="password">
            Password:
          </label>
          <input
            className="input input-bordered"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          {isSignUp && (
            <>
              <label className="label-text" htmlFor="firstName">
                First Name:
              </label>
              <input
                className="input input-bordered"
                id="firstName"
                name="firstName"
                type="text"
                required
              />
            </>
          )}
        </div>
        <FormSubmitButton
          className="btn bg-base-300"
          formAction={isSignUp ? signup : login}
        />
      </form>
    </div>
  );
};

export default AuthForm;
