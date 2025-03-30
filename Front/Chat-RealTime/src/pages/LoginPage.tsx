import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      try {
        localStorage.setItem("token", token);
        navigate("/perfile");
      } catch (error: any) {
        console.error(error);
      }
    } else {
      console.error("An error occurred while logging in");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-950 text-white border border-gray-800 rounded-lg p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="flex items-center justify-between">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full bg-gray-800 border border-gray-700 text-white rounded-md p-2"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <a
                href="/forgot-password"
                className="text-sm text-gray-400 hover:text-white"
              >
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full bg-gray-800 border border-gray-700 text-white rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-200"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link className="text-white hover:underline" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

