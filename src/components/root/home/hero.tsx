import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex w-full relative px-4 md:px-0 justify-center items-center">
        <main className="max-w-2xl z-10 relative mx-auto text-center space-y-4">
            <h1 className="text-5xl font-semibold tracking-tight ">Supercharge Your Learning with Smart AI & Seamless Integrations</h1>
            <p className="text-sm font-normal tracking-tight whitespace-normal leading-tight text-muted-foreground">
            Struggling to stay organized? Our AI-powered study assistant helps you manage notes, schedule study sessions, and collaborate effortlessly with Notion, Google Calendar, and more. Track your progress, get instant answers, and stay ahead—all in one place!
            </p>

            <main className="flex flex-row gap-4 items-center justify-center">
                <Button variant={"outline"} size={"sm"} asChild>
                    <Link to={"/sign-up"}>
                        Get Started
                    </Link>
                </Button>

                <Button variant={"default"} size={"sm"} asChild>
                    <Link to={"/pricing"}>
                        Learn More
                    </Link>
                </Button>
            </main>
        </main>

        <main className="h-[90vh] absolute w-screen">
            <img src="/cta (1).png" alt="cta 1" className="h-[40vh] w-[40vh] object-cover absolute top-32 left-28" />
        </main>

        <main className="h-[90vh] w-screen absolute">
            <img src="/cta (2).png" alt="cta 2" className="h-[45vh] w-[40vh] object-cover absolute bottom-12 right-12" />
        </main>
    </div>
  )
}

export default Hero