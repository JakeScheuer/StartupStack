# Startup Stack

<p>This is a fullstack boilerplate monorepo, used to quickly startup any web application. The front end consists of <a href="https://nextjs.org/docs">Next.js (app dir)</a> and <a href="https://react.dev/reference/react">React</a> configured with <a href="https://tailwindcss.com/docs/installation">Tailwind CSS</a>, <a href="https://www.typescriptlang.org/">Typescript</a>, and <a href="https://daisyui.com/components/">DaisyUI</a> component library. Back end is handled with Next.js server actions along with <a href="https://supabase.com/">Supabase</a>. Supabase is the open source equivalent to Firebase and uses Postgres SQL at it's core. Supabase also handles user authentication, creating <a href="https://supabase.com/docs/reference/javascript/select">instant APIs</a> to access your database, running migrations, as well as file storage similar to S3. Instructions below are given to run a local dockerized instance of Supabase, connect it to the Next.js app, and run your first migration.</p>

<p>This setup also ships with <a href="https://jestjs.io/docs/api">Jest</a> for testing, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">node-fetch</a> for http requests, and some authentication management with Supabase. A basic signup/login form exists at <code>/auth</code> along with a basic  middleware that manages user session. Also included is error handling, server side logging, and some other simple utility functions.</p>

### Setup Backend Supabase

- Install docker
- Install supabase cli - for MacOS run: `brew install supabase/tap/supabase`
- While in the root of the project run: `supabase start`
- Keep terminal open to grab the output values to store as env vars...
- Create a file named `.env.local` at the root of this project
<pre>
<code>NEXT_PUBLIC_SUPABASE_URL=<span style="color: cyan;">API URL</span>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<span style="color: cyan;">anon key</span>
</code>
</pre>

### Running the project

- Make sure docker is running the supabase containers (`supabase start`)
- Run `npm install` to install dependencies
- Run `npm run dev` to run the front end Next.js app. Or use `npm run devs` for HTTPS.
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Supabase Tooling

- New migration: `supabase migration new arbitrary_name_of_task`
- Apply migrations: `supabase migration up`
- Reset db with migrations: `supabase db reset`
- Stop containers: `supabase stop`
- Generate typescript types: `npm run gen-types`
