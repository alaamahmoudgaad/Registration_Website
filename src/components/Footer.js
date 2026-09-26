import { FaWhatsapp, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const whatsappNumber = "201069842136"; 

  return (
    <footer className="w-full py-8 mt-12 border-t border-slate-200 text-center relative z-10 text-sm text-slate-600">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="flex items-center gap-1.5 font-medium">
          Need help or want to get in touch? 
          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-green-600 font-bold hover:text-green-700 transition-colors bg-green-50 px-3 py-1 rounded-full border border-green-200 shadow-sm"
          >
            <FaWhatsapp className="text-base" /> Contact via WhatsApp
          </a>
        </p>
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} MA Suez University Student Chapter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}