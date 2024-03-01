import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import socket from "@/client_socket"

function CreateRoomButton() {

  // Helper function to create a room
  const createRoom = () => {
    // TODO: Implement create room logic
    // get the room name and password from the input fields
    const roomName = document.getElementById('name').value;
    const roomPassword = document.getElementById('password').value;
    console.log(roomName, password)
    // send a request with axios to the server to create a room
    // the server should return a success message or an error message
    axios.post("http://localhost:3000/rooms", { name: roomName, password: roomPassword})
    // if the room is created successfully, close the dialog
    // if there is an error, show an error message
    socket.emit("room_created")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a room</DialogTitle>
          <DialogDescription>
            Enter some information about your room. Click create when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Room Name
            </Label>
            <Input id="name" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input id="password" value="" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={createRoom}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateRoomButton;
