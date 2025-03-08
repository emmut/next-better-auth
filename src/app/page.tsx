import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Login from "./login";
export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">BetterAuth</h1>

        <Login />

        {session && <p>Signed in as {session.user.email}</p>}
        {!session && <p>Not signed in</p>}
      </main>
    </div>
  );
}
