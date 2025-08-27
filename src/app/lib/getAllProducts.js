
export async function getAllProducts() {
  try {
    const res = await fetch(
      `https://my-bazar-seven.vercel.app/api/allProductsData`,
      {
        cache: "no-store",
      }
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
