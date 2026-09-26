export default function Header() {
  return (
    <div className="flex flex-col items-center text-center mb-8 border-b border-slate-200 pb-6 relative z-10">
      <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold text-blue-900 tracking-wider shadow-inner">
        <span>APPLICATIONS OPEN - SUEZ UNIVERSITY STUDENT CHAPTER</span>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-2">
        <div className="bg-white p-2  flex items-center justify-center">
          <img 
            src="/logo-removebg-preview.png" 
            alt="Suez University Student Chapter Logo" 
            className="w-36 h-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden w-16 h-16 bg-gradient-to-tr from-blue-800 to-red-600 rounded-xl items-center justify-center font-bold text-white text-xl shadow-md">
            MA
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-xs uppercase tracking-widest text-blue-900 font-extrabold">Suez University</h2>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Student Chapter <span className="text-red-600">Registration</span>
          </h1>
        </div>
      </div>
      <p className="text-slate-600 text-sm mt-3">
        Join our innovative community and shape your future with us!
      </p>
    </div>
  );
}