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
import { useState } from 'react';

const socket = io.connect('http://localhost:3000');

function MainPage() {
    const { isLoaded, user } = useUser();

    return (
        <>
        <div>
            <UserButton/>
        </div>
        
        <div className="mt-15 mb-20 flex flex-col items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Join or create a room to start playing!
        </h1>
        <RoomGallery socket={socket}/>
        <CreateRoomButton user={user} socket={socket}/>
        </div>
        </>
    );
}

export default MainPage;