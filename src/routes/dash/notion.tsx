import { NotionIcon } from "@/components/dashboard/notion-icon"
import { Button } from "@/components/ui/button"

const Notion = () => {
  return (
    <div className="w-full p-4">
        <main className="flex justify-between items-center">
            <main className="flex flex-col gap-1">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Integrations - Notion
                </h1>
                <p className="text-muted-foreground text-sm font-light tracking-tight leading-tight">
                   Connect with Notion to make your learning experience much more faster and efficient
                </p>
            </main>

            <div className="relative">
                <Button variant={"default"} className="relative" size={"sm"}>
                    <NotionIcon />
                    Connect
                </Button>
            </div>
        </main>
    </div>
  )
}

export default Notion