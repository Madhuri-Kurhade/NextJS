import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
    const result= await sql  `CREATE TABLE DepartmentTbl (DeptID bigint,DepartmentName varchar(255));`;

    return NextResponse.json({ result }, { status: 200 })
}