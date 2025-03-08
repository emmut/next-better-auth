"use server";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

type SignInState = {
  error: string | null;
};

type SignUpState = {
  error: string | null;
};

export async function signIn(
  state: SignInState,
  formData: FormData
): Promise<SignInState> {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await auth.api.signInEmail({
      body: {
        email: email as string,
        password: password as string,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }

  redirect("/dashboard");
}

export async function signUp(
  state: SignUpState,
  formData: FormData
): Promise<SignUpState> {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await auth.api.signUpEmail({
      body: {
        email: email as string,
        password: password as string,
        name: "test",
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }

  redirect("/dashboard");
}
