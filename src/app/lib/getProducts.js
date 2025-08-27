export async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/hotproducts`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
