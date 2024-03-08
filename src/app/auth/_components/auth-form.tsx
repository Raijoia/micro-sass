import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function AuthForm() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-10 text-center">
        <div className="container">
          <h1 className="text-3xl font-bold">Authentication</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email below to login to your account
          </p>
        </div>
      </header>
      <main className="flex-1">
        <div className="container flex flex-col items-center gap-4">
          <Card className="w-full max-w-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="m@example.com"
                    required
                    type="email"
                  />
                </div>
                <Button className="w-full">Send Magic Link</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
