import { Link } from "@remix-run/react";

export default function ServiceIndexPage() {
  return (
    <p>
      No service selected. Select a service on the left, or{" "}
      <Link to="new" className="text-blue-500 underline">
        create a new service.
      </Link>
    </p>
  );
}
