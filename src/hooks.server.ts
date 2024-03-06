import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {
  console.log(event);
  // if route matches "/banana" return banana
  if (event.host == "www.techenv.dev") {
    redirect(301, "techenv.dev");
  }

  // otherwise use the default behavior
  return resolve(event);
}
