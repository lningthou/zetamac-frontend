// make a landing page component
import React from 'react';
import { Button } from '@/components/ui/button';
import { SignInButton } from "@clerk/clerk-react";

function LandingPage() {
    return (
        <>
            <div className="border-solid border-2 border-sky-500 flex flex-col items-center">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Zetamac Game
                </h1>
                <SignInButton>
                    <Button>Sign in</Button>
                </SignInButton>
            </div>
        </>
    )
}

export default LandingPage;