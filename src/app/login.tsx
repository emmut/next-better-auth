"use client";

import { signIn, signUp } from "@/actions/users";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";
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

  return (
    <Tabs
      defaultValue="login"
      className="flex w-[400px] flex-col items-center justify-center gap-2"
    >
      <TabsList className="w-full">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login" className="w-full">
        <form action={signInAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              className="border p-2"
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={signInState.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              className="border p-2"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <Button type="submit">Sign in</Button>

          {signInState.error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{signInState.error}</AlertDescription>
            </Alert>
          )}
        </form>
      </TabsContent>
      <TabsContent value="register" className="w-full">
        <form action={signUpAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              className="border p-2"
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={signUpState.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              className="border p-2"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <Button type="submit">Sign up</Button>

          {signUpState.error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{signUpState.error}</AlertDescription>
            </Alert>
          )}
        </form>
      </TabsContent>
    </Tabs>
  );
}
