const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
export async function getAllProducts() {
  try {
    const res = await fetch(`${baseUrl}/api/allProductsData`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
