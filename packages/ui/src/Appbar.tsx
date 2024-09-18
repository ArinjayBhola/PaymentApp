import { Button } from "./button";

interface AppbarProps {
  user?: string;
  onSignin: any;
  onSignout: any;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div>
      <div>Payment App</div>
      <div>
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Signout" : "Signin"}
        </Button>
      </div>
    </div>
  );
};
