import { useBots } from "@/hooks/use-bots"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { formatDate } from "@/utils/format-date";
import { Button } from "../ui/button";
import { MessageCircle, Pen, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { avatars } from "@/config/appwrite";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Skeleton } from "../ui/skeleton";

const ListTeacherBot = () => {
    const {data, isError, isLoading} = useBots();
    console.log(data);

    if (isLoading) {
        return (
            <Card>
            <CardHeader className="flex flex-col gap-1">
                <CardTitle>
                    <Skeleton className="w-[14vh] h-5" />
                </CardTitle>
                <CardDescription>
                    <Skeleton className="w-full h-7" />
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row gap-4 items-center">
                <CardDescription>
                    <Skeleton className="w-[8vh] h-5" />
                </CardDescription>
                <div className="flex flex-row -space-x-1 items-center">
                    <Skeleton className="w-10 h-10 rounded-full" />
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <p className="text-xs font-light text-muted-foreground tracking-tight">
                    <Skeleton className="w-[8vh] h-3" />
                </p>

                <main className="flex flex-row gap-2 items-center">
                    <Button size={"sm"} variant={"default"}>
                        <MessageCircle />
                    </Button>
                    <Button size={"sm"} variant={"outline"}>
                        <Pen />
                    </Button>
                    <Button size={"sm"} variant={"destructive"}>
                        <Trash2 />
                    </Button>
                </main>
            </CardFooter>
        </Card>
        )
    };

    useEffect(() => {
        if (isError) {
            toast({
                title : "Failed",
                description : "Fetching Failed",
                variant : "destructive"
            })
        }
    }, [isError])

    return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((content, index) => (
            <Card key={index}>
                <CardHeader>
                    <CardTitle>
                        {content?.title as string}
                    </CardTitle>
                    <CardDescription>
                        {content?.description as string}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row gap-4 items-center">
                       <CardDescription>
                            Documents
                       </CardDescription>
                       <div className="flex flex-row -space-x-1 items-center">
                            {content?.fileUrl.map((item : string, index : number) => (
                                <HoverCard>
                                    <HoverCardTrigger asChild>
                                        <Avatar key={index}>
                                            <AvatarImage className="object-contain" src={avatars.getQR(item)} alt={item} />
                                            <AvatarFallback>F</AvatarFallback>
                                        </Avatar>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="flex flex-col gap-3">
                                        <p className="text-center textsm font-medium text-foreground">Document QR</p>
                                        <img src={avatars.getQR(item)} alt={item} className="rounded-md shadow-md max-w-sm w-full h-40" />
                                    </HoverCardContent>
                                </HoverCard>
                            ))}
                       </div>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center">
                        <p className="text-xs font-light text-muted-foreground tracking-tight">
                            {formatDate(content?.$createdAt)}
                        </p>

                        <main className="flex flex-row gap-2 items-center">
                            <Button asChild size={"sm"} variant={"default"}>
                                <Link to={`learn/${content.$id as string}`}>
                                    <MessageCircle />
                                </Link>
                            </Button>
                            <Button size={"sm"} variant={"outline"}>
                                <Pen />
                            </Button>
                            <Button size={"sm"} variant={"destructive"}>
                                <Trash2 />
                            </Button>
                        </main>
                    </CardFooter>
            </Card>
        ))}
    </main>
  )
}

export default ListTeacherBot;

/*
$collectionId
: 
"6777c7eb002a2310ce0f"
$createdAt
: 
"2025-01-03T12:39:38.698+00:00"
$databaseId
: 
"6777c7a60018b6552e5f"
$id
: 
"6777da8700157f1ed51d"
$permissions
: 
[]
$updatedAt
: 
"2025-01-03T12:39:38.698+00:00"
description
: 
"my physics bot made with 2 books and especially to teach me physics"
fileUrl
: 
['https://cloud.appwrite.io/v1/storage/buckets/6776b…3b17aae5f&project=6776b5c20033b17aae5f&mode=admin']
title
: 
"El Professor Science"
userId
: 
"6776e6fb000c0f32429e"
*/