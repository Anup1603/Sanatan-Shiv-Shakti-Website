import { Home } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { OmDisc } from "@/components/shared/sacred";

export default function NotFound() {
  return (
    <div className="container-app flex min-h-[60vh] flex-col items-center justify-center gap-5 py-20 text-center">
      <OmDisc className="size-16 text-2xl" />
      <p className="font-display text-6xl font-bold text-primary">404</p>
      <h1 className="font-display text-2xl font-semibold">Page Not Found</h1>
      <p className="max-w-md text-muted-foreground">
        The page you are looking for may have moved or no longer exists. Let us
        guide you back home.
      </p>
      <Button asChild size="lg" className="mt-2">
        <Link href="/">
          <Home className="size-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}
