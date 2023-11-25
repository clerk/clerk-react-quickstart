import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

function App() {

  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  )
}

export default App
