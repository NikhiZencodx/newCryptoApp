import AuthForm from '@/components/auth/AuthForm';

export const metadata = {
  title: 'Register | RVC Infinity',
  description: 'Create your RVC Infinity account',
};

export default function RegisterPage() {
  return <AuthForm mode="register" />;
}