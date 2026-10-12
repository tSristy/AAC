import { NextResponse } from "next/server";
import pool from "../../lib/db";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    if (
      !name?.trim() ||
      !email?.trim() ||
      typeof password !== "string" ||
      password.length < 6
    ) {
      return NextResponse.json(
        { message: "Enter your name, valid email, and password (at least 6 characters)." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    const [existing] = await pool.execute(
      "SELECT id FROM users WHERE email = ?",
      [cleanEmail]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        { message: "This email is already registered." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name.trim(), cleanEmail, hashedPassword]
    );

    return NextResponse.json(
      { message: "Signup successful! You can now log in." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);

    return NextResponse.json(
      { message: "Signup failed. Please try again." },
      { status: 500 }
    );
  }
}