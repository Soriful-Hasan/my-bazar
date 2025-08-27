import { getServerSession } from "next-auth";
import SignInPage from "./SignInClient";
import { authOptions } from "../[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <SignInPage></SignInPage>;
}
