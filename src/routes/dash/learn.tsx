import CreateBotsDialog from "@/components/learn/create-bots-dialog"
import ListTeacherBot from "@/components/learn/list-teacher-bot"

const Learn = () => {
  return (
    <div className="w-full p-4">
        <main className="flex justify-between items-center">
            <main className="flex flex-col gap-1">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Learn
                </h1>
                <p className="text-muted-foreground text-sm font-light tracking-tight leading-tight">
                    Create your own personalized teacher bots and learn interacting with them
                </p>
            </main>

            <CreateBotsDialog />
        </main>

        <main className="py-6">
            <ListTeacherBot />
        </main>
    </div>
  )
}

export default Learn