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
import { createClient } from '@supabase/supabase-js';

function RoomGallery({socket}) {
  const [rooms, setRooms] = useState([]);

  // useEffect to fetch rooms from backend
  useEffect(() => {
    axios.get('http://localhost:3000/rooms')
      .then((response) => {
        console.log("Set rooms to initial data!")
        setRooms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    socket.on('room-created', (data) => {
      console.log('Recieved room-created from WSS:', data);
      if (!data) {
        console.log("Error creating room")
      } else {
        console.log("Room created successfully")
        console.log(data);
        console.log(rooms);
        setRooms((rooms) => [...rooms, data]);
      }
    });
    return () => {
      socket.off('room-created');
    };
  }, [socket])


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
