import { SignOutButton, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Routes, Route } from 'react-router-dom';
import GamePage from './pages/GamePage';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import io from 'socket.io-client';
import { useUser } from '@clerk/clerk-react';

function App() {
 

  const socket = io.connect('http://localhost:3000');
  const { isLoaded, user } = useUser();

  return (
    <div>
      <SignedOut>
        <LandingPage/>
      </SignedOut>
      <SignedIn>
        <Routes>
          <Route path="/" element={<MainPage user = {user} socket = {socket}/>} />
          <Route path="/gamepage" element={<GamePage user = {user} socket = {socket}/>} />
        </Routes>
      </SignedIn>
    </div>
  )
}

export default App;
