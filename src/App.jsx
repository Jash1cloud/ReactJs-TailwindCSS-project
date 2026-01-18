import React, { useState } from 'react';

export default function App() {
  // 1. Data Object
  const user = {
    name: "Jash Chauhan",
    role: "Frontend Developer",
    bio: "I build high-performance websites using React and Tailwind CSS. Let's create something amazing together!",
    email: "jashchauhan1210@gmail.com"
  };

  // 2. State for Follow Button
  const [isFollowing, setIsFollowing] = useState(false);

  // 3. Handlers
  const handleFollow = () => setIsFollowing(!isFollowing);
  const handleMessage = () => {
    window.location.href = `mailto:${user.email}`;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
      <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:scale-105">
        
        {/* Top Decorative Bar */}
        <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>

        <div className="px-6 pb-8">
          <div className="relative -mt-12 flex justify-center">
             <div className="h-24 w-24 rounded-full border-4 border-white bg-gray-200 text-3xl flex items-center justify-center">
                👤
             </div>
          </div>

          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">{user.role}</p>
            <p className="mt-3 text-gray-600">{user.bio}</p>
          </div>

          {/* Interactivity Section */}
          <div className="mt-6 flex justify-center gap-4">
            <button 
              onClick={handleFollow}
              className={`rounded-full px-6 py-2 font-semibold text-white transition-colors ${
                isFollowing ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>

            <button 
              onClick={handleMessage}
              className="rounded-full border border-gray-300 px-6 py-2 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
