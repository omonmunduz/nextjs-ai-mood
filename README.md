This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.











https://github.com/Hendrixer/fullstack-ai-nextjs/tree/main/components
## Notes
Create your app routes/folders

## Authentication with clerk
Sign in to clerk.dev for handling auth. Create a new app and copy API keys.
create a new .env.local file and paste API keys there. 
Then npm install @clerk/nextjs

## Wrap root layout with a provider
 -  import { ClerkProvider } from '@clerk/nextjs'
in root layout and wrap everything (no props needed)

## Setup signin and setup pages 
Follow folder order example: -> sign-up/[[...sign-up]] which means anything after /sign-up will render this page



## Protect user routes

create a middleware.ts in root folder, copy paste middleware instructions from cleark.dev docs copy --->


NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
from clerk.dev to .evn.local file


## Planet Scale Database
Create a planet scale database and install a planet scale cli https://github.com/planetscale/cli

Connect the current device to planet scale 

win + x to run powershell -> pscale auth login

## create a new branch 
                    (the name of the database you created on planet scale)
psacle branch create name branchName

start the above

pscale connect dbName branchName --port 3309  (only after succesfully running this command the app can connect to pscale db)

mysql://root@127.0.0.1:3309/databaseNameCratedEarlier


## Prisma

npm install @prisma/client
npm install prisma --save-dev
npx prisma init

The npx prisma init will create a prisma folder with a schema.prisma in it. Planet Scale uses mysql so change posqresql with mysql
Copy and past database url 

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")  (mysql://root@127.0.0.1:3309/databaseNameCratedEarlier) Put this in .env file
  relationMode = "prisma"
}

Now we ready to make schemas. After creating a schemas run 'npx prisma db push' to push schema data to planet scale database.
When using Prisma with Planet Scale the schema migration is done by Platet Scale

The above success message on temial should be ->
Your database is now in sync with your Prisma schema. Done in 2.10s

✔ Generated Prisma Client (v5.2.0) to .\node_modules\@prisma\client in 56ms

Check on Planet Scale to validate if migration was successfull


## Database Utility Methods. 
Create a client. Every time we make a client which is the instance of SDK it craetes a new db connection so we want to cache that.

1. Create a utils folder in root folder
 - create a db.ts file 

## Create new-user.
Note here. Clerk creates a user on their database, but we need to create and store in our bd too.
Thats why we need 2 ids one from clerk and the other one local

## Create a new layout for dashoard routes

## to get a user's enries use clerk id to find a user in a local database. Create an auth.ts helper then call that function inside a journal/page.tsx

## Create a components for creating new entries and displaying them

## Create a new entry

In order to create a new entry NewEntryCard.tsx we need an interactivity, so it needs to be a client component.
Inside NewEntryCard we have an handleOnClick that makes an API call, So we need to setup an API. 
Then create a function inside utils folder that calls the function above


## Updating Enry

Follow the logic up Create new Entry
For autosave use npm i react-autosave


## AI ##
## LLM (Large Language model) & Prompts

Craete ai.ts inside utils folder
LangChain SDK for LLM https://js.langchain.com/docs/get_started/introduction/

1. Login to OpenAI go to API add API keys to env
2. We want an AI give us a js object as a result to our prompt - > install zod(a schema library) npm i zod
3. see details in utils/ai.ts

## Save ai output to database
1. Create and save analysis inside api/journal route.ts when using a POST request
