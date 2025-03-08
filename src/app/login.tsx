"use client";

import { signIn, signUp } from "@/actions/users";
import { authClient } from "@/lib/auth-client";
import { useActionState } from "react";

export default function Login() {
  const [signUpState, signUpAction] = useActionState(signUp, {
    error: null,
  });

  const [signInState, signInAction] = useActionState(signIn, {
    error: null,
  });

  return (
    <div className="flex flex-col gap-2 w-full justify-center items-center">
      <h1>Login or register</h1>
      <form className="flex w-full flex-col gap-2 justify-center items-center">
        <input className="border" type="email" name="email" />
        <input className="border" type="password" name="password" />

        <button type="submit" formAction={signUpAction}>
          Sign up
        </button>
        <button type="submit" formAction={signInAction}>
          Sign in
        </button>

        <button type="button" onClick={() => authClient.signOut()}>
          Sign out
        </button>

        {signUpState.error && <p>{signUpState.error}</p>}
        {signInState.error && <p>{signInState.error}</p>}
      </form>
    </div>
  );
}
