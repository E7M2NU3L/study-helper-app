import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Product = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 md:px-0">
        <main className="grid grid-cols-1 pb-12 gap-6 md:gap-0 md:grid-cols-2">
            <section className="max-w-xl">
                <Badge variant={"default"}>
                    Simplified
                </Badge>
                <h1 className="text-5xl font-semibold tracking-tight text-foreground">
                Supercharge Your Learning with Smart AI & Seamless Integrations
                </h1>
            </section>
            <section className="flex flex-col justify-start gap-4">
                <p className="text-sm tracking-tight leading-tight text-muted-foreground font-normal">Struggling to stay organized? Our AI-powered study assistant helps you manage notes, schedule study sessions, and collaborate effortlessly with Notion, Google Calendar, and more. Track your progress, get instant answers, and stay ahead—all in one place!</p>

                <main className="flex flex-row gap-4 items-center">
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
            </section>
        </main>
        <section className="w-full min-h-[70vh]">
            <img src="/product.png" alt="product" className="w-full h-full object-cover shadow-2xl rounded-xl shadow-primary" />
        </section>
    </div>
  )
}

export default Product