import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className="py-20 px-4 md:px-0">
        <main className="max-w-xl mx-auto w-full space-y-4 pb-12">
            <h1 className="text-5xl font-semibold tracking-tight">Got Any <span className="text-destructive">Questions?</span> We're here to <span className="text-primary">Help!</span></h1>
            <p className="text-lg font-medium tracking-tight leading-tight text-muted-foreground">your queries and comments can be posted to our mail and your doubts can be solved within 1 to 2 business days!</p>

            <main className="flex flex-row gap-4 items-center">
                <Button variant={"default"} size={"sm"} asChild>
                    <Link to={"/sign-in"}>
                        Connect Back
                    </Link>
                </Button>

                <Button variant={"outline"} size={"sm"} asChild>
                    <Link to={"/sign-up"}>
                        Get Started
                    </Link>
                </Button>
            </main>
        </main>
        <main className="max-w-2xl mx-auto w-full">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-6">
                    <AccordionTrigger>Does it support multiple devices?</AccordionTrigger>
                    <AccordionContent>
                        Yes! You can access your study materials seamlessly across mobile, tablet, and desktop.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>Can I export my notes?</AccordionTrigger>
                    <AccordionContent>
                        Absolutely! Export your notes in various formats, including PDF and Markdown, for offline access.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Does it integrate with Notion?</AccordionTrigger>
                    <AccordionContent>
                    Yes! You can sync your study notes directly with Notion for easy access and organization.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Can I connect Google Calendar?</AccordionTrigger>
                    <AccordionContent>
                    Absolutely! Schedule your study sessions and get reminders synced with Google Calendar.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Does it support collaborative learning?</AccordionTrigger>
                    <AccordionContent>
                    Yes! You can share notes, collaborate with friends, and study together in real-time.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Is there an AI-powered study assistant?</AccordionTrigger>
                    <AccordionContent>
                    Yes! Our AI assistant helps you summarize topics, generate flashcards, and answer your questions instantly.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Can I track my progress?</AccordionTrigger>
                    <AccordionContent>
                    Definitely! Our dashboard provides insights into your study habits, goals, and achievements.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </main>
    </div>
  )
}

export default Faq