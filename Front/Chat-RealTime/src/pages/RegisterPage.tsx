"use client"
import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:3000/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })

      if (!response.ok){
        throw new Error("An error occurred while registering");
      }
      navigate("/login")
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-950 text-white border border-gray-800 rounded-lg p-13">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-gray-400 space-y-10">
            Enter your details to create your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="flex items-center justify-between"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full bg-gray-800 border border-gray-700 text-white rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="flex items-center justify-between"
            >
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
            <label
              htmlFor="password"
              className="flex items-center justify-between"
            >
              Password
            </label>
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
            {isLoading ? "Creating account..." : "Register"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-white hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

