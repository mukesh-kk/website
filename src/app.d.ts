/// <reference types="@sveltejs/kit" />
import type { BlogPost } from "./lib/types/blog-post";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
  namespace App {
    interface Locals {
      changelogEntries: any[];
    }
    // interface Platform {}
    // interface Session {}
    interface Stuff {
      changelogEntries: any[];
      posts: BlogPost[];
      customers: any[];
      guides: any[];
      securityLogs: any[];
      educationCustomers: any[];
    }
  }
}
