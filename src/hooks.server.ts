import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {
  console.log(event.url.host);
  // if route matches "/banana" return banana
  if (event.url.host == "www.techenv.dev") {
    throw redirect(301, "techenv.dev");
  }

  // otherwise use the default behavior
  return resolve(event);
}
