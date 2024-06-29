### Setup Backend Supabase

- Install docker
- Install supabase cli - for MacOS run: `brew install supabase/tap/supabase`
- While in the root of the project run: `supabase start`
- Keep terminal open to grab the output values to store as env vars...
- Create a file named `.env.local` at the root of this project

### Running the project

- Make sure docker is running the supabase containers (`supabase start`)
- Run `npm install` to install dependencies
- Run `npm run dev` to run the front end Next.js app. Or use `npm run devs` for HTTPS.
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase Tooling

- New migration: `supabase migration new arbitrary_name_of_task`
- Apply migrations: `supabase migration up`
- Reset db with migrations: `supabase db reset`
- Stop containers: `supabase stop`
- Generate typescript types: `npm run gen-types`
