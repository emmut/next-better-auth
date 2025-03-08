"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export function SignOut() {
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect("/");
        },
      },
    });
  };
  return <button onClick={handleSignOut}>Sign out</button>;
}
