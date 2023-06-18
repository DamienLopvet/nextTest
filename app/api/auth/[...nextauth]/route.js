import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials, req) {
        const user = { id: 1, username: "damien" };
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  secret: process.env.SECRET,

  callbacks:{
    jwt: ({ token, user }) => {
      if (user) {
        token.user = user;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user = token.user;
      }

      return session;
    },
  
}
}
);

export { handler as POST, handler as GET }