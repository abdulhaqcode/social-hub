import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-[364px] space-y-6">
        <div className="text-center">
          <span className="text-5xl font-bold">𝕏</span>
          <h1 className="text-3xl font-bold mt-8">Sign in to X</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" className="rounded-md h-[52px] bg-transparent border-border" />
          <Input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="rounded-md h-[52px] bg-transparent border-border" />
          <Button type="submit" className="w-full rounded-full h-[44px] font-bold bg-foreground text-background hover:bg-foreground/90">
            Log in
          </Button>
        </form>

        <p className="text-center text-muted-foreground">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
