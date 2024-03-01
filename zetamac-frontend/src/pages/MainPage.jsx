import React from 'react';
import { UserButton } from "@clerk/clerk-react"
import { Button } from '@/components/ui/button';
import CreateRoomButton from '@/components/ui/CreateRoomButton';
import { User } from 'lucide-react';
import RoomGallery from '@/components/ui/RoomGallery';
  
function MainPage() {
    return (
        <>
        <div>
            <UserButton/>
        </div>
        
        <div className="mt-15 flex flex-col items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Join or create a room to start playing!
        </h1>
        <RoomGallery/>
        <CreateRoomButton/>
        </div>
        
        </>
    );
}

export default MainPage;