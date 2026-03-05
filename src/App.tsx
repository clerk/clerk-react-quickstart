import { Show, SignInButton, UserButton } from "@clerk/react";

export default function App() {
  return (
    <header>
      <Show when="signed-out">
        <SignInButton />
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </header>
  );
}
