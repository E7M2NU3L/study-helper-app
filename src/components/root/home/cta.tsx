import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { AppErrClient } from "@/utils/app-err";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const subscribeSchema = z.object({
    email : z.string().email({
        message : "enter a valid email address"
    })
});

type subscribeProps = z.infer<typeof subscribeSchema>;

const Cta = () => {
    const form = useForm<subscribeProps>({
        resolver : zodResolver(subscribeSchema),
        defaultValues : {
            email : ""
        }
    });

    async function onSubmit(values : subscribeProps) {
        try {
            console.log(values);
            toast({
                title: "Success",
                description: "We've sent you an email to confirm your subscription. Please check your inbox."
            })
        } catch (error) {
            AppErrClient(error);
        } finally {
            form.reset();
        }
    }

  return (
    <div className="py-20 flex px-4 md:px-0 justify-center relative text-center w-full bg-gradient-to-t">
        <main className="max-w-xl mx-auto space-y-4">
            <h1 className="text-5xl font-semibold tracking-tight">Your <span className="text-primary">AI</span> Study Buddy Awaits!</h1>
            <p className="text-sm font-normal text-muted-foreground tracking-tight leading-tight">Ask questions, get instant answers, and simplify complex topics with our AI-powered study assistant. Connect with Google Calendar and Notion Too.</p>

            <Form {...form}>
                <form className="flex items-start gap-2" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control} name="email" render={({field}) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="Enter your Email" className="placeholder:text-sm" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <Button variant={"default"} size={"sm"} type="submit">🎯 Try It for Free!</Button>
                </form>
            </Form>
        </main>
    </div>
  )
}

export default Cta