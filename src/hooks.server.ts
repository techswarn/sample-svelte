import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {
  console.log(event.url.host);
  if (event.url.host == "www.techenv.dev") {
    console.log("Thats a match");
    throw redirect(301, "https://techenv.dev");
  }
  if (event.url.pathname.startsWith("/")) {
    return new Response("custom response");
  }

  const response = await resolve(event);
  return response;
}
