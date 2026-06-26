// app/page.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { heroData } from '@/data/portfolioData';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import AboutMe from '@/components/AboutMe';

export default function Home() {
  // လက်ရှိ ရွေးထားတဲ့ Tab ကို မှတ်ထားမည့် State (Default သည် 'home' ဖြစ်သည်)
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'about'>('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 📸 Profile Image & Top Header Section */}
        <div className="flex flex-col items-center text-center pt-8 pb-4">
          <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image 
              src="/profile.jpg"  // public/profile.jpg ဖိုင်ကို လှမ်းခေါ်ခြင်း
              alt="Profile Image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">{heroData.name}</h1>
          <p className="text-gray-600 font-medium mt-1">{heroData.title}</p>
        </div>

        {/* 🗂️ Tab Navigation Buttons */}
        <div className="flex justify-center border-b border-gray-200 my-8">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('home')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all ${
                activeTab === 'home'
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all ${
                activeTab === 'projects'
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all ${
                activeTab === 'about'
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              About Me
            </button>
          </nav>
        </div>

        {/* 🎯 Tab နှိပ်မှုအပေါ် မူတည်ပြီး သက်ဆိုင်ရာ Component ကို ပြောင်းလဲပြသခြင်း */}
        <div className="mt-6">
          {activeTab === 'home' && (
            <div>
              <Hero />
              <Experience />
            </div>
          )}
          
          {activeTab === 'projects' && <Projects />}
          
          {activeTab === 'about' && <AboutMe />}
        </div>

      </main>
    </div>
  );
}