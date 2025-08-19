"use client";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="site-header">
      <div className="container">
        <h2>ShellPage</h2>

        {session && (
          <button onClick={() => signOut()}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
}