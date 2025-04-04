import { SignOut } from "@/components/sign-out";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Login from "./login";
export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h1 className="text-4xl font-bold">BetterAuth</h1>

        {session && <p>Signed in as {session.user.email}</p>}
        {!session && <Login />}
        {session && <SignOut />}
      </main>
    </div>
  );
}
