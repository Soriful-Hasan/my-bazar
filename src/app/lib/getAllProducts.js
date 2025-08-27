export async function getAllProducts() {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/allProductsData`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
