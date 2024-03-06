import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {
  console.log(event);
  const url = new URL(event.request.url);
  const hostname = url.hostname;
  console.log(event.url.host);
  console.log(hostname);
  if (event.url.host == "www.techenv.dev") {
    console.log("Thats a match");
    throw redirect(301, "https://techenv.dev");
  }
  if (event.url.pathname.startsWith("/custom")) {
    return new Response("custom response");
  }

  const response = await resolve(event);
  return response;
}
