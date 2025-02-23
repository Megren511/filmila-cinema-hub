
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const ViewerLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="font-serif text-3xl">Welcome Back</CardTitle>
          <CardDescription>
            Sign in to your viewer account to start watching amazing films
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Sign In</Button>
          <div className="text-sm text-muted-foreground text-center space-y-2">
            <p>
              Don't have an account?{" "}
              <Link to="/viewer/register" className="text-primary hover:underline">
                Create one
              </Link>
            </p>
            <p>
              Are you a filmmaker?{" "}
              <Link to="/filmmaker/login" className="text-primary hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ViewerLogin;
