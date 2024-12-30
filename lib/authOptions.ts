import prisma from "@/db/db";
import { Session } from "next-auth";
import  { User as NextAuthUser } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"

interface User extends NextAuthUser {
    role?: string;
}
declare module "next-auth" {
    interface Session {
      user: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
        role?: string | null;
      };
    }
  }
export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "Login with credentials",
        credentials: {
          username: {
            label: "Username",
            type: "text",
            placeholder: "Enter your username",
            required: true,
          },
          // email: {
          //   label: "Email",
          //   type: "email",
          //   placeholder: "Enter your email",
          //   required: true,
          // },
          password: {
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
            required: true,
          },
        },
        async authorize(credentials) {
          if (!credentials?.username || !credentials?.password) {
            throw new Error("Username and password are required");
          }
          const user = await prisma.user.findUnique({
            where: {
              username: credentials?.username,
            },
          });
          // console.log("user", user);
          if (!user) {
            return null;
          }
  
          const userHashedPassword = credentials?.password || "";
          const isValid = await bcrypt.compare(userHashedPassword, user.password);
          if (!isValid) {
            return null;
          }
          return {
            ...user,
            id: user.id.toString(),
          };
          // return {
          //     id: user.id.toString(),
          //     email: user.email,
          //     username: user.username,
          //     password: user.password,
          //     role: user.role,
          //   };
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET || "Secret",
    callbacks: {
      async signIn({ user }: { user: User }) {
        if (!user) {
          return false;
        }
        return true; // Proceed with sign-in
      },
      async jwt({
        token,
        user,
        // isNewUser,
      }: {
        token: JWT;
        user: User | AdapterUser;
        isNewUser?: boolean;
      }) {
        if (user) {
          if ("role" in user) {
            token.role = user.role;
          }
        }
        return token;
      },
      async session({ session, token }: { session: Session; token: JWT }) {
        session.user.role = token.role as string;
        return session;
      },
      async redirect({ baseUrl }: { baseUrl: string }) {
        return baseUrl;
      },
    },
    pages: {
      signIn: "/signin",
    },
  }