import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-lg mx-auto grid place-items-center min-h-screen ">
      <section className="flex flex-col gap-6 text-2xl text-center">
        <h1 className="text-4xl font-bold">Maazady Front-end Task :</h1>
        <Button asChild variant={"link"} className="text-2xl">
          <Link href="/form-component">Form component</Link>
        </Button>
        <Button asChild variant={"link"} className="text-2xl">
          <Link href="/static-design">Static design</Link>
        </Button>
      </section>
    </main>
  );
}
