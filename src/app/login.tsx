"use client";

import { signIn, signUp } from "@/actions/users";
import { useActionState } from "react";

export default function Login() {
  const [signUpState, signUpAction] = useActionState(signUp, {
    error: null,
    email: "",
  });

  const [signInState, signInAction] = useActionState(signIn, {
    error: null,
    email: "",
  });

  console.log(signUpState, signInState);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <h1>Login or register</h1>
      <form className="flex w-full flex-col items-center justify-center gap-2">
        <input
          className="border p-2"
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={signUpState.email || signInState.email}
        />
        <input
          className="border p-2"
          type="password"
          name="password"
          placeholder="Password"
        />

        <button type="submit" formAction={signInAction}>
          Sign in
        </button>

        <button type="submit" formAction={signUpAction}>
          Sign up
        </button>

        {signUpState.error && (
          <p className="text-red-500">{signUpState.error}</p>
        )}
        {signInState.error && (
          <p className="text-red-500">{signInState.error}</p>
        )}
      </form>
    </div>
  );
}
