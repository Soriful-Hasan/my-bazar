import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AddProductForm from "./AddProductForm";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/allProducts");
  }

  return <AddProductForm />;
}
