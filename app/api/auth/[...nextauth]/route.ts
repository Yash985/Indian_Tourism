import NextAuth, { Account, Profile, Session, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login with Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
          required: true,
        },
      },
      async authorize(credentials, req) {
        
        console.log("req", req);
        if (
          credentials?.email === "test@example.com" &&
          credentials?.password === "password"
        ) {
          return { id: "1", name: "Test User", email: "test@example.com" };
        }
        return null;
        },
      
    }),
    ],
    secret: process.env.NEXTAUTH_SECRET || "Secret",
    callbacks: {
        async redirect({ url,baseUrl }: {url:string, baseUrl: string }) { 
            return baseUrl;
        },
        async session({ session, token, user }: { session: Session; token: JWT; user: AdapterUser }) { 
            session.user = user;
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }: { token: JWT; user: User | AdapterUser; account: Account | null; profile?: Profile; isNewUser?: boolean }) { 
            if (user) {
                token.user = user;
            }
            return token;
        },
        async signIn({ user, account, profile }: { user: User | AdapterUser; account: Account | null; profile?: Profile }) { 
            return true
        }
    }
});

export { handler as GET, handler as POST };
