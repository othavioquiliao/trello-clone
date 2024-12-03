import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);
export default clerkMiddleware(async (auth, request) => {
  const { userId, orgId } = await auth();
  if (!isPublicRoute(request) && !userId) {
    await auth.protect();
  }
  if (userId && isPublicRoute(request)) {
    if (orgId) {
      return NextResponse.redirect(
        new URL(`/organization/${orgId}`, request.url)
      );
    }
    return NextResponse.redirect(new URL("/select-org", request.url));
  }
});
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
