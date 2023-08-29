declare global {
    namespace NodeJS {
      interface ProcessEnv {
        CLIENT_ID: string
        CLIENT_SECRET: string
        API_SERVER: string
        ACCESS_TOKEN: string
        RECIPIENT_ADDRESS: string
        OPEN_AI_API_KEY: string
        PINECONE_API_KEY: string
      }
    }
  }

  export {}