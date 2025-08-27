export async function getAllProducts() {
  try {
    const res = await fetch("/api/allProductsData", {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
