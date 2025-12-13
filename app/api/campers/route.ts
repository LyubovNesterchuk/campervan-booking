import { NextRequest, NextResponse } from "next/server";
import { api } from "../api";

interface CampersQuery {
  page?: number;
  limit?: number;
  location?: string;
  form?: string;
  AC?: string;
  kitchen?: string;
  bathroom?: string;
  TV?: string;
  transmission?: string;
}

export async function GET(req: NextRequest) {
  try {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const limit = Number(req.nextUrl.searchParams.get("limit") ?? 4);

    const location = req.nextUrl.searchParams.get("location") ?? undefined;
    const form = req.nextUrl.searchParams.get("form") ?? undefined;
    const AC = req.nextUrl.searchParams.get("AC") ?? undefined;
    const kitchen = req.nextUrl.searchParams.get("kitchen") ?? undefined;
    const bathroom = req.nextUrl.searchParams.get("bathroom") ?? undefined;
    const TV = req.nextUrl.searchParams.get("TV") ?? undefined;
    const transmission =
      req.nextUrl.searchParams.get("transmission") ?? undefined;

    const params: CampersQuery = { page, limit };
    if (location) params.location = location;
    if (form) params.form = form;
    if (AC) params.AC = AC;
    if (kitchen) params.kitchen = kitchen;
    if (bathroom) params.bathroom = bathroom;
    if (TV) params.TV = TV;
    if (transmission) params.transmission = transmission;

    const { data } = await api.get("/campers", { params });

    return NextResponse.json({
      data: data.items ?? [],
      total: data.total ?? 0,
    });
  } catch (error: unknown) {
    console.error("Failed to fetch campers:", error);
    return NextResponse.json({ data: [], total: 0 }, { status: 500 });
  }
}


