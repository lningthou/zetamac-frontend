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
import { useState, useEffect } from "react";
import axios from "axios";

function RoomGallery() {
  const [rooms, setRooms] = useState([]);

  // useEffect to fetch rooms from backend
  useEffect(() => {
    axios.get('http://localhost:3000/rooms')
      .then((response) => {
        console.log(response.data);
        setRooms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-10 w-9/12">
          {rooms.map((room) => (
              <Card key={room.id}>
              <CardHeader>
                  <CardTitle>{room.room_name}</CardTitle>
                  <CardDescription>
                  {room.host_name} is the host of the room
                  </CardDescription>
              </CardHeader>
              <CardContent>
                  {/* <p>Players: {room.users.join(", ")}</p> */}
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
