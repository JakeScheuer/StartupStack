import { type NextRequest } from "next/server";
import { supabaseMiddlewareClient } from "./src/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { supabase, response } = supabaseMiddlewareClient(request);

  // can handle if they just need to be logged in with this.
  const { data: authData } = await supabase.auth.getUser();
  const userId = authData.user?.id;

  // Identity based access
  // - row based security and/or
  // - manual validation from a dynamic path - request.nextUrl.pathname.includes("some_path")

  // Handling bad with
  // - return Response.error() or
  // - return NextResponse.redirect(new URL("somewhere", request.url))

  // Valid request
  //  - return response

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
