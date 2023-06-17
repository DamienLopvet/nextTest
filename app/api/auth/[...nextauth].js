import NextAuth from 'next-auth'

export default NextAuth({
    providers: [    
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: {  label: "Password", type: "password" }
            },
          async authorize(credentials, req){ 
            if(credentials?.email === 'damien@damien.fr' && credentials?.password === '123546'){
                return {id: 1, name: 'Damien'}
            }
            return null

          }}
        )
    ],
    pages: {
        signIn: '/auth/',

    },

    callbacks: {
        async jwt({token, user}){
            return {...token, ...user}
        },
        async session({session, token}){
            session.user = token    
            return session;
        }

}})


