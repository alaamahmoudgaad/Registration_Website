export default function SuccessScreen({ onReset }) {
  return (
    <div className="text-center py-12 px-4 space-y-4 relative z-10">
      <div className="text-7xl mb-2 animate-bounce">🎉</div>
      <h2 className="text-3xl font-extrabold text-slate-900">Registration Successful!</h2>
      <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
        Thank you for applying to <strong className="text-blue-900">Suez University Student Chapter</strong>.<br/>
        We have successfully received your application and will contact you via WhatsApp very soon.
      </p>
      
      <div className="pt-6">
        <button 
          onClick={onReset} 
          style={{ cursor: 'pointer' }} 
          className="bg-slate-100 hover:bg-slate-200 text-blue-900 font-semibold py-3 px-6 rounded-xl transition duration-200 text-sm border border-slate-300 shadow-md"
        >
          Submit Another Response
        </button>
      </div>
    </div>
  );
}