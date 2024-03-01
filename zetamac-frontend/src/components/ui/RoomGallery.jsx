import react from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function RoomGallery() {
  const dummyRooms = [
    {
      id: "1",
      name: "Room 1",
      owner: "User 1",
      players: ["User 1", "User 2", "User 3"],
      status: "playing",
      game: "Zetamac",
    },
    {
      id: "2",
      name: "Room 2",
      owner: "User 2",
      players: ["User 1", "User 2", "User 3"],
      status: "waiting",
      game: "Zetamac",
    },
    {
      id: "3",
      name: "Room 3",
      owner: "User 3",
      players: ["User 1", "User 2", "User 3"],
      status: "waiting",
      game: "Zetamac",
    },
    {
      id: "4",
      name: "Room 4",
      owner: "User 4",
      players: ["User 1", "User 2", "User 3"],
      status: "waiting",
      game: "Zetamac",
    },
    {
      id: "5",
      name: "Room 5",
      owner: "User 5",
      players: ["User 1", "User 2", "User 3"],
      status: "waiting",
      game: "Zetamac",
    },
    {
      id: "6",
      name: "Room 6",
      owner: "User 6",
      players: ["User 1", "User 2", "User 3"],
      status: "waiting",
      game: "Zetamac",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-10 w-9/12">
          {dummyRooms.map((room) => (
              <Card key={room.id}>
              <CardHeader>
                  <CardTitle>{room.name}</CardTitle>
                  <CardDescription>
                  {room.owner} is the owner of the room
                  </CardDescription>
              </CardHeader>
              <CardContent>
                  <p>Players: {room.players.join(", ")}</p>
                  <p>Status: {room.status}</p>
                  <p>Game: {room.game}</p>
              </CardContent>
              <CardFooter>
                  <Button>Join Room</Button>
              </CardFooter>
              </Card>
          ))}
      </div>
    </>
  );
}

export default RoomGallery;
