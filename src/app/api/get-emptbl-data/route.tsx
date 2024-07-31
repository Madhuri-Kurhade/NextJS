import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic';
export async function Get(request: Request) {
    const result= await sql  `SELECT*FROM emptbl;`;

    return NextResponse.json({ result }, { status: 200 });
}