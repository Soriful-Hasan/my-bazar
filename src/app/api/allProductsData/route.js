import clientPromise from "@/app/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("shopEaseDB");
    const collection = db.collection("products");

    const products = await collection.find({}).toArray();

    return new Response(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
    });
  }
}
