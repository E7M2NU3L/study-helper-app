import DeleteSchedule from "@/components/schedule/delete-schedule"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, Eye } from "lucide-react"
import { Link } from "react-router-dom"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

const tasks = Array.from({ length: 21 }, (_, index) => ({
    id: index,
    title: "Model a time gravity equation along with MATLAB",
    description: "The instructions for this assignment are as follows...",
    dueDate: new Date().toDateString(), // Formatting for due date
}));

const SingleTask = () => {
  return (
    <div className="min-h-screen">
        <main className="min-h-[10vh] w-full bg-background items-center flex flex-row justify-between px-4">
            <main className="flex flex-row items-center gap-2">
                    <Button size={"sm"} variant={"ghost"} asChild>
                        <Link to={"/schedule"}>
                            <ChevronLeft />
                        </Link>
                    </Button>

                    <main className="flex flex-col justify-start gap-1 max-w-[30vw]">
                        <h1 className="text-sm line-clamp-1 font-medium tracking-tight text-foreground">GRE Preparations - 6 Months</h1>
                        <p className="text-xs line-clamp-1 font-medium text-foreground">
                            custom study plan created for GRE preparations to boost the students score in GRE,
                        </p>
                    </main>
            </main>
            
            <main className="flex flex-row items-center gap-2">
                <DeleteSchedule />
            </main>
        </main>

        <main className="flex-1 bg-background">
            <ScrollArea className="p-4 h-[82vh]">
                <main className="flex flex-col gap-4 md:flex-row">
                <Card className="">
                    <CardHeader>
                        <CardTitle className="text-xl">
                           Tasks
                        </CardTitle>
                        <CardDescription className="items-center flex flex-row gap-1">
                            Marks Assigned: <span className="text-primary">1</span> Negative Marks: <span className="text-red-500">0</span>
                        </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex flex-col gap-2 justify-start">
                    <ScrollArea className="h-[50vh]">
                    <Table>
                        <TableCaption>A list of pending tasks.</TableCaption>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-12 text-center">Select</TableHead>
                            <TableHead>Task</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell className="text-center">
                                <Input type="checkbox" className="h-4 w-4" />
                                </TableCell>
                                <TableCell className="font-medium">{task.title}</TableCell>
                                <TableCell className="ine-clamp-4 md:line-clamp-2 text-muted-foreground text-xs">
                                {task.description}
                                </TableCell>
                                <TableCell className="text-primary">{task.dueDate}</TableCell>
                                <TableCell className="text-right">
                                <Button variant="outline" size="sm">
                                    <Eye />
                                </Button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                        </ScrollArea>
                    </CardContent>

                    <CardFooter className="flex justify-end items-center gap-2">
                        <p className="text-sm font-light">
                            pending - <span className="text-orange-500">12</span>
                        </p>
                    </CardFooter>
                </Card>
                <Separator orientation="vertical" className="hidden md:block" />
                <Separator orientation="horizontal" className="block md:hidden" />
                <Card className="">
                    <CardHeader>
                        <CardTitle>
                            Assignments
                        </CardTitle>
                        <CardDescription>
                            UnAnswered questions are marked as <span className="text-destructive">Red</span>, Answered in <span className="text-primary">Green</span> and Reviewed in <span className="text-orange-500">Orange</span> 
                        </CardDescription>
                    </CardHeader>

                    <CardContent className=" flex flex-row flex-wrap gap-4">
                    <ScrollArea className="h-[50vh]">
                    <Table>
                        <TableCaption>A list of pending tasks.</TableCaption>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-12 text-center">Select</TableHead>
                            <TableHead>Task</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell className="text-center">
                                <Input type="checkbox" className="h-4 w-4" />
                                </TableCell>
                                <TableCell className="font-medium">{task.title}</TableCell>
                                <TableCell className="line-clamp-4 md:line-clamp-2 text-muted-foreground text-xs whitespace-normal">
                                {task.description}
                                </TableCell>
                                <TableCell className="text-primary">{task.dueDate}</TableCell>
                                <TableCell className="text-right">
                                <Button variant="outline" size="sm">
                                    <Eye />
                                </Button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </ScrollArea>
                    </CardContent>
                    <CardFooter className="flex justify-end items-center gap-2">
                        <p className="text-sm font-light">
                            pending - <span className="text-orange-500">12</span>
                        </p>
                    </CardFooter>
                </Card>
                </main>
            </ScrollArea>
        </main>
        <main className="items-center flex flex-row gap-4 min-h-[8vh] px-4">
            <p className="text-sm font-medium tracking-tight">
                Completed - <span className="text-primary">6</span>, Due - <span className="text-orange-500">4</span>, Abondoned - <span className="text-destructive">3</span>
            </p>
        </main>
    </div>
  )
}

export default SingleTask