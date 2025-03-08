import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignOut } from "./sign-out";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      Dashboard {session?.user.email}
      <SignOut />
    </div>
  );
}
