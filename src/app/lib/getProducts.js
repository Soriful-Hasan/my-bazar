// const baseUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL;
export async function getProducts() {
  try {
    const res = await fetch("/api/hotproducts", {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
