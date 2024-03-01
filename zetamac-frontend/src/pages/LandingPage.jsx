// make a landing page component
import React from 'react';
import { Button } from '@/components/ui/button';
import { SignInButton } from "@clerk/clerk-react";
import ZetaLogo from '@/assets/zeta.png';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { IoIosTime } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";

function LandingPage() {
    return (
        <>
            <div className="mt-44 flex flex-col items-center gap-10">
                <img src={ZetaLogo} width={50} alt="Logo" />
                <h1 className="mt-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Zetamac Duels
                </h1>
                <SignInButton>
                    <Button>Get Started</Button>
                </SignInButton>
                <div className="flex gap-10">
                <Card className="w-[370px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                    <CardHeader>
                    <CardTitle><FaUserFriends /></CardTitle>
                    <CardTitle>Challenge Your Friends</CardTitle>
                    </CardHeader>
                    <CardContent>
                    Jump into the world of Zetamac Duels, where you can directly challenge your friends to fast-paced math battles. Create private rooms, invite your friends, and see who has the quickest mind. Perfect for competitive friends or those looking to sharpen their math skills together.
                    </CardContent>
                </Card>

                <Card className="w-[370px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                    <CardHeader>
                    <CardTitle><IoIosTime /></CardTitle>
                    <CardTitle>Real-Time Duels</CardTitle>
                    </CardHeader>
                    <CardContent>
                    Experience the thrill of real-time competition. With Zetamac Duels, every second counts as you and your opponent solve math problems head-to-head. Watch the scores live and push your limits to be the math champion among your peers.
                    </CardContent>
                </Card>

                <Card className="w-[370px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                    <CardHeader>
                    <CardTitle><MdLeaderboard /></CardTitle>
                    <CardTitle>Leaderboards & Achievements</CardTitle>
                    </CardHeader>
                    <CardContent>
                    Make your mark on the Zetamac Duels leaderboard and collect achievements along the way. Track your progress, set personal bests, and climb the ranks to prove your prowess. It's not just about winning a single duel; it's about becoming a legend.
                    </CardContent>
                </Card>

                </div>
            </div>
        </>
    )
}

export default LandingPage;