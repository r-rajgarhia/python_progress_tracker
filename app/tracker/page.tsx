'use client';

import React, { useState, useEffect } from 'react';
import { Check, Clock, Trophy, BookOpen, Code, Brain, Calendar } from 'lucide-react';

// Type definitions
interface Task {
  text: string;
  link: string | null;
}

interface Day {
  day: string;
  title: string;
  hours: string;
  icon: any;
  color: string;
  tasks: Task[];
}

interface Week {
  week: string;
  days: Day[];
}

interface CheckedItems {
  [key: string]: boolean;
}

interface StorageResult {
  value: string;
}

// Extend Window interface to include storage
declare global {
  interface Window {
    storage: {
      get: (key: string) => Promise<StorageResult | null>;
      set: (key: string, value: string) => Promise<void>;
      delete: (key: string) => Promise<void>;
    };
  }
}

const StudyPlanTracker = () => {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});
  const [completedDays, setCompletedDays] = useState<CheckedItems>({});

  // Load saved progress from storage
  useEffect(() => {
    const loadProgress = async () => {
      try {
        const savedChecked = await window.storage.get('study-checked-items');
        const savedDays = await window.storage.get('study-completed-days');
        
        if (savedChecked && savedChecked.value) {
          setCheckedItems(JSON.parse(savedChecked.value));
        }
        if (savedDays && savedDays.value) {
          setCompletedDays(JSON.parse(savedDays.value));
        }
      } catch (error) {
        console.log('No saved progress found, starting fresh');
      }
    };
    loadProgress();
  }, []);

  // Save progress to storage
  const saveProgress = async (newChecked: CheckedItems, newDays: CheckedItems) => {
    try {
      await window.storage.set('study-checked-items', JSON.stringify(newChecked));
      await window.storage.set('study-completed-days', JSON.stringify(newDays));
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  };

  const studyPlan: Week[] = [
    {
      week: "Week 1: Python Foundations + Core Libraries",
      days: [
        {
          day: "Days 1-2",
          title: "Python Basics Speed Revision",
          hours: "3 hrs/day",
          icon: BookOpen,
          color: "bg-blue-500",
          tasks: [
            { text: "Watch Programming with Mosh - Python Tutorial (1.5x speed)", link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
            { text: "Review: Data types, functions, comprehensions", link: null },
            { text: "Build Contact Book Console App (add, search, delete)", link: null },
            { text: "Test: Can you explain list comprehensions vs loops?", link: null }
          ]
        },
        {
          day: "Days 3-4",
          title: "Object-Oriented Programming",
          hours: "3 hrs/day",
          icon: Code,
          color: "bg-green-500",
          tasks: [
            { text: "Watch Tech With Tim - Python OOP Tutorial (1.5 hrs)", link: "https://www.youtube.com/watch?v=JeznW_7DlB0" },
            { text: "Learn: Classes, inheritance, polymorphism, encapsulation", link: null },
            { text: "Build Library Management System (Book, Member, Library classes)", link: null },
            { text: "Implement __str__, __repr__, __add__ magic methods", link: null },
            { text: "Test: Can you explain inheritance with real example?", link: null }
          ]
        },
        {
          day: "Days 5-6",
          title: "NumPy & Pandas Deep Dive",
          hours: "3-4 hrs/day",
          icon: Brain,
          color: "bg-purple-500",
          tasks: [
            { text: "Day 5: Watch freeCodeCamp - NumPy Tutorial (1 hr)", link: "https://www.youtube.com/watch?v=QUT1VHiLmmI" },
            { text: "Practice: Array operations, reshaping, math computations", link: null },
            { text: "Day 6: Watch Keith Galli - Pandas Tutorial (1 hr)", link: "https://www.youtube.com/watch?v=vmEHCJofslg" },
            { text: "Watch Corey Schafer - Pandas Series (first 3-4 videos)", link: "https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS" },
            { text: "Practice: Load CSV, clean data, groupby, merge datasets", link: null },
            { text: "Test: Can you explain DataFrame vs NumPy array?", link: null }
          ]
        },
        {
          day: "Day 7",
          title: "Matplotlib & Data Visualization",
          hours: "3-4 hrs/day",
          icon: Calendar,
          color: "bg-orange-500",
          tasks: [
            { text: "Watch Corey Schafer - Matplotlib Series (first 5-6 videos)", link: "https://www.youtube.com/playlist?list=PL-osiE80TeTvipOqomVEeZ1HRrcEvtZB_" },
            { text: "Create: Line, bar, scatter, and pie charts", link: null },
            { text: "Customize: Labels, legends, colors, styles", link: null },
            { text: "Practice: Multi-plot layouts and subplots", link: null },
            { text: "Test: Can you create a dashboard-style visualization?", link: null }
          ]
        }
      ]
    },
    {
      week: "Week 2: Advanced Python + Libraries + GenAI",
      days: [
        {
          day: "Day 8",
          title: "Advanced Python Concepts",
          hours: "3 hrs",
          icon: Code,
          color: "bg-red-500",
          tasks: [
            { text: "Watch Tech With Tim - Expert Python Tutorial (2.5 hrs)", link: "https://www.youtube.com/watch?v=mclfteWlT2Q" },
            { text: "Focus: Decorators, Generators, Context Managers", link: null },
            { text: "Create @timer and @logger decorators from scratch", link: null },
            { text: "Build generator for file processing", link: null },
            { text: "Test: Explain when to use generator vs list", link: null }
          ]
        },
        {
          day: "Day 9",
          title: "File Handling",
          hours: "3 hrs",
          icon: BookOpen,
          color: "bg-teal-500",
          tasks: [
            { text: "Watch Corey Schafer - File Objects", link: "https://www.youtube.com/watch?v=Uh2ebFW8OYM" },
            { text: "Watch Corey Schafer - CSV Module", link: "https://www.youtube.com/watch?v=q5uM4VKywbA" },
            { text: "Watch Corey Schafer - JSON Module", link: "https://www.youtube.com/watch?v=9N6a-VLBa2I" },
            { text: "Create CSV/JSON data processor", link: null },
            { text: "Test: Can you handle file exceptions properly?", link: null }
          ]
        },
        {
          day: "Day 10",
          title: "REST APIs",
          hours: "3 hrs",
          icon: Code,
          color: "bg-cyan-500",
          tasks: [
            { text: "Watch Tech With Tim - REST API Tutorial (1 hr)", link: "https://www.youtube.com/watch?v=GMppyAPbLYk" },
            { text: "Practice: Make API calls using requests library", link: null },
            { text: "Handle API responses, errors, authentication", link: null },
            { text: "Build a simple weather API fetcher", link: null },
            { text: "Test: Can you explain REST API methods?", link: null }
          ]
        },
        {
          day: "Day 11",
          title: "Generative AI Concepts",
          hours: "2.5-3 hrs",
          icon: Brain,
          color: "bg-pink-500",
          tasks: [
            { text: "Watch IBM Technology - GenAI in 5 Minutes", link: "https://www.youtube.com/watch?v=G2fqAlgmoPo" },
            { text: "Watch Simplilearn - GenAI Course (first 1 hour)", link: "https://www.youtube.com/watch?v=6F1YKNR_w5I" },
            { text: "Learn: LLMs, GPT, Gemini, prompt engineering", link: null },
            { text: "Understand: Tokens, temperature, use cases", link: null },
            { text: "Test: Can you explain how LLMs work?", link: null }
          ]
        },
        {
          day: "Day 12",
          title: "GenAI Hands-on with APIs",
          hours: "3 hrs",
          icon: Brain,
          color: "bg-fuchsia-500",
          tasks: [
            { text: "Watch Tech With Tim - OpenAI API Tutorial", link: "https://www.youtube.com/watch?v=c-g6epk3fFE" },
            { text: "Set up OpenAI/Gemini API keys", link: null },
            { text: "Build AI Text Summarizer project", link: null },
            { text: "Add error handling and API key management", link: null },
            { text: "Test different prompts and parameters", link: null }
          ]
        },
        {
          day: "Day 13",
          title: "Integration Project",
          hours: "3-4 hrs",
          icon: Trophy,
          color: "bg-yellow-500",
          tasks: [
            { text: "Build Data Analysis Report Generator", link: null },
            { text: "Load CSV with Pandas and analyze data", link: null },
            { text: "Create visualizations with Matplotlib", link: null },
            { text: "Generate AI summary using OpenAI API", link: null },
            { text: "Export complete report", link: null },
            { text: "This is your STAR project for interview!", link: null }
          ]
        },
        {
          day: "Day 14",
          title: "Interview Prep & Mock Practice",
          hours: "3-4 hrs",
          icon: Check,
          color: "bg-indigo-500",
          tasks: [
            { text: "Morning: Review all projects and notes", link: null },
            { text: "Practice explaining OOP, decorators, pandas", link: null },
            { text: "Afternoon: Mock interview practice", link: null },
            { text: "Record yourself answering Python questions", link: null },
            { text: "Record yourself answering GenAI questions", link: null },
            { text: "Review all 5 projects - be ready to demo/explain", link: null },
            { text: "Sleep well - you're ready! 💪", link: null }
          ]
        }
      ]
    }
  ];

  const projects = [
    { name: "Contact Book Console App", tech: "Python Basics" },
    { name: "Library Management System", tech: "OOP" },
    { name: "Data Analysis with Pandas/NumPy", tech: "Libraries" },
    { name: "AI Text Summarizer", tech: "GenAI" },
    { name: "Data Analysis Report Generator", tech: "Integration ⭐" }
  ];

  const interviewChecklist = [
    "Can explain OOP with real examples",
    "Know NumPy array operations",
    "Master Pandas (groupby, merge, clean data)",
    "Create Matplotlib visualizations",
    "Understand decorators and generators",
    "Know file handling and APIs",
    "Explain what GenAI and LLMs are",
    "Have prompt engineering basics",
    "Can discuss GenAI project in detail",
    "Know enterprise GenAI use cases"
  ];

  const handleTaskCheck = (weekIdx: number, dayIdx: number, taskIdx: number) => {
    const key = `${weekIdx}-${dayIdx}-${taskIdx}`;
    const newChecked = { ...checkedItems, [key]: !checkedItems[key] };
    setCheckedItems(newChecked);
    saveProgress(newChecked, completedDays);
  };

  const handleDayComplete = (weekIdx: number, dayIdx: number) => {
    const key = `${weekIdx}-${dayIdx}`;
    const newDays = { ...completedDays, [key]: !completedDays[key] };
    setCompletedDays(newDays);
    saveProgress(checkedItems, newDays);
  };

  const handleProjectCheck = (idx: number) => {
    const key = `project-${idx}`;
    const newChecked = { ...checkedItems, [key]: !checkedItems[key] };
    setCheckedItems(newChecked);
    saveProgress(newChecked, completedDays);
  };

  const handleChecklistCheck = (idx: number) => {
    const key = `checklist-${idx}`;
    const newChecked = { ...checkedItems, [key]: !checkedItems[key] };
    setCheckedItems(newChecked);
    saveProgress(newChecked, completedDays);
  };

  const resetProgress = async () => {
    if (window.confirm('Are you sure you want to reset all progress?')) {
      setCheckedItems({});
      setCompletedDays({});
      try {
        await window.storage.delete('study-checked-items');
        await window.storage.delete('study-completed-days');
      } catch (error) {
        console.error('Failed to reset progress:', error);
      }
    }
  };

  const totalDays = 14; // Fixed to 14 days
  const completedDaysCount = Object.values(completedDays).filter(Boolean).length;
  const progressPercentage = Math.round((completedDaysCount / totalDays) * 100);

  // Calculate week-wise progress
  const getWeekProgress = (weekIdx: number) => {
    const week = studyPlan[weekIdx];
    const weekDays = 7; // Each week has 7 days
    const completedInWeek = week.days.filter((_, dayIdx) => 
      completedDays[`${weekIdx}-${dayIdx}`]
    ).length;
    return {
      completed: completedInWeek,
      total: weekDays,
      percentage: Math.round((completedInWeek / weekDays) * 100)
    };
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🎯 HCL Python + GenAI Study Tracker
          </h1>
          <p className="text-gray-600 mb-4">2-Week Interview Preparation Plan</p>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">Overall Progress</span>
              <span className="text-sm font-bold text-indigo-600">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-linear-to-r from-indigo-500 to-purple-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {completedDaysCount} of {totalDays} days completed
            </p>
          </div>

          {/* Weekly Progress Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {studyPlan.map((week, idx) => {
              const weekProgress = getWeekProgress(idx);
              return (
                <div key={idx} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">Week {idx + 1}</span>
                    <span className="text-sm font-bold text-indigo-600">{weekProgress.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        idx === 0 ? 'bg-linear-to-r from-blue-500 to-green-500' : 'bg-linear-to-r from-purple-500 to-pink-500'
                      }`}
                      style={{ width: `${weekProgress.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {weekProgress.completed} of {weekProgress.total} days
                  </p>
                </div>
              );
            })}
          </div>

          <button
            onClick={resetProgress}
            className="text-sm text-red-600 hover:text-red-800 underline"
          >
            Reset All Progress
          </button>
        </div>

        {/* Study Plan */}
        {studyPlan.map((week, weekIdx) => (
          <div key={weekIdx} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 bg-white rounded-lg p-4 shadow">
              {week.week}
            </h2>
            
            {week.days.map((day, dayIdx) => {
              const Icon = day.icon;
              const dayKey = `${weekIdx}-${dayIdx}`;
              const isDayComplete = completedDays[dayKey] || false;
              
              return (
                <div key={dayIdx} className="bg-white rounded-lg shadow-md p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`${day.color} p-3 rounded-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{day.day}</h3>
                        <p className="text-gray-600 font-semibold">{day.title}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {day.hours}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDayComplete(weekIdx, dayIdx)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        isDayComplete
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      {isDayComplete ? '✓ Completed' : 'Mark Complete'}
                    </button>
                  </div>

                  <div className="space-y-2">
                    {day.tasks.map((task, taskIdx) => {
                      const taskKey = `${weekIdx}-${dayIdx}-${taskIdx}`;
                      const isChecked = checkedItems[taskKey] || false;
                      
                      return (
                        <label key={taskIdx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleTaskCheck(weekIdx, dayIdx, taskIdx)}
                            className="mt-1 w-5 h-5 text-indigo-600 rounded-full focus:ring-indigo-500 appearance-none border-2 border-gray-300 checked:bg-indigo-600 checked:border-indigo-600 cursor-pointer relative"
                            style={{
                              backgroundImage: isChecked ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'%3E%3Cpath d=\'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\'/%3E%3C/svg%3E")' : 'none',
                              backgroundSize: '70%',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat'
                            }}
                          />
                          <span className={`flex-1 ${isChecked ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                            {task.link ? (
                              <a href={task.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 hover:underline">
                                {task.text}
                              </a>
                            ) : (
                              task.text
                            )}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* Projects List */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            5 Must-Have Projects
          </h2>
          <div className="space-y-3">
            {projects.map((project, idx) => {
              const isChecked = checkedItems[`project-${idx}`] || false;
              return (
                <label key={idx} className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 cursor-pointer border border-gray-200">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleProjectCheck(idx)}
                    className="w-5 h-5 text-green-600 rounded-full focus:ring-green-500 appearance-none border-2 border-gray-300 checked:bg-green-600 checked:border-green-600 cursor-pointer"
                    style={{
                      backgroundImage: isChecked ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'%3E%3Cpath d=\'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\'/%3E%3C/svg%3E")' : 'none',
                      backgroundSize: '70%',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="flex-1">
                    <span className={`font-semibold ${isChecked ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {project.name}
                    </span>
                    <span className="ml-2 text-sm text-indigo-600 font-medium">
                      [{project.tech}]
                    </span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Interview Checklist */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Check className="w-6 h-6 text-green-500" />
            Interview Day Checklist
          </h2>
          <div className="space-y-2">
            {interviewChecklist.map((item, idx) => {
              const isChecked = checkedItems[`checklist-${idx}`] || false;
              return (
                <label key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleChecklistCheck(idx)}
                    className="w-5 h-5 text-indigo-600 rounded-full focus:ring-indigo-500 appearance-none border-2 border-gray-300 checked:bg-indigo-600 checked:border-indigo-600 cursor-pointer"
                    style={{
                      backgroundImage: isChecked ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'%3E%3Cpath d=\'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\'/%3E%3C/svg%3E")' : 'none',
                      backgroundSize: '70%',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <span className={`${isChecked ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                    {item}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">🚀 You've Got This!</h3>
          <p className="text-indigo-100">
            Stay consistent, build those projects, and nail that HCL interview!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudyPlanTracker;