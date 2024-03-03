import React from 'react';
import { UserButton } from "@clerk/clerk-react"
import { Button } from '@/components/ui/button';
import CreateRoomButton from '@/components/ui/CreateRoomButton';
import { User } from 'lucide-react';
import RoomGallery from '@/components/ui/RoomGallery';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';


function MainPage({user, socket}) {

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