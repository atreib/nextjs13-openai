import { NextRequest, NextResponse } from "next/server";
import { askGPT } from "./openai";

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();
  const { data } = await askGPT({ prompt });
  return NextResponse.json(data);
}
