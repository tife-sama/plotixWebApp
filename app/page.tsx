import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <main className="mt-2">
    <Button>
      Signup
    </Button>
    <span className="px-4">
        <Button variant="destructive">
      Delete
    </Button>
    </span>
    <span className="px-4">
        <Button variant="link">
      Link
    </Button>
    </span>
    <span className="px-4">
        <Button variant="ghost">
      Ghost
    </Button>
    </span>
    <span className="px-4">
        <Button variant="outline">
      Outline
    </Button>
    </span>
    <span className="px-4">
        <Button variant="secondary">
      Secondary
    </Button>
    </span>
   </main>

  );
}
