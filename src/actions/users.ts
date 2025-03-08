"use server";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

type SignInState = {
  error: string | null;
  email: string;
};

type SignUpState = {
  error: string | null;
  email: string;
};

export async function signIn(
  state: SignInState,
  formData: FormData,
): Promise<SignInState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        email,
        error: error.message,
      };
    }
    return {
      ...state,
      error: "An unknown error occurred",
    };
  }

  redirect("/dashboard");
}

export async function signUp(
  state: SignUpState,
  formData: FormData,
): Promise<SignUpState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: "test",
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        email,
        error: error.message,
      };
    }
    return {
      email,
      error: "An unknown error occurred",
    };
  }

  redirect("/dashboard");
}
