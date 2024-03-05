import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {
  console.log(event);
  console.log(resolve);
  // if route matches "/banana" return banana
  if (event.url.host == "techenv.dev") {
    throw redirect(301, "https://www.techenv.dev");
  }

  // otherwise use the default behavior
  return resolve(event);
}
