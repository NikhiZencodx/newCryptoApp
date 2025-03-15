import AuthForm from '@/components/auth/AuthForm';

export const metadata = {
  title: 'Login | RVC Infinity',
  description: 'Sign in to your RVC Infinity account',
};

export default function LoginPage() {
  return <AuthForm mode="login" />;
}