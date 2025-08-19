import { redirect } from "next/navigation";
import { auth } from "auth";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Hello, { session.user?.name }</p>
    </div>
  )
}