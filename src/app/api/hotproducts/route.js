import clientPromise from "../../lib/mongodb.js";

export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("shopEaseDB");
    const collection = db.collection("products");

    const result = await collection.insertOne(body);

    return new Response(
      JSON.stringify({ message: "Product added successfully", result }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting product:", error);
    return new Response(JSON.stringify({ error: "Failed to add product" }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("shopEaseDB");
    const collection = db.collection("products");

    const products = await collection.find({}).limit(8).toArray();

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
