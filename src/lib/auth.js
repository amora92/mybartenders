import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectToDb } from "./utils";
import { User } from "./models";


export const { 
    handlers: { GET, POST },
    auth, signIn, signOut 
    } = NextAuth({ 
    providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    // Add other providers if needed
  ],

  callbacks: {
    async signIn({user, account, profile}) {
      console.log(user, account, profile);
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });
            await newUser.save();
          }

          } catch (err) {
          console.log(err);
          return false;
        }
      }
        return true;
    },
  },
});
  //checking 
  // Add additional configuration options if needed

export const handleGithubLogin = async () => {
  'use server'
  await signIn('github')
}