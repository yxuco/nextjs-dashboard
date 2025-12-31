import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
// initialize NextAuth with authConfig defined in auth.config.ts
export default NextAuth(authConfig).auth;
 
// excluding static next files, API routes and png images from authentication
export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};