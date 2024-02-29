import React from 'react';
import { UserButton } from "@clerk/clerk-react"
import { Button } from '@/components/ui/button';

function MainPage() {
    return (
        <>
            <div>
                <UserButton />
            </div>
        </> 
    );
}

export default MainPage;