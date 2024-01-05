import { db } from "@/lib/db";
import { messages } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const runtime = "edge";

export const POST = async (req: Request) => {
  const { chatID } = await req.json();
  const _messages = await db
    .select()
    .from(messages)
    .where(eq(messages.chatID, chatID));
  return NextResponse.json(_messages);
};