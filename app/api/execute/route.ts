import { NextRequest, NextResponse } from "next/server";
import { interpret } from "hispano-lang";

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || typeof code !== "string") {
      return NextResponse.json({ error: "Código no válido" }, { status: 400 });
    }

    const result = interpret(code);

    return NextResponse.json({
      success: result.success,
      output: result.output,
      error: result.error,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        output: [],
        error: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    );
  }
}
