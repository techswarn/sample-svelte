import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {
  console.log(event.url.host);
  if (event.url.host == "0.0.0.0:3000") {
    console.log("Thats a match");
  }
  if (event.url.pathname.startsWith("/custom")) {
    return new Response("custom response");
  }

  const response = await resolve(event);
  return response;
}
