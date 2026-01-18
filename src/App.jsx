export default function App() {
  return (
    // This div centers everything on the screen
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
      
      {/* The Card Container */}
      <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:scale-105">
        
        {/* Top Decorative Bar */}
        <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        
        {/* Content Section */}
        <div className="px-6 pb-8">
          <div className="relative -mt-12 flex justify-center">
            <div className="h-24 w-24 rounded-full border-4 border-white bg-gray-200 text-3xl flex items-center justify-center">
              👤
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Your Name</h2>
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">Frontend Developer</p>
            <p className="mt-3 text-gray-600">
              I build high-performance websites using React and Tailwind CSS. Let's create something amazing together!
            </p>
          </div>

          {/* Social Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <button className="rounded-full bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-600">
              Follow
            </button>
            <button className="rounded-full border border-gray-300 px-6 py-2 font-semibold text-gray-700 hover:bg-gray-50">
              Message
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
