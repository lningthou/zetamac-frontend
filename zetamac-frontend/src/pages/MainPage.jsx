import React from 'react';
import { UserButton } from "@clerk/clerk-react"
import { Button } from '@/components/ui/button';
import CreateRoomButton from '@/components/ui/CreateRoomButton';
import { User } from 'lucide-react';
import RoomGallery from '@/components/ui/RoomGallery';
import { useUser } from '@clerk/clerk-react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import io from 'socket.io-client';
  

const socket = io.connect('http://localhost:3000');

function MainPage() {
    const { isLoaded, user } = useUser();

    let sendMessage = () => {
        socket.emit('send-message', 'Hello from the frontend');
    }

    return (
        <>
        <div>
            <UserButton/>
        </div>
        
        <div className="mt-15 mb-20 flex flex-col items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Join or create a room to start playing!
        </h1>
        <RoomGallery/>
        <CreateRoomButton user={user}/>
        </div>
        <div className="flex flex-col items-center w-full">
            <Input className="w-1/8"placeholder="Message" />
            <Button>Send WS Message</Button>
        </div>
        </>
    );
}

export default MainPage;