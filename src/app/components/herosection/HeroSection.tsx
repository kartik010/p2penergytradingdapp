"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
export default function HeroSection() 
  { const { register, handleSubmit, reset } = useForm<FormData>();
  const [message, setMessage] = useState("");
  const router = useRouter();

  interface FormData {
    email: string;
  }

  const onSubmit = async (data: FormData) => {
    const response = await fetch("/api/send-paper", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setMessage("Research paper sent successfully!");
      reset();
    } else {
      setMessage("Failed to send the paper. Try again.");
      }
    };
  
    return (
        <section className="items-center py-20 bg-gray-100 flex"><div className="w-1/2 mr-14 ml-14 mt-14">
        <h2 className="text-1xl text-[#34D399] bg-[#34d39920] flex rounded-xl w-80 p-2 mb-8"><Zap /><span className="pr-1"></span>Revolutionary Energy Trading Platform</h2>
        <h2 className="text-6xl font-bold mb-4 ">Your Energy, <span className="text-[#34D399]">Your Earnings</span></h2>
        <p className="text-2xl text-gray-700 mb-14">Turn your solar and wind energy into profit. Trade directly with energy consumers instead of selling back to the grid at lower rates.</p>
        <button onClick={() => router.push("/trade")} className="bg-[#34D399] text-white px-8 py-3 rounded-lg shadow-md flex justify-center items-center hover:bg-[#2ca583] transition-all"> Learn More  <ArrowRight className="h-4 w-4 ml-4" />
        </button></div>
        <div>
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md mr-16">
      <h2 className="text-2xl font-bold mb-4 text-center">Get Our Research Paper</h2>
      <p className="text-gray-600 text-center mb-4">
        Enter your email below, and we&apos;ll send you our latest research paper.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Enter your email"
          className="border p-2 rounded-md w-full"
        />
        <button
          type="submit"
          className="bg-[#34D399] text-white py-2 rounded-md hover:bg-green-500 transition"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-3 text-center text-sm text-gray-700">{message}</p>}
    </div>

        </div>
      </section>
    );
  }
