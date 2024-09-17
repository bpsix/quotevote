import NextAuth from "next-auth"
import github from "next-auth/providers/github"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [github],
})
