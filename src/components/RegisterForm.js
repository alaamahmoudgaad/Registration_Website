import { FaLink, FaFacebook, FaLinkedin, FaUser, FaLightbulb, FaUsers, FaGraduationCap, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function RegisterForm({ formData, handleChange, handleSubmit, currentStep, nextStep, prevStep }) {
  const inputClass = "w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all placeholder:text-slate-400 shadow-inner";

  const committeesList = [
    "PR", "HR", "Operation", "Technical", "Web Development", "Social Media", "Multi Media"
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left relative z-10">

      <div className="flex items-center justify-between mb-4 px-2">
        <span className="text-xs font-bold text-blue-900">Step {currentStep} of 5</span>
        <div className="flex gap-1.5">
          <div className={`h-1.5 w-5 rounded-full ${currentStep >= 1 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
          <div className={`h-1.5 w-5 rounded-full ${currentStep >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
          <div className={`h-1.5 w-5 rounded-full ${currentStep >= 3 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
          <div className={`h-1.5 w-5 rounded-full ${currentStep >= 4 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
          <div className={`h-1.5 w-5 rounded-full ${currentStep >= 5 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
        </div>
      </div>

      {currentStep === 1 && (
        <div className="space-y-4 animate-fadeIn">
          <div className="flex items-center gap-2 text-blue-900 font-bold border-b border-slate-200 pb-2 text-red-600">
            <FaUser className="text-red-600 text-base" /> PERSONAL INFORMATION
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">Full Name <span className="text-red-600"> *</span> <span className="text-slate-400 font-normal text-sm">(Quadruple name)</span></label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className={inputClass} placeholder="e.g. Quadruple full name" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">WhatsApp Number <span className="text-red-600"> *</span></label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} placeholder="010xxxxxxxx" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">Email Address <span className="text-red-600"> *</span></label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="name@example.com" />
          </div>

          <button 
            type="button" 
            onClick={nextStep}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Next Step <FaArrowRight />
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center gap-2 text-blue-900 font-bold border-b border-slate-200 pb-2 text-red-600">
            <FaLightbulb className="text-amber-500 text-base" /> EXPERIENCE
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">Have you participated in any student activity before? <span className="text-red-600"> *</span></label>
            <select name="hasStudentActivity" value={formData.hasStudentActivity} onChange={handleChange} required className={inputClass}>
              <option hidden value="" disabled className="bg-white text-slate-400">Select an option</option>
              <option value="Yes" className="bg-white text-slate-900">Yes, I have</option>
              <option value="No" className="bg-white text-slate-900">No, this is my first time</option>
            </select>
          </div>

          {formData.hasStudentActivity === "Yes" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
              <div className="flex flex-col gap-2">
                <label className="text-blue-900 text-sm">Previous Chapter Name <span className="text-red-600"> *</span></label>
                <input type="text" name="previousChapter" value={formData.previousChapter || ''} onChange={handleChange} required className={inputClass} placeholder="e.g. IEEE, etc." />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-900 text-sm">Your Position <span className="text-red-600"> *</span></label>
                <input type="text" name="previousPosition" value={formData.previousPosition || ''} onChange={handleChange} required className={inputClass} placeholder="e.g. HR Member" />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">Why do you want to join MA Suez? <span className="text-red-600"> *</span></label>
            <textarea name="whyJoin" value={formData.whyJoin || ''} onChange={handleChange} required rows="3" className={inputClass} placeholder="Tell us why..." />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">What do you expect to gain? <span className="text-red-600"> *</span></label>
            <textarea name="whatToGain" value={formData.whatToGain || ''} onChange={handleChange} required rows="3" className={inputClass} placeholder="Your expectations..." />
          </div>

          <div className="flex gap-3 pt-2">
            <button 
              type="button" 
              onClick={prevStep}
              className="w-1/3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 px-4 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaArrowLeft /> Back
            </button>
            <button 
              type="button" 
              onClick={nextStep}
              className="w-2/3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Next Step <FaArrowRight />
            </button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center gap-2 text-blue-900 font-bold border-b border-slate-200 pb-2 text-red-600">
            <FaUsers className="text-black text-base" /> PREFERRED COMMITTEES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-blue-900 text-sm">First Preference Committee <span className="text-red-600"> *</span></label>
              <select name="firstCommittee" value={formData.firstCommittee} onChange={handleChange} required className={inputClass}>
                <option value="" hidden disabled className="bg-white text-slate-400">Select First</option>
                {committeesList.map((comm, idx) => (<option key={idx} value={comm} className="bg-white text-slate-900">{comm}</option>))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-blue-900 text-sm">Second Preference <span className="text-slate-400 font-normal">(Optional)</span></label>
              <select name="secondCommittee" value={formData.secondCommittee} onChange={handleChange} className={inputClass}>
                <option value="" hidden className="bg-white text-slate-400">Select Second</option>
                {committeesList.map((comm, idx) => (<option key={idx} value={comm} className="bg-white text-slate-900">{comm}</option>))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">Why did you choose this committee? <span className="text-red-600"> *</span></label>
            <textarea name="whyThisCommittee" value={formData.whyThisCommittee || ''} onChange={handleChange} required rows="4" className={inputClass} placeholder="Explain why you picked your preferred committee..." />
          </div>

          <div className="flex gap-3 pt-2">
            <button 
              type="button" 
              onClick={prevStep}
              className="w-1/3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 px-4 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaArrowLeft /> Back
            </button>
            <button 
              type="button" 
              onClick={nextStep}
              className="w-2/3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Next Step <FaArrowRight />
            </button>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center gap-2 text-red-600 font-bold text-sm border-b border-slate-200 pb-2">
            <FaGraduationCap className="text-black text-lg" /> ACADEMIC INFORMATION
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-blue-900 text-sm">University <span className="text-red-600"> *</span></label>
              <input type="text" name="university" value={formData.university} onChange={handleChange} required className={inputClass} placeholder="e.g. Suez University" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-blue-900 text-sm">Faculty <span className="text-red-600"> *</span></label>
              <input type="text" name="faculty" value={formData.faculty} onChange={handleChange} required className={inputClass} placeholder="e.g. Computers and Information" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-blue-900 text-sm">Department <span className="text-slate-400 font-normal">(Optional)</span></label>
              <input type="text" name="department" value={formData.department} onChange={handleChange} className={inputClass} placeholder="e.g. Computer Science" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-blue-900 text-sm">Academic Year / Level <span className="text-red-600"> *</span></label>
              <select name="academicYear" value={formData.academicYear} onChange={handleChange} required className={inputClass}>
                <option value="" hidden disabled className="bg-white text-slate-400">Select Level</option>
                <option value="Year 0" className="bg-white text-slate-900">Year 0 (Prep)</option>
                <option value="Year 1" className="bg-white text-slate-900">Year 1</option>
                <option value="Year 2" className="bg-white text-slate-900">Year 2</option>
                <option value="Year 3" className="bg-white text-slate-900">Year 3</option>
                <option value="Year 4" className="bg-white text-slate-900">Year 4</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button 
              type="button" 
              onClick={prevStep}
              className="w-1/3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 px-4 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaArrowLeft /> Back
            </button>
            <button 
              type="button" 
              onClick={nextStep}
              className="w-2/3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Next Step <FaArrowRight />
            </button>
          </div>
        </div>
      )}

      {currentStep === 5 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center gap-2 text-red-600 font-bold text-sm border-b border-slate-200 pb-2">
            <FaLink className="text-black text-base" /> SOCIAL LINKS & SOURCE
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">How did you know about us? <span className="text-red-600"> *</span></label>
            <select name="howYouKnowUs" value={formData.howYouKnowUs} onChange={handleChange} required className={inputClass}>
              <option hidden value="" disabled className="bg-white text-slate-400">Select source</option>
              <option value="Facebook" className="bg-white text-slate-900">Facebook Page</option>
              <option value="Friends" className="bg-white text-slate-900">Friends</option>
              <option value="Booth" className="bg-white text-slate-900">University</option>
              <option value="Events" className="bg-white text-slate-900">Previous Events</option>
              <option value="Other" className="bg-white text-slate-900">Other</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-blue-900 text-sm">Facebook Profile</label>
              <div className="relative flex items-center">
                <FaFacebook className="absolute left-4 text-slate-400 text-base" />
                <input type="url" name="facebook" value={formData.facebook || ''} onChange={handleChange} className={`${inputClass} pl-11`} placeholder="facebook.com/..." />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-blue-900 text-sm">LinkedIn Profile</label>
              <div className="relative flex items-center">
                <FaLinkedin className="absolute left-4 text-slate-400 text-base" />
                <input type="url" name="linkedin" value={formData.linkedin || ''} onChange={handleChange} className={`${inputClass} pl-11`} placeholder="linkedin.com/in/..." />
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              type="button" 
              onClick={prevStep}
              className="w-1/3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3.5 px-4 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaArrowLeft /> Back
            </button>
            <button 
              type="submit" 
              style={{ cursor: 'pointer' }}
              className="w-2/3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-xl transition-all cursor-pointer"
            >
              Registration 
            </button>
          </div>
        </div>
      )}

    </form>
  );
}