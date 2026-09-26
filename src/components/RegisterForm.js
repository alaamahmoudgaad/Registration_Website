import { FaLink ,FaFacebook , FaLinkedin ,FaUser, FaLightbulb, FaUsers, FaGraduationCap } from 'react-icons/fa';
export default function RegisterForm({ formData, handleChange, handleSubmit }) {
  const inputClass = "w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all placeholder:text-slate-400 shadow-inner";
  const labelClass = "block text-xs font-bold text-blue-900 uppercase tracking-wider mb-2 text-left";

  const committeesList = [
    "PR",
    "HR",
    "Operation",
    "Technical",
    "Web Development",
    "Social Media",
    "Multi Media"
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left relative z-10">

      {/* 1. Personal Information */}
      <div className="space-y-4">

        <div className="flex items-center gap-2 text-blue-900 font-bold border-b border-slate-200 pb-2 text-red-600">
          <FaUser className="text-red-600 text-base" /> PERSONAL INFORMATION
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-blue-900 text-sm">Full Name <span className="text-red-600"> *</span>  <span className="text-slate-400 font-normal text-sm">(Quadruple name)</span></label>
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

      </div>

      <div className="space-y-8 pt-8">
        <div className="flex items-center gap-2 text-blue-900 font-bold  border-b border-slate-200 pb-2 text-red-600">
          <FaLightbulb className="text-amber-500 text-base" /> EXPERIENCE
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-blue-900 text-sm">Have you participated in any student activity before? <span className="text-red-600"> *</span></label>
          <select name="hasStudentActivity" value={formData.hasStudentActivity} onChange={handleChange} required className={inputClass}>
            <option hidden value="" disabled className="bg-white text-slate-400 ">Select an option</option>
            <option value="Yes" className="bg-white text-slate-900">Yes, I have</option>
            <option value="No" className="bg-white text-slate-900">No, this is my first time</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-blue-900 text-sm">How did you know about Suez University Student Chapter? <span className="text-red-600"> *</span></label>
          <select name="howYouKnowUs" value={formData.howYouKnowUs} onChange={handleChange} required className={inputClass}>
            <option hidden value="" disabled className="bg-white text-slate-400">Select a source</option>
            <option value="Facebook" className="bg-white text-slate-900">Facebook Page</option>
            <option value="Friends" className="bg-white text-slate-900">Friends </option>
            <option value="Booth" className="bg-white text-slate-900">University </option>
            <option value="Events" className="bg-white text-slate-900">Previous Events</option>
            <option value="Other" className="bg-white text-slate-900">Other</option>
          </select>
        </div>
      </div>


      <div className="space-y-4 pt-8">
        <div className="flex items-center gap-2 text-red-600 font-bold text-sm border-b border-slate-200 pb-2">
          <FaUsers className=" text-black text-base" /> PREFERRED COMMITTEES <span className="text-slate-400 font-normal text-sm">(Max 2 choices)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">First Preference Committee <span className="text-red-600"> *</span></label>
            <select name="firstCommittee" value={formData.firstCommittee} onChange={handleChange} required className={inputClass}>
              <option value="" hidden disabled className="bg-white text-slate-400">Select First Committee</option>
              {committeesList.map((comm, idx) => (<option key={idx} value={comm} className="bg-white text-slate-900">{comm}</option>))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">Second Preference Committee <span className="text-slate-400 font-normal">(Optional)</span></label>
            <select name="secondCommittee" value={formData.secondCommittee} onChange={handleChange} className={inputClass}>
              <option value="" hidden className="bg-white text-slate-400">Select Second Committee (Optional)</option>
              {committeesList.map((comm, idx) => (<option key={idx} value={comm} className="bg-white text-slate-900">{comm}</option>))}
            </select>
          </div>
        </div>
      </div>


      <div className="space-y-8 pt-8">
        <div className="flex items-center gap-2 text-red-600 font-bold text-sm border-b border-slate-200 pb-2">
          <FaGraduationCap className="text-black text-lg" /> ACADEMIC INFORMATION
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">University <span className="text-red-600"> *</span></label>
            <input type="text" name="university" value={formData.university} onChange={handleChange} required className={inputClass} placeholder="e.g. Suez University" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">Faculty <span className="text-red-600"> *</span></label>
            <input type="text" name="faculty" value={formData.faculty} onChange={handleChange} required className={inputClass} placeholder="e.g. Faculty of Computers and Information" />
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

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
              <option value="Year 5" className="bg-white text-slate-900">Year 5</option>
            </select>
          </div>
        </div>
      </div>


      <div className="space-y-4 pt-8">
        <div className="flex items-center gap-2 text-red-600 font-bold text-sm border-b border-slate-200 pb-2">
          <FaLink className="text-black text-base" /> SOCIAL LINKS <span className="text-slate-400 font-normal text-sm">(optional)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">Facebook Profile</label>
            <div className="relative flex items-center">
              <FaFacebook className="absolute left-4 text-slate-400 text-base" />
              <input type="url" name="facebook" value={formData.facebook || ''} onChange={handleChange} className={`${inputClass} pl-11`} placeholder="facebook.com/yourprofile" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-blue-900 text-sm">LinkedIn Profile</label>
            <div className="relative flex items-center">
              <FaLinkedin className="absolute left-4 text-slate-400 text-base" />
              <input type="url" name="linkedin" value={formData.linkedin || ''} onChange={handleChange} className={`${inputClass} pl-11`} placeholder="linkedin.com/in/yourprofile" />
            </div>
          </div>
        </div>
      </div>

      <button type="submit" style={{ cursor: 'pointer' }}
        className="w-full mt-8 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-blue-500/25 transition-all duration-300 text-base transform hover:-translate-y-0.5">
        Submit Registration 
      </button>

    </form>

  );


}