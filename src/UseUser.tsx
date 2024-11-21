import { useUser } from '@clerk/clerk-react';

export default function UseUser() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <div>
      <span>isSignedIn: {isSignedIn?.toString()}</span>
      <br />
      <span>isLoaded: {isLoaded?.toString()}</span>
      <br />
    </div>
  );
}
