import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TutorSignupPage() {
  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Tutor Sign Up</h1>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Enter your full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Short Bio</Label>
          <Input id="bio" placeholder="Write about yourself" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subjects">Subjects You Teach</Label>
          <Input id="subjects" placeholder="E.g. Math, Physics" />
        </div>
        <Button className="w-full" type="submit">Sign Up as Tutor</Button>
      </form>
    </div>
  );
}
