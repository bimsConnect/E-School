// app/api/huggingface/route.ts
import { NextResponse } from "next/server";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HUGGING_FACE_TOKEN);

export async function POST(request: Request) {
  const { message } = await request.json();

  try {
    const response = await hf.chatCompletion({
      model: "HuggingFaceH4/zephyr-7b-beta", // Ganti dengan model yang lebih kecil
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 500,
    });

    return NextResponse.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Error calling Hugging Face API:", error);
    return NextResponse.json({ error: "Error processing your message" }, { status: 500 });
  }
}
