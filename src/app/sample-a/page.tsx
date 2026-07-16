import { redirect } from "next/navigation";

/** The light home is now the site root. Keep this path working as an alias. */
export default function SampleARedirect() {
  redirect("/");
}
