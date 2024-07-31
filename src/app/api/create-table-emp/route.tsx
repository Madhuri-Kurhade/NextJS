import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const result= await sql  `CREATE TABLE EmpTbl (EmpID bigint,EmpName varchar(255),EmpAddress varchar(255));`;
    return NextResponse.json({result},{status:200});
}