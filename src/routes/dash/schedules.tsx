import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

const Schedules = () => {
  return (
    <div className="w-full p-4">
    <main className="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row gap-4 flex-wrap">
        <main className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                Schedules
            </h1>
            <p className="text-muted-foreground text-sm font-light tracking-tight leading-tight">
                Create your own personalized schedules and tasks to ace in your exams and prepare like a pro.
            </p>
        </main>

        <Button variant={"default"} size={"sm"}>
            <Plus className="mr-1 h-4 w-4" />
            Schedules
        </Button>
    </main>
</div>
  )
}

export default Schedules