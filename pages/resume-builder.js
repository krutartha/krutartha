import { useState } from 'react';
import Select from 'react-select';
import { jsPDF } from 'jspdf';
import experiences from '../data/experiences';
import projects from '../data/projects';

// Prepare options for react-select
const experienceOptions = experiences.map((exp, idx) => ({
  value: idx,
  label: `${exp.role} @ ${exp.company}`,
}));
const projectOptions = projects.map((proj, idx) => ({
  value: idx,
  label: proj.title,
}));

const NAME = 'Krutartha Nagesh';
const CONTACT = '+1 929-684-9019 • krutartha2002@gmail.com • linkedin • portfolio • Syracuse, NY';
const EDUCATION = {
  school: 'Syracuse University – Syracuse, NY',
  degree: 'B.S. in Computer Science',
  grad: 'May 2025',
  gpa: '3.8/4.0',
};

export default function ResumeBuilder() {
  // By default, select all options
  const [selectedExperiences, setSelectedExperiences] = useState(experienceOptions);
  const [selectedProjects, setSelectedProjects] = useState(projectOptions);

  const handleGeneratePDF = (e) => {
    e.preventDefault();
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 40;

    // Header: Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text(NAME, pageWidth / 2, y, { align: 'center' });
    y += 20;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(CONTACT, pageWidth / 2, y, { align: 'center' });
    y += 25;

    // Section: EDUCATION
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('EDUCATION', 40, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(EDUCATION.school, 40, y + 18);
    doc.text(EDUCATION.degree, 40, y + 36);
    doc.setFont('helvetica', 'bold');
    doc.text(EDUCATION.grad, pageWidth - 40, y + 18, { align: 'right' });
    doc.text(`GPA: ${EDUCATION.gpa}`, pageWidth - 40, y + 36, { align: 'right' });
    y += 54;

    // Section: EXPERIENCE
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('EXPERIENCE', 40, y);
    y += 18;
    selectedExperiences.forEach((expOpt) => {
      const exp = experiences[expOpt.value];
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text(`${exp.role} - ${exp.company}`, 40, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.text(exp.duration, pageWidth - 40, y, { align: 'right' });
      y += 14;
      // Description as bullet points (split by ". " or ".\n")
      const bullets = exp.description.split(/\. |\n/).filter(Boolean);
      bullets.forEach((b) => {
        doc.circle(45, y + 2, 1, 'F');
        doc.text(doc.splitTextToSize(b.trim(), pageWidth - 70), 52, y + 5);
        y += 14;
      });
      y += 6;
    });

    // Section: PROJECTS
    y += 10;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('PROJECTS', 40, y);
    y += 18;
    selectedProjects.forEach((projOpt) => {
      const proj = projects[projOpt.value];
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text(proj.title, 40, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.text(`| ${proj.tech.join(', ')}`, 120, y);
      y += 14;
      // Description as bullet points (split by ". " or ".\n")
      const bullets = proj.description.split(/\. |\n/).filter(Boolean);
      bullets.forEach((b) => {
        doc.circle(45, y + 2, 1, 'F');
        doc.text(doc.splitTextToSize(b.trim(), pageWidth - 70), 52, y + 5);
        y += 14;
      });
      y += 6;
    });

    doc.save('resume.pdf');
  };

  return (
    <main className="min-h-screen bg-black text-gray-100 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Resume Builder</h1>
      <form className="w-full max-w-xl bg-zinc-900 rounded-lg p-8 border border-zinc-800 shadow-lg" onSubmit={handleGeneratePDF}>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2 text-white">Select Experiences</label>
          <Select
            isMulti
            options={experienceOptions}
            value={selectedExperiences}
            onChange={setSelectedExperiences}
            classNamePrefix="react-select"
            className="text-black"
            styles={{
              control: (base) => ({ ...base, backgroundColor: '#18181b', color: 'white', borderColor: '#27272a' }),
              menu: (base) => ({ ...base, backgroundColor: '#18181b', color: 'white' }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isSelected ? '#2563eb' : state.isFocused ? '#27272a' : '#18181b',
                color: 'white',
              }),
              multiValue: (base) => ({ ...base, backgroundColor: '#2563eb', color: 'white' }),
              multiValueLabel: (base) => ({ ...base, color: 'white' }),
              multiValueRemove: (base) => ({ ...base, color: 'white', ':hover': { backgroundColor: '#1e40af', color: 'white' } }),
              input: (base) => ({ ...base, color: 'white' }),
              singleValue: (base) => ({ ...base, color: 'white' }),
            }}
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2 text-white">Select Projects</label>
          <Select
            isMulti
            options={projectOptions}
            value={selectedProjects}
            onChange={setSelectedProjects}
            classNamePrefix="react-select"
            className="text-black"
            styles={{
              control: (base) => ({ ...base, backgroundColor: '#18181b', color: 'white', borderColor: '#27272a' }),
              menu: (base) => ({ ...base, backgroundColor: '#18181b', color: 'white' }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isSelected ? '#2563eb' : state.isFocused ? '#27272a' : '#18181b',
                color: 'white',
              }),
              multiValue: (base) => ({ ...base, backgroundColor: '#2563eb', color: 'white' }),
              multiValueLabel: (base) => ({ ...base, color: 'white' }),
              multiValueRemove: (base) => ({ ...base, color: 'white', ':hover': { backgroundColor: '#1e40af', color: 'white' } }),
              input: (base) => ({ ...base, color: 'white' }),
              singleValue: (base) => ({ ...base, color: 'white' }),
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg"
        >
          Generate PDF Resume
        </button>
      </form>
    </main>
  );
} 