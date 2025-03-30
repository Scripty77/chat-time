// Desc: Home page of the application

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col min-h-screen  text-white">
        <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-md space-y-6 text-center">
            <div className="space-y-1">
              <h1 className="text-8xl font-bold tracking-tight animate-salto">ChatNow</h1>
              <p className="text-gray-500">Connect with others in real-time</p>
            </div>

            <div className="flex flex-col space-y-4">
              {/* Botón para Login */}
              <Link className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200" to={"/login"}>
                Login
              </Link>
              {/* Botón para Register */}
              <Link className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200" to={"/register"}>
                Register
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
