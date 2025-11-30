

// import React, { useState, useEffect } from 'react';
// import { CheckCircle2, Circle, Calendar, Target, Clock, Award } from 'lucide-react';

// const StudyTracker = () => {
//   const [checkedItems, setCheckedItems] = useState({});
//   const [currentDay, setCurrentDay] = useState(1);

//   const studyPlan = {
//     week1: {
//       title: "Week 1: Python Foundations + OOP",
//       days: [
//         {
//           day: 1,
//           title: "Python Basics Revision - Part 1",
//           hours: "3-4 hrs",
//           topics: [
//             { id: "d1-1", task: "Watch Programming with Mosh - Python Full Course (Variables to Data Types)", link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
//             { id: "d1-2", task: "Code along: Practice lists, tuples, dictionaries" },
//             { id: "d1-3", task: "Build Contact Book Console App - Basic structure" },
//             { id: "d1-4", task: "Solve 3 easy problems on HackerRank/LeetCode" }
//           ]
//         },
//         {
//           day: 2,
//           title: "Python Basics Revision - Part 2",
//           hours: "3-4 hrs",
//           topics: [
//             { id: "d2-1", task: "Watch Programming with Mosh - Functions & Comprehensions section" },
//             { id: "d2-2", task: "Practice list/dict comprehensions (write 5 examples)" },
//             { id: "d2-3", task: "Complete Contact Book App (add, search, delete features)" },
//             { id: "d2-4", task: "Create notes document with key concepts" }
//           ]
//         },
//         {
//           day: 3,
//           title: "OOP Deep Dive - Part 1",
//           hours: "4 hrs",
//           topics: [
//             { id: "d3-1", task: "Watch Tech With Tim - Python OOP Tutorial (Complete)", link: "https://www.youtube.com/watch?v=JeznW_7DlB0" },
//             { id: "d3-2", task: "Code along: Create basic classes with attributes and methods" },
//             { id: "d3-3", task: "Practice: Write 3 classes (Car, Person, BankAccount)" },
//             { id: "d3-4", task: "Take detailed OOP notes" }
//           ]
//         },
//         {
//           day: 4,
//           title: "OOP Deep Dive - Part 2",
//           hours: "4 hrs",
//           topics: [
//             { id: "d4-1", task: "Watch Programming with Mosh - Python OOP Tutorial", link: "https://www.youtube.com/watch?v=Ej_02ICOIgs" },
//             { id: "d4-2", task: "Build Library Management System (Book, Member, Library classes)" },
//             { id: "d4-3", task: "Implement inheritance and polymorphism" },
//             { id: "d4-4", task: "Implement __str__, __repr__, __add__ magic methods" }
//           ]
//         },
//         {
//           day: 5,
//           title: "File Handling",
//           hours: "3-4 hrs",
//           topics: [
//             { id: "d5-1", task: "Watch Corey Schafer - File Objects", link: "https://www.youtube.com/watch?v=Uh2ebFW8OYM" },
//             { id: "d5-2", task: "Watch Corey Schafer - CSV Module", link: "https://www.youtube.com/watch?v=q5uM4VKywbA" },
//             { id: "d5-3", task: "Watch Tech With Tim - JSON in Python", link: "https://www.youtube.com/watch?v=9N6a-VLBa2I" },
//             { id: "d5-4", task: "Practice: Read CSV, process data, write to JSON" },
//             { id: "d5-5", task: "Implement proper exception handling (try-except blocks)" }
//           ]
//         },
//         {
//           day: 6,
//           title: "Advanced Python - Decorators & Generators",
//           hours: "4 hrs",
//           topics: [
//             { id: "d6-1", task: "Watch Tech With Tim - Expert Python Tutorial", link: "https://www.youtube.com/watch?v=mclfteWlT2Q" },
//             { id: "d6-2", task: "Code along: Create @timer decorator" },
//             { id: "d6-3", task: "Code along: Create @logger decorator" },
//             { id: "d6-4", task: "Build a file processor using generators" },
//             { id: "d6-5", task: "Practice: Write custom context manager" }
//           ]
//         },
//         {
//           day: 7,
//           title: "Python for Data + API Basics",
//           hours: "3-4 hrs",
//           topics: [
//             { id: "d7-1", task: "Watch Keith Galli - Pandas Tutorial (first 40 mins)", link: "https://www.youtube.com/watch?v=vmEHCJofslg" },
//             { id: "d7-2", task: "Practice: Load CSV dataset and perform groupby operations" },
//             { id: "d7-3", task: "Watch Tech With Tim - Flask REST API basics (30 mins)", link: "https://www.youtube.com/watch?v=GMppyAPbLYk" },
//             { id: "d7-4", task: "Practice: Make API calls using requests library" },
//             { id: "d7-5", task: "Review Week 1 notes and code" }
//           ]
//         }
//       ]
//     },
//     week2: {
//       title: "Week 2: Generative AI + Interview Prep",
//       days: [
//         {
//           day: 8,
//           title: "Gen AI Fundamentals - Part 1",
//           hours: "4 hrs",
//           topics: [
//             { id: "d8-1", task: "Watch IBM Technology - Generative AI in 5 Minutes", link: "https://www.youtube.com/watch?v=G2fqAlgmoPo" },
//             { id: "d8-2", task: "Watch Simplilearn - Gen AI Full Course (first hour)", link: "https://www.youtube.com/watch?v=6F1YKNR_w5I" },
//             { id: "d8-3", task: "Take notes: What are LLMs, GPT, Gemini basics" },
//             { id: "d8-4", task: "Research: Gen AI use cases in enterprise" },
//             { id: "d8-5", task: "Sign up for OpenAI/Gemini API free tier" }
//           ]
//         },
//         {
//           day: 9,
//           title: "Gen AI Fundamentals - Part 2",
//           hours: "4 hrs",
//           topics: [
//             { id: "d9-1", task: "Watch Simplilearn - Gen AI Full Course (continue)", link: "https://www.youtube.com/watch?v=6F1YKNR_w5I" },
//             { id: "d9-2", task: "Learn: Prompt engineering principles" },
//             { id: "d9-3", task: "Practice: Write 10 different prompts (creative, technical, analytical)" },
//             { id: "d9-4", task: "Understand: Tokens, temperature, max_tokens parameters" },
//             { id: "d9-5", task: "Create Gen AI concepts cheat sheet" }
//           ]
//         },
//         {
//           day: 10,
//           title: "Hands-on with OpenAI/Gemini APIs",
//           hours: "4 hrs",
//           topics: [
//             { id: "d10-1", task: "Watch Tech With Tim - OpenAI API Tutorial", link: "https://www.youtube.com/watch?v=c-g6epk3fFE" },
//             { id: "d10-2", task: "Setup: Install openai/google-generativeai library" },
//             { id: "d10-3", task: "Code: Make first API call successfully" },
//             { id: "d10-4", task: "PROJECT: Build AI Content Summarizer (input text → summarized output)" },
//             { id: "d10-5", task: "Add error handling and API key management" }
//           ]
//         },
//         {
//           day: 11,
//           title: "Gen AI Project - Chatbot",
//           hours: "4 hrs",
//           topics: [
//             { id: "d11-1", task: "Watch Nicholas Renotte - Build AI Apps tutorial", link: "https://www.youtube.com/watch?v=8lYS9FuC1eM" },
//             { id: "d11-2", task: "PROJECT: Build AI Customer Support Chatbot" },
//             { id: "d11-3", task: "Implement conversation context (remember previous messages)" },
//             { id: "d11-4", task: "Add logging to JSON file" },
//             { id: "d11-5", task: "Test chatbot with 10 different queries" }
//           ]
//         },
//         {
//           day: 12,
//           title: "Advanced Gen AI - RAG & Langchain",
//           hours: "4 hrs",
//           topics: [
//             { id: "d12-1", task: "Watch freeCodeCamp - Gen AI Course (RAG sections)", link: "https://www.youtube.com/watch?v=mEsleV16qdo" },
//             { id: "d12-2", task: "Learn: What is RAG (Retrieval Augmented Generation)" },
//             { id: "d12-3", task: "Learn: Vector databases basics" },
//             { id: "d12-4", task: "PROJECT: Start Document Q&A System / Code Explainer" },
//             { id: "d12-5", task: "Implement basic document upload and processing" }
//           ]
//         },
//         {
//           day: 13,
//           title: "Complete Gen AI Project",
//           hours: "4 hrs",
//           topics: [
//             { id: "d13-1", task: "Complete Document Q&A System project" },
//             { id: "d13-2", task: "Test project with different documents/code samples" },
//             { id: "d13-3", task: "Add UI improvements and error handling" },
//             { id: "d13-4", task: "Document your code with comments" },
//             { id: "d13-5", task: "Push all 3 Gen AI projects to GitHub" },
//             { id: "d13-6", task: "Practice explaining your projects out loud" }
//           ]
//         },
//         {
//           day: 14,
//           title: "Final Revision & Mock Interview",
//           hours: "4 hrs",
//           topics: [
//             { id: "d14-1", task: "Watch freeCodeCamp - Python Interview Questions", link: "https://www.youtube.com/watch?v=DEwgZNC-KyE" },
//             { id: "d14-2", task: "Watch Simplilearn - Gen AI Interview Questions", link: "https://www.youtube.com/watch?v=J_fZ-U8J5No" },
//             { id: "d14-3", task: "Review all notes from 13 days" },
//             { id: "d14-4", task: "Create quick reference cheat sheet" },
//             { id: "d14-5", task: "MOCK INTERVIEW: Record yourself answering 10 questions" },
//             { id: "d14-6", task: "Practice: Explain each project in 2 minutes" },
//             { id: "d14-7", task: "Solve 5 medium Python problems on LeetCode" }
//           ]
//         }
//       ]
//     }
//   };

//   const projects = [
//     { id: "p1", name: "Contact Book Console App", status: false },
//     { id: "p2", name: "Library Management System (OOP)", status: false },
//     { id: "p3", name: "File Processor with Decorators", status: false },
//     { id: "p4", name: "AI Content Summarizer", status: false },
//     { id: "p5", name: "AI Customer Support Chatbot", status: false },
//     { id: "p6", name: "Document Q&A System / Code Explainer", status: false }
//   ];

//   const [projectStatus, setProjectStatus] = useState(
//     projects.reduce((acc, p) => ({ ...acc, [p.id]: false }), {})
//   );

//   useEffect(() => {
//     const saved = localStorage.getItem('studyProgress');
//     if (saved) {
//       const data = JSON.parse(saved);
//       setCheckedItems(data.checked || {});
//       setProjectStatus(data.projects || projectStatus);
//       setCurrentDay(data.currentDay || 1);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('studyProgress', JSON.stringify({
//       checked: checkedItems,
//       projects: projectStatus,
//       currentDay
//     }));
//   }, [checkedItems, projectStatus, currentDay]);

//   const toggleItem = (id:any) => {
//     setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
//   };

//   const toggleProject = (id:any) => {
//     setProjectStatus(prev => ({ ...prev, [id]: !prev[id] }));
//   };

//   const calculateProgress = (week) => {
//     const allItems = week.days.flatMap(d => d.topics.map(t => t.id));
//     const completed = allItems.filter(id => checkedItems[id]).length;
//     return Math.round((completed / allItems.length) * 100);
//   };

//   const resetProgress = () => {
//     if (confirm('Are you sure you want to reset all progress?')) {
//       setCheckedItems({});
//       setProjectStatus(projects.reduce((acc, p) => ({ ...acc, [p.id]: false }), {}));
//       setCurrentDay(1);
//     }
//   };

//   const allWeeks = [studyPlan.week1, studyPlan.week2];
//   const allDays = [...studyPlan.week1.days, ...studyPlan.week2.days];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
//           <div className="flex items-center justify-between mb-4">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-800 mb-2">
//                 Python + Gen AI Study Tracker
//               </h1>
//               <p className="text-gray-600">HCL Technologies Interview Preparation</p>
//             </div>
//             <Target className="text-indigo-600" size={48} />
//           </div>

//           {/* Progress Overview */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//             <div className="bg-indigo-50 rounded-lg p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm font-semibold text-indigo-700">Week 1 Progress</span>
//                 <Calendar className="text-indigo-600" size={20} />
//               </div>
//               <div className="text-2xl font-bold text-indigo-900">
//                 {calculateProgress(studyPlan.week1)}%
//               </div>
//               <div className="w-full bg-indigo-200 rounded-full h-2 mt-2">
//                 <div
//                   className="bg-indigo-600 h-2 rounded-full transition-all"
//                   style={{ width: `${calculateProgress(studyPlan.week1)}%` }}
//                 />
//               </div>
//             </div>

//             <div className="bg-purple-50 rounded-lg p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm font-semibold text-purple-700">Week 2 Progress</span>
//                 <Clock className="text-purple-600" size={20} />
//               </div>
//               <div className="text-2xl font-bold text-purple-900">
//                 {calculateProgress(studyPlan.week2)}%
//               </div>
//               <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
//                 <div
//                   className="bg-purple-600 h-2 rounded-full transition-all"
//                   style={{ width: `${calculateProgress(studyPlan.week2)}%` }}
//                 />
//               </div>
//             </div>

//             <div className="bg-green-50 rounded-lg p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm font-semibold text-green-700">Projects Done</span>
//                 <Award className="text-green-600" size={20} />
//               </div>
//               <div className="text-2xl font-bold text-green-900">
//                 {Object.values(projectStatus).filter(Boolean).length} / 6
//               </div>
//               <div className="w-full bg-green-200 rounded-full h-2 mt-2">
//                 <div
//                   className="bg-green-600 h-2 rounded-full transition-all"
//                   style={{ width: `${(Object.values(projectStatus).filter(Boolean).length / 6) * 100}%` }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Day Selector */}
//           <div className="mt-6">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Current Day:
//             </label>
//             <select
//               value={currentDay}
//               onChange={(e) => setCurrentDay(Number(e.target.value))}
//               className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             >
//               {allDays.map((day, idx) => (
//                 <option key={idx} value={day.day}>
//                   Day {day.day} - {day.title}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button
//             onClick={resetProgress}
//             className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//           >
//             Reset All Progress
//           </button>
//         </div>

//         {/* Week 1 */}
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
//           <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
//             <Calendar className="mr-2" />
//             {studyPlan.week1.title}
//           </h2>

//           {studyPlan.week1.days.map((day) => (
//             <div
//               key={day.day}
//               className={`mb-6 p-4 rounded-lg ${
//                 currentDay === day.day
//                   ? 'bg-indigo-50 border-2 border-indigo-400'
//                   : 'bg-gray-50'
//               }`}
//             >
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className="text-lg font-bold text-gray-800">
//                   Day {day.day}: {day.title}
//                 </h3>
//                 <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
//                   {day.hours}
//                 </span>
//               </div>

//               <div className="space-y-2">
//                 {day.topics.map((topic) => (
//                   <div
//                     key={topic.id}
//                     className="flex items-start space-x-3 p-2 hover:bg-white rounded transition"
//                   >
//                     <button
//                       onClick={() => toggleItem(topic.id)}
//                       className="mt-0.5 flex-shrink-0"
//                     >
//                       {checkedItems[topic.id] ? (
//                         <CheckCircle2 className="text-green-600" size={20} />
//                       ) : (
//                         <Circle className="text-gray-400" size={20} />
//                       )}
//                     </button>
//                     <span
//                       className={`text-sm ${
//                         checkedItems[topic.id]
//                           ? 'line-through text-gray-500'
//                           : 'text-gray-700'
//                       }`}
//                     >
//                       {topic.task}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Week 2 */}
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
//           <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
//             <Clock className="mr-2" />
//             {studyPlan.week2.title}
//           </h2>

//           {studyPlan.week2.days.map((day) => (
//             <div
//               key={day.day}
//               className={`mb-6 p-4 rounded-lg ${
//                 currentDay === day.day
//                   ? 'bg-purple-50 border-2 border-purple-400'
//                   : 'bg-gray-50'
//               }`}
//             >
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className="text-lg font-bold text-gray-800">
//                   Day {day.day}: {day.title}
//                 </h3>
//                 <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
//                   {day.hours}
//                 </span>
//               </div>

//               <div className="space-y-2">
//                 {day.topics.map((topic) => (
//                   <div
//                     key={topic.id}
//                     className="flex items-start space-x-3 p-2 hover:bg-white rounded transition"
//                   >
//                     <button
//                       onClick={() => toggleItem(topic.id)}
//                       className="mt-0.5 flex-shrink-0"
//                     >
//                       {checkedItems[topic.id] ? (
//                         <CheckCircle2 className="text-green-600" size={20} />
//                       ) : (
//                         <Circle className="text-gray-400" size={20} />
//                       )}
//                     </button>
//                     <span
//                       className={`text-sm ${
//                         checkedItems[topic.id]
//                           ? 'line-through text-gray-500'
//                           : 'text-gray-700'
//                       }`}
//                     >
//                       {topic.task}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Projects Checklist */}
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
//           <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
//             <Award className="mr-2" />
//             Must-Complete Projects
//           </h2>

//           <div className="space-y-3">
//             {projects.map((project) => (
//               <div
//                 key={project.id}
//                 className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
//               >
//                 <button
//                   onClick={() => toggleProject(project.id)}
//                   className="flex-shrink-0"
//                 >
//                   {projectStatus[project.id] ? (
//                     <CheckCircle2 className="text-green-600" size={24} />
//                   ) : (
//                     <Circle className="text-gray-400" size={24} />
//                   )}
//                 </button>
//                 <span
//                   className={`text-base font-medium ${
//                     projectStatus[project.id]
//                       ? 'line-through text-gray-500'
//                       : 'text-gray-700'
//                   }`}
//                 >
//                   {project.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Tips */}
//         <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-lg p-6">
//           <h3 className="text-xl font-bold text-orange-800 mb-3">💡 Pro Tips</h3>
//           <ul className="space-y-2 text-sm text-gray-700">
//             <li>✅ Code along with EVERY tutorial - don't just watch</li>
//             <li>✅ Push all projects to GitHub for interview discussion</li>
//             <li>✅ Practice explaining concepts out loud</li>
//             <li>✅ Take breaks every 90 minutes to avoid burnout</li>
//             <li>✅ Review previous day's notes before starting new topics</li>
//             <li>✅ Join Python/Gen AI Discord communities for quick help</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudyTracker;
"use client"
import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Calendar, Target, Clock, Award } from 'lucide-react';

interface Topic {
  id: string;
  task: string;
  link?: string;
}

interface Day {
  day: number;
  title: string;
  hours: string;
  topics: Topic[];
}

interface Week {
  title: string;
  days: Day[];
}

interface StudyPlan {
  week1: Week;
  week2: Week;
}

interface Project {
  id: string;
  name: string;
  status: boolean;
}

interface CheckedItems {
  [key: string]: boolean;
}

interface ProjectStatus {
  [key: string]: boolean;
}

interface SavedData {
  checked?: CheckedItems;
  projects?: ProjectStatus;
  currentDay?: number;
}

const StudyTracker: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});
  const [currentDay, setCurrentDay] = useState<number>(1);

  const studyPlan: StudyPlan = {
    week1: {
      title: "Week 1: Python Foundations + OOP",
      days: [
        {
          day: 1,
          title: "Python Basics Revision - Part 1",
          hours: "3-4 hrs",
          topics: [
            { id: "d1-1", task: "Watch Programming with Mosh - Python Full Course (Variables to Data Types)", link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
            { id: "d1-2", task: "Code along: Practice lists, tuples, dictionaries" },
            { id: "d1-3", task: "Build Contact Book Console App - Basic structure" },
            { id: "d1-4", task: "Solve 3 easy problems on HackerRank/LeetCode" }
          ]
        },
        {
          day: 2,
          title: "Python Basics Revision - Part 2",
          hours: "3-4 hrs",
          topics: [
            { id: "d2-1", task: "Watch Programming with Mosh - Functions & Comprehensions section" },
            { id: "d2-2", task: "Practice list/dict comprehensions (write 5 examples)" },
            { id: "d2-3", task: "Complete Contact Book App (add, search, delete features)" },
            { id: "d2-4", task: "Create notes document with key concepts" }
          ]
        },
        {
          day: 3,
          title: "OOP Deep Dive - Part 1",
          hours: "4 hrs",
          topics: [
            { id: "d3-1", task: "Watch Tech With Tim - Python OOP Tutorial (Complete)", link: "https://www.youtube.com/watch?v=JeznW_7DlB0" },
            { id: "d3-2", task: "Code along: Create basic classes with attributes and methods" },
            { id: "d3-3", task: "Practice: Write 3 classes (Car, Person, BankAccount)" },
            { id: "d3-4", task: "Take detailed OOP notes" }
          ]
        },
        {
          day: 4,
          title: "OOP Deep Dive - Part 2",
          hours: "4 hrs",
          topics: [
            { id: "d4-1", task: "Watch Programming with Mosh - Python OOP Tutorial", link: "https://www.youtube.com/watch?v=Ej_02ICOIgs" },
            { id: "d4-2", task: "Build Library Management System (Book, Member, Library classes)" },
            { id: "d4-3", task: "Implement inheritance and polymorphism" },
            { id: "d4-4", task: "Implement __str__, __repr__, __add__ magic methods" }
          ]
        },
        {
          day: 5,
          title: "File Handling",
          hours: "3-4 hrs",
          topics: [
            { id: "d5-1", task: "Watch Corey Schafer - File Objects", link: "https://www.youtube.com/watch?v=Uh2ebFW8OYM" },
            { id: "d5-2", task: "Watch Corey Schafer - CSV Module", link: "https://www.youtube.com/watch?v=q5uM4VKywbA" },
            { id: "d5-3", task: "Watch Tech With Tim - JSON in Python", link: "https://www.youtube.com/watch?v=9N6a-VLBa2I" },
            { id: "d5-4", task: "Practice: Read CSV, process data, write to JSON" },
            { id: "d5-5", task: "Implement proper exception handling (try-except blocks)" }
          ]
        },
        {
          day: 6,
          title: "Advanced Python - Decorators & Generators",
          hours: "4 hrs",
          topics: [
            { id: "d6-1", task: "Watch Tech With Tim - Expert Python Tutorial", link: "https://www.youtube.com/watch?v=mclfteWlT2Q" },
            { id: "d6-2", task: "Code along: Create @timer decorator" },
            { id: "d6-3", task: "Code along: Create @logger decorator" },
            { id: "d6-4", task: "Build a file processor using generators" },
            { id: "d6-5", task: "Practice: Write custom context manager" }
          ]
        },
        {
          day: 7,
          title: "Python for Data + API Basics",
          hours: "3-4 hrs",
          topics: [
            { id: "d7-1", task: "Watch Keith Galli - Pandas Tutorial (first 40 mins)", link: "https://www.youtube.com/watch?v=vmEHCJofslg" },
            { id: "d7-2", task: "Practice: Load CSV dataset and perform groupby operations" },
            { id: "d7-3", task: "Watch Tech With Tim - Flask REST API basics (30 mins)", link: "https://www.youtube.com/watch?v=GMppyAPbLYk" },
            { id: "d7-4", task: "Practice: Make API calls using requests library" },
            { id: "d7-5", task: "Review Week 1 notes and code" }
          ]
        }
      ]
    },
    week2: {
      title: "Week 2: Generative AI + Interview Prep",
      days: [
        {
          day: 8,
          title: "Gen AI Fundamentals - Part 1",
          hours: "4 hrs",
          topics: [
            { id: "d8-1", task: "Watch IBM Technology - Generative AI in 5 Minutes", link: "https://www.youtube.com/watch?v=G2fqAlgmoPo" },
            { id: "d8-2", task: "Watch Simplilearn - Gen AI Full Course (first hour)", link: "https://www.youtube.com/watch?v=6F1YKNR_w5I" },
            { id: "d8-3", task: "Take notes: What are LLMs, GPT, Gemini basics" },
            { id: "d8-4", task: "Research: Gen AI use cases in enterprise" },
            { id: "d8-5", task: "Sign up for OpenAI/Gemini API free tier" }
          ]
        },
        {
          day: 9,
          title: "Gen AI Fundamentals - Part 2",
          hours: "4 hrs",
          topics: [
            { id: "d9-1", task: "Watch Simplilearn - Gen AI Full Course (continue)", link: "https://www.youtube.com/watch?v=6F1YKNR_w5I" },
            { id: "d9-2", task: "Learn: Prompt engineering principles" },
            { id: "d9-3", task: "Practice: Write 10 different prompts (creative, technical, analytical)" },
            { id: "d9-4", task: "Understand: Tokens, temperature, max_tokens parameters" },
            { id: "d9-5", task: "Create Gen AI concepts cheat sheet" }
          ]
        },
        {
          day: 10,
          title: "Hands-on with OpenAI/Gemini APIs",
          hours: "4 hrs",
          topics: [
            { id: "d10-1", task: "Watch Tech With Tim - OpenAI API Tutorial", link: "https://www.youtube.com/watch?v=c-g6epk3fFE" },
            { id: "d10-2", task: "Setup: Install openai/google-generativeai library" },
            { id: "d10-3", task: "Code: Make first API call successfully" },
            { id: "d10-4", task: "PROJECT: Build AI Content Summarizer (input text → summarized output)" },
            { id: "d10-5", task: "Add error handling and API key management" }
          ]
        },
        {
          day: 11,
          title: "Gen AI Project - Chatbot",
          hours: "4 hrs",
          topics: [
            { id: "d11-1", task: "Watch Nicholas Renotte - Build AI Apps tutorial", link: "https://www.youtube.com/watch?v=8lYS9FuC1eM" },
            { id: "d11-2", task: "PROJECT: Build AI Customer Support Chatbot" },
            { id: "d11-3", task: "Implement conversation context (remember previous messages)" },
            { id: "d11-4", task: "Add logging to JSON file" },
            { id: "d11-5", task: "Test chatbot with 10 different queries" }
          ]
        },
        {
          day: 12,
          title: "Advanced Gen AI - RAG & Langchain",
          hours: "4 hrs",
          topics: [
            { id: "d12-1", task: "Watch freeCodeCamp - Gen AI Course (RAG sections)", link: "https://www.youtube.com/watch?v=mEsleV16qdo" },
            { id: "d12-2", task: "Learn: What is RAG (Retrieval Augmented Generation)" },
            { id: "d12-3", task: "Learn: Vector databases basics" },
            { id: "d12-4", task: "PROJECT: Start Document Q&A System / Code Explainer" },
            { id: "d12-5", task: "Implement basic document upload and processing" }
          ]
        },
        {
          day: 13,
          title: "Complete Gen AI Project",
          hours: "4 hrs",
          topics: [
            { id: "d13-1", task: "Complete Document Q&A System project" },
            { id: "d13-2", task: "Test project with different documents/code samples" },
            { id: "d13-3", task: "Add UI improvements and error handling" },
            { id: "d13-4", task: "Document your code with comments" },
            { id: "d13-5", task: "Push all 3 Gen AI projects to GitHub" },
            { id: "d13-6", task: "Practice explaining your projects out loud" }
          ]
        },
        {
          day: 14,
          title: "Final Revision & Mock Interview",
          hours: "4 hrs",
          topics: [
            { id: "d14-1", task: "Watch freeCodeCamp - Python Interview Questions", link: "https://www.youtube.com/watch?v=DEwgZNC-KyE" },
            { id: "d14-2", task: "Watch Simplilearn - Gen AI Interview Questions", link: "https://www.youtube.com/watch?v=J_fZ-U8J5No" },
            { id: "d14-3", task: "Review all notes from 13 days" },
            { id: "d14-4", task: "Create quick reference cheat sheet" },
            { id: "d14-5", task: "MOCK INTERVIEW: Record yourself answering 10 questions" },
            { id: "d14-6", task: "Practice: Explain each project in 2 minutes" },
            { id: "d14-7", task: "Solve 5 medium Python problems on LeetCode" }
          ]
        }
      ]
    }
  };

  const projects: Project[] = [
    { id: "p1", name: "Contact Book Console App", status: false },
    { id: "p2", name: "Library Management System (OOP)", status: false },
    { id: "p3", name: "File Processor with Decorators", status: false },
    { id: "p4", name: "AI Content Summarizer", status: false },
    { id: "p5", name: "AI Customer Support Chatbot", status: false },
    { id: "p6", name: "Document Q&A System / Code Explainer", status: false }
  ];

  const initialProjectStatus: ProjectStatus = projects.reduce(
    (acc, p) => ({ ...acc, [p.id]: false }),
    {}
  );

  const [projectStatus, setProjectStatus] = useState<ProjectStatus>(initialProjectStatus);

  useEffect(() => {
    const saved = localStorage.getItem('studyProgress');
    if (saved) {
      try {
        const data: SavedData = JSON.parse(saved);
        setCheckedItems(data.checked || {});
        setProjectStatus(data.projects || initialProjectStatus);
        setCurrentDay(data.currentDay || 1);
      } catch (error) {
        console.error('Error loading saved progress:', error);
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('studyProgress', JSON.stringify({
        checked: checkedItems,
        projects: projectStatus,
        currentDay
      }));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }, [checkedItems, projectStatus, currentDay]);

  const toggleItem = (id: string): void => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleProject = (id: string): void => {
    setProjectStatus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const calculateProgress = (week: Week): number => {
    const allItems = week.days.flatMap(d => d.topics.map(t => t.id));
    const completed = allItems.filter(id => checkedItems[id]).length;
    return Math.round((completed / allItems.length) * 100);
  };

  const resetProgress = (): void => {
    if (window.confirm('Are you sure you want to reset all progress?')) {
      setCheckedItems({});
      setProjectStatus(initialProjectStatus);
      setCurrentDay(1);
    }
  };

  const allDays: Day[] = [...studyPlan.week1.days, ...studyPlan.week2.days];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Python + Gen AI Study Tracker
              </h1>
              <p className="text-gray-600">HCL Technologies Interview Preparation</p>
            </div>
            <Target className="text-indigo-600" size={48} />
          </div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-indigo-700">Week 1 Progress</span>
                <Calendar className="text-indigo-600" size={20} />
              </div>
              <div className="text-2xl font-bold text-indigo-900">
                {calculateProgress(studyPlan.week1)}%
              </div>
              <div className="w-full bg-indigo-200 rounded-full h-2 mt-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all"
                  style={{ width: `${calculateProgress(studyPlan.week1)}%` }}
                />
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-purple-700">Week 2 Progress</span>
                <Clock className="text-purple-600" size={20} />
              </div>
              <div className="text-2xl font-bold text-purple-900">
                {calculateProgress(studyPlan.week2)}%
              </div>
              <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all"
                  style={{ width: `${calculateProgress(studyPlan.week2)}%` }}
                />
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-green-700">Projects Done</span>
                <Award className="text-green-600" size={20} />
              </div>
              <div className="text-2xl font-bold text-green-900">
                {Object.values(projectStatus).filter(Boolean).length} / 6
              </div>
              <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all"
                  style={{ width: `${(Object.values(projectStatus).filter(Boolean).length / 6) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Day Selector */}
          <div className="mt-6">
            <label htmlFor="day-selector" className="block text-sm font-semibold text-gray-700 mb-2">
              Current Day:
            </label>
            <select
              id="day-selector"
              value={currentDay}
              onChange={(e) => setCurrentDay(Number(e.target.value))}
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {allDays.map((day) => (
                <option key={day.day} value={day.day}>
                  Day {day.day} - {day.title}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={resetProgress}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            type="button"
          >
            Reset All Progress
          </button>
        </div>

        {/* Week 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
            <Calendar className="mr-2" />
            {studyPlan.week1.title}
          </h2>

          {studyPlan.week1.days.map((day) => (
            <div
              key={day.day}
              className={`mb-6 p-4 rounded-lg ${
                currentDay === day.day
                  ? 'bg-indigo-50 border-2 border-indigo-400'
                  : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-800">
                  Day {day.day}: {day.title}
                </h3>
                <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                  {day.hours}
                </span>
              </div>

              <div className="space-y-2">
                {day.topics.map((topic) => (
                  <div
                    key={topic.id}
                    className="flex items-start space-x-3 p-2 hover:bg-white rounded transition"
                  >
                    <button
                      onClick={() => toggleItem(topic.id)}
                      className="mt-0.5 flex-shrink-0"
                      type="button"
                      aria-label={`Toggle ${topic.task}`}
                    >
                      {checkedItems[topic.id] ? (
                        <CheckCircle2 className="text-green-600" size={20} />
                      ) : (
                        <Circle className="text-gray-400" size={20} />
                      )}
                    </button>
                    <span
                      className={`text-sm ${
                        checkedItems[topic.id]
                          ? 'line-through text-gray-500'
                          : 'text-gray-700'
                      }`}
                    >
                      {topic.task}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Week 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
            <Clock className="mr-2" />
            {studyPlan.week2.title}
          </h2>

          {studyPlan.week2.days.map((day) => (
            <div
              key={day.day}
              className={`mb-6 p-4 rounded-lg ${
                currentDay === day.day
                  ? 'bg-purple-50 border-2 border-purple-400'
                  : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-800">
                  Day {day.day}: {day.title}
                </h3>
                <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                  {day.hours}
                </span>
              </div>

              <div className="space-y-2">
                {day.topics.map((topic) => (
                  <div
                    key={topic.id}
                    className="flex items-start space-x-3 p-2 hover:bg-white rounded transition"
                  >
                    <button
                      onClick={() => toggleItem(topic.id)}
                      className="mt-0.5 flex-shrink-0"
                      type="button"
                      aria-label={`Toggle ${topic.task}`}
                    >
                      {checkedItems[topic.id] ? (
                        <CheckCircle2 className="text-green-600" size={20} />
                      ) : (
                        <Circle className="text-gray-400" size={20} />
                      )}
                    </button>
                    <span
                      className={`text-sm ${
                        checkedItems[topic.id]
                          ? 'line-through text-gray-500'
                          : 'text-gray-700'
                      }`}
                    >
                      {topic.task}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Checklist */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
            <Award className="mr-2" />
            Must-Complete Projects
          </h2>

          <div className="space-y-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <button
                  onClick={() => toggleProject(project.id)}
                  className="flex-shrink-0"
                  type="button"
                  aria-label={`Toggle ${project.name}`}
                >
                  {projectStatus[project.id] ? (
                    <CheckCircle2 className="text-green-600" size={24} />
                  ) : (
                    <Circle className="text-gray-400" size={24} />
                  )}
                </button>
                <span
                  className={`text-base font-medium ${
                    projectStatus[project.id]
                      ? 'line-through text-gray-500'
                      : 'text-gray-700'
                  }`}
                >
                  {project.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-3">💡 Pro Tips</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✅ Code along with EVERY tutorial - don&apos;t just watch</li>
            <li>✅ Push all projects to GitHub for interview discussion</li>
            <li>✅ Practice explaining concepts out loud</li>
            <li>✅ Take breaks every 90 minutes to avoid burnout</li>
            <li>✅ Review previous day&apos;s notes before starting new topics</li>
            <li>✅ Join Python/Gen AI Discord communities for quick help</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudyTracker;