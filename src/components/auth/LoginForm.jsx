import GoogleButton from './GoogleButton';
import supabase from '@/lib/db';
import { useRouter } from 'next/router';


export default function LoginForm() {
  const router = useRouter();

  const handleEmailPasswordLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login failed: " + error.message);
      return;
    }

    router.push("/explore-ideas"); // redirect setelah login
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/me/profile`, // redirect setelah login
      },
    });

    if (error) {
      alert("Google login failed: " + error.message);
    }
  };

  return (
    <form onSubmit={handleEmailPasswordLogin} className="space-y-6">
      <div>
        <label className="block text-sm font-bold mt-0">
          EMAIL
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter your registered email"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-bold">
          PASSWORD
        </label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary font-bold py-2 rounded mb-0">
        Login
      </button>

      <div className="flex items-center justify-center my-2 text-sm text-gray-500">
        <span className="w-full border-b border-black"></span>
        <span className="px-2">Or</span>
        <span className="w-full border-b border-black"></span>
      </div>

      <GoogleButton onClick={handleGoogleLogin} title={"google"} />
     
    </form>
  );
};
