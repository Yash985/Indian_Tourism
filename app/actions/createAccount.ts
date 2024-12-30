"use server";

import prisma from "@/db/db";
import bcrypt from "bcrypt";
export async function createAccount(user: {
  username: string;
  email: string;
  password: string;
}) {
  try {
    const userExists = await prisma.user.findFirst({
      where: {
        username: user.username,
      },
    });
    if (userExists) {
      return { success: false, message: "Username already exists" };
    }
    const validPassword = user.password.length >= 8;
    if (!validPassword) {
      return {
        success: false,
        message: "Password must be at least 8 characters",
      };
    }
    const hashPassword = await bcrypt.hash(user.password, 10);
     await prisma.user.create({
      data: {
        username: user.username,
        email: user.email,
        password: hashPassword,
      },
    });
    return { success: true, message: "Account created" };
  } catch (error:unknown) {
    return {
      success: false,
        message: "An error occurred while creating account",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
