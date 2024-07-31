import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const result= await sql  `create table EmpTbl (EmpID int NOTNULL,EmpName nvarchar(500),EmpAddress nvarchar(500))`
     return(
        NextResponse.json({result},{status:200})
     )
}