import { Spotlight } from "./ui/Spotlight"
import Link from "next/link"
import { Button } from "./ui/moving-border";
// import { Button } from "./components/ui/moving-border";
function HeroSection() {
  return (
    <div  className="h-auto  md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
          <Spotlight
        className="-top-400 left-780 md:left-60 md:-top-20"
        fill="blue"
      />
        <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-40 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >Learn First And Then Remove The 'L' From Learn</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >  This is the prior and luxury learning for those of who want to become the master of life and wants to know how life and world works  - we are the super team welcoming you on this journey</p>
        <div className="mt-4">
                <Link href={"/courses"}>
                
                <Button
                     borderRadius="1.75rem"
                    className="bg-dark dark:bg-slate-3900 text-black dark:text-white border-neutral-2000 dark:border-slate-8000"   // just change some numbers here to get different effects
                 >
        Explore Wonders
      </Button>
                 
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection