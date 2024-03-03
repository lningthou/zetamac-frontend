import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRoomNameRedux, setRoomPassword } from '@/state/roomSlice';
import { useSelector } from 'react-redux';


function CreateRoomButton({user, socket}) {
  // State for the room name and password
  const [roomName, setRoomName] = useState('');
  const [password, setPassword] = useState('')
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const roomName1 = useSelector((state) => state.room.room_name);
  // Helper function to create a room
  let createRoom = () => {
    console.log('Create room button clicked!');
    let data = {room_name: roomName, room_password: password, user_id: user.id, username: user.username};
    dispatch(setRoomNameRedux(data.room_name));
    dispatch(setRoomPassword(data.room_password));
    socket.emit('create-room', data);
    // Add logic to create a room here
    //send to GamePage
    console.log(data)
  };
  
  useEffect(() => {
    console.log(roomName1);
    if (roomName1 != 0) {
      navigate('./gamepage');
    }
  }, [roomName1])

  // Handlers for input changes
  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Room</Button>
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
            <Input id="name" value={roomName} onChange={handleRoomNameChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input id="password" type="password" value={password} onChange={handlePasswordChange} className="col-span-3" />
          </div>
        </div>
        <DialogClose>
        <DialogFooter>
          <Button type="submit" onClick={createRoom}>Create</Button>
        </DialogFooter>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default CreateRoomButton;
