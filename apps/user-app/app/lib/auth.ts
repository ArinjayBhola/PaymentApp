import db from "@repo/db/prisma";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "text", placeholder: "1231231231" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
        name: { label: "Name", type: "text", placeholder: "John Doe" },
        email: {
          label: "Email",
          type: "email",
          placeholder: "QpUeh@example.com",
        },
      },
      async authorize(credentials: any) {
        const hashedPassword = await bcrypt.hash(credentials?.password, 10);
        const existingUser = await db.user.findFirst({
          where: {
            number: credentials?.phone,
          },
        });
        if (existingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials?.password,
            existingUser.password,
          );
          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.number,
            };
          }
          return null;
        }
        try {
          const user = await db.user.create({
            data: {
              number: credentials.phone,
              password: hashedPassword,
              email: credentials.email,
              name: credentials.name,
            },
          });
          return {
            id: user.id.toString(),
            name: user.name,
            email: user.number,
          };
        } catch (e) {
          console.error(e);
        }
        return null;
      },
    }),
  ],
  secret: "secret",
  callbacks: {
    async session({ session, token }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
};
