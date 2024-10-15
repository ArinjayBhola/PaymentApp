"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    setError("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        phone: phone,
        password: password,
      });
      if (res?.error) {
        setError(res.error);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSignIn();
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Login to Your Account</h1>
        <div className="w-3/4">
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 mb-3 border rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-green-500 text-white py-3 rounded"
            onClick={handleSignIn}
            onKeyUp={handleKeyPress}
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="w-1/2 bg-gradient-to-tr from-green-400 to-teal-500 flex flex-col justify-center items-center">
        <h2 className="text-white text-4xl font-bold mb-4">New Here?</h2>
        <button className="bg-white text-green-500 font-bold py-3 px-8 rounded-full">
          Sign Up
        </button>
      </div>
    </div>
  );
}
