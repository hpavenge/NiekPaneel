import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { vraag1, vraag2, vraag3, vraag4, vraag5, teamname } = body;

    if (!vraag1 || !vraag2 || !vraag3 || !vraag4 || !vraag5 || !teamname) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Insert data into the database
    const query = `
      INSERT INTO Antwoorden (vraag1, vraag2, vraag3, vraag4, vraag5, teamname) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *;
    `;
    const values = [vraag1, vraag2, vraag3, vraag4, vraag5, teamname];

    const result = await sql.query(query, values);

    return NextResponse.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error inserting data into database:', error);
    return NextResponse.json({ error: 'Error submitting form' }, { status: 500 });
  }
}
