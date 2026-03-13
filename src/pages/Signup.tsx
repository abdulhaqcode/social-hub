import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

export default function SignupPage() {
  const { signup } = useAuth();
  const [form, setForm] = useState({ email: '', password: '', username: '', displayName: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(form);
  };

  const update = (key: string, value: string) => setForm(f => ({ ...f, [key]: value }));

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-[364px] space-y-6">
        <div className="text-center">
          <span className="text-5xl font-bold">𝕏</span>
          <h1 className="text-3xl font-bold mt-8">Create your account</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input value={form.displayName} onChange={e => update('displayName', e.target.value)} placeholder="Name" className="rounded-md h-[52px] bg-transparent border-border" />
          <Input value={form.username} onChange={e => update('username', e.target.value)} placeholder="Username" className="rounded-md h-[52px] bg-transparent border-border" />
          <Input value={form.email} onChange={e => update('email', e.target.value)} placeholder="Email" className="rounded-md h-[52px] bg-transparent border-border" />
          <Input value={form.password} onChange={e => update('password', e.target.value)} type="password" placeholder="Password" className="rounded-md h-[52px] bg-transparent border-border" />
          <Button type="submit" className="w-full rounded-full h-[44px] font-bold bg-foreground text-background hover:bg-foreground/90">
            Create account
          </Button>
        </form>

        <p className="text-center text-muted-foreground">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
