import { Button } from "@/components/ui/button";
import { ArrowDownToLine, PartyPopper, UserSearch, Wand2, Webcam } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const perks = [
  {
    name: "Find a Coach",
    Icon:UserSearch ,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Go Live",
    Icon: Webcam,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Be Better",
    Icon: PartyPopper,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
 
]

export default function Home() {
  return (
   <main className="mt-6 mb-6">
        <section className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace PLOTIX ! for high-quality{" "}
            <span className="text-purple-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Plotix. Every coach on our platform is verified by our
            team and yourself to ensure our highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button>
            <Link href="/Coaches" >
             Browse Coaches
            </Link>
            </Button>
            <Button variant={"ghost"}>Our quality promise &rarr;</Button>
          </div>
        </section>
      {/* How it works*/}
        <section className="py-5 mx-auto  border-t border-gray-200 bg-gray-50 ">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm font-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </section>
   </main>

  );
}
