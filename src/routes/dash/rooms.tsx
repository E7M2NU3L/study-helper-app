import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

const Rooms = () => {
  return (
    <div className="w-full p-4">
      <main className="flex justify-between items-center">
          <main className="flex flex-col gap-1">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                  Test Rooms
              </h1>
              <p className="text-muted-foreground text-sm font-light tracking-tight leading-tight">
                Make your own tests in your own chosen difficulties for making your preparation better
              </p>
          </main>

          <Button variant={"default"} size={"sm"}>
              <Plus className="mr-1 h-4 w-4" />
              Tests
          </Button>
      </main>
  </div>
  )
}

export default Rooms