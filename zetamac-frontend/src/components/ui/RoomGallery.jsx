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
  const [rooms, setRooms] = useState([]);

  // useEffect to fetch rooms from backend
  useEffect (() => {
    axios.get('http://localhost:3000/rooms')
    .then((response) => {
      console.log(response.data);
      setRooms(response.data);
    })
    .catch((error) => {
      console.log(error);
    }, [])});

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
