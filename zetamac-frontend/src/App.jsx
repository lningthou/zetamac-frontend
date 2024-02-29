import { SignOutButton, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import LandingPage from '@/pages/LandingPage'
import MainPage from '@/pages/MainPage'

function App() {
 
  return (
    <div>
      <SignedOut>
        <LandingPage/>
      </SignedOut>
      <SignedIn>
        <MainPage/>
      </SignedIn>
    </div>
  )
}
 
export default App
