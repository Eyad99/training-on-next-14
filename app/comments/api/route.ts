import { NextRequest } from "next/server";
import { Comments, Connent_Req } from "../data";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams;
  const query = url.get("query");
  return Response.json(Comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  console.log("requestrequestrequestrequestrequest", comment);
  const newComment = {
    id: Comments.length + 1,
    name: comment.name,
    address: comment.address,
  };

  console.log("12323213", JSON.stringify(newComment));
  console.log("12323213 newCommentnewComment", newComment);
  Comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
