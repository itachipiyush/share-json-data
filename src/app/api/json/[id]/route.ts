import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}: {
    params: {
        id: string
    }
}) {
    
    const {id} = params;
    try {
      const json = await prisma.jsonData.findUnique({
        where: { id },
        select: { id: true, name: true, content: true , createdAt: true },
      });
      return NextResponse.json(json);
    } catch (error) {
      console.error("Error fetching JSON data: ", error);
      return NextResponse.json({ error: "Error fetching JSON data" }, { status: 500 });
    }
  }

// Function to handle DELETE requests
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    // Delete the JSON data entry from the database
    await prisma.jsonData.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error deleting JSON data: ", error);
    return NextResponse.json({ error: "Error deleting JSON data" }, { status: 500 });
  }
}