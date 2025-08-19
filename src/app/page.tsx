"use client"
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="content">
      <h1>Developer, show yourself to the world</h1>
      <h2>Create your beautiful personal website in less than 15 minutes</h2>
      
      {!session && (
        <button onClick={() => signIn("github")}>
          Sign in with Github
        </button>
      )}
    </div>    
  );
}