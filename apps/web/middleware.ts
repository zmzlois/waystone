import { authkitMiddleware } from "@workos-inc/authkit-nextjs"

export default authkitMiddleware({
  middlewareAuth: {
    enabled: true,
    // public routes that don't require auth
    unauthenticatedPaths: ["/", "/api/auth(.*)"],
  },
})

export const config = {
  matcher: [
    // match all routes except static files and next internals
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
