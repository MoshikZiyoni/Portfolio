import './App.css';
import React, { useState } from 'react';
import { Home, Code, Briefcase, Award, Send, Download, Menu, X } from 'lucide-react';
import MoshikResume from './Moshik-Ziony-CV.pdf'
import Welcome from './Welcome';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const themeColor = '#0A76F0';

  const cvDetails = {
    education: {
      institution: 'John Bryce',
      program: 'Python Full Stack Development',
      period: '04/2022 - 04/2023',
      details: '545 hours of intensive studies and many additional hours of hands-on coding with the latest web development technologies.'
    },
    languages: [
      { language: 'English', proficiency: 'Full Professional Proficiency' },
      { language: 'Hebrew', proficiency: 'Native or Bilingual Proficiency' }
    ]
  };

  const workExperience = [
    {
      company: 'RSA Security',
      role: 'Full Stack Software Developer',
      period: '01/2023 - Present',
      highlights: [
        'Developed a Flask-based monitoring system reducing phishing threat response time by 50%',
        'Created scalable front-end and back-end features with Flask, JavaScript, and jQuery',
        'Established CI/CD pipelines with Jenkins and Docker, accelerating release cycles by 40%'
      ]
    },
    {
      company: 'RSA Security',
      role: 'Automation Dev + Senior Fraud Analyst',
      period: '06/2022 - 01/2023',
      highlights: [
        'Engineered Python-based threat detection scripts with 99.9% accuracy',
        'Built real-time monitoring system with WebSocket and Redis',
        'Trained AI models for fraud detection and created browser extensions'
      ]
    }
  ];

  const skills = [
    'Python', 'React', 'Java', 'JavaScript', 'NodeJS', 'TypeScript',
    'Express.JS', 'Docker', 'REST API', 'AWS', 'Machine Learning',
    'Automation', 'Multi-Threading'
  ];

  const projects = [
    {
      name: 'ChatMates-AI',
      description: 'Platform to improve dating conversations using OCR and AI',
      url: 'https://chatmates-ai.com',
      technologies: ['Python', 'React', 'OCR', 'NLP', 'Django'],
    },
    {
      name: 'Real-Estate Web App',
      description: 'Machine learning price prediction app using Linear Regression',
      url: 'https://moshik.pythonanywhere.com',
      technologies: ['Django', 'scikit-learn', 'Machine Learning']
    },
    {
      name: 'Dream-Trip',
      description: 'Intelligent trip planning web application with AI optimization',
      url: 'https://fastidious-dango-3149de.netlify.app',
      technologies: ['Django', 'React', 'AWS', 'Microservices']
    },
    {
      name: 'Shopping-web-app',
      description: 'Full-Stack Project REST-API that has full authentication with register. backend: Django Frontend: React',
      url: 'https://shopping-react.onrender.com',
      technologies: ['PostgreSQL', 'GCP', 'Selenium', 'Python', 'Django']
    },
    {
      name: 'Notes Project',
      description: 'This project is a simple RESTful API for managing notes, built with Node.js, Express, TypeScript, and Prisma ORM.',
      url: 'https://node-express-typescript-notes-project-1.onrender.com',
      technologies: ['Node.js', 'Express.js', 'TypeScript', 'Prisma ORM']
    }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="text-center" style={{background:"#101B1E" ,color:'white'}}>
            <h1 className="text-4xl font-bold mb-4">Moshik Ziony</h1>
            <p className="text-xl text-gray-600" style={{color:'#68BBCD'}}>Full Stack Software Developer</p>
            <p className="mt-4 max-w-2xl mx-auto">
              Experienced Full-Stack Developer specializing in Python-based development,
              machine learning, and cloud technologies. Proven track record of delivering
              high-performance applications with innovative problem-solving skills.
            </p>
          <Welcome/>
          </div>
          
        );
      case 'experience':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
            {workExperience.map((job, index) => (
              <div key={index} className="mb-6 p-4 bg-gray-100 rounded-lg projects-container">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-gray-600">{job.company} | {job.period}</p>
                <ul className="list-disc list-inside mt-2">
                  {job.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="mb-1">{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case 'skills':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3 ">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm projects-container"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );
      case 'projects':
        return (
          <div >
            <h2 className="text-3xl font-bold mb-6 projects-container">Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-6 p-4 bg-gray-100 rounded-lg projects-container">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <a href={project.url} target='_blank' className="text-gray-600 mb-2" style={{ color: 'blue' }}>{project.url}</a>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'cv':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">Professional CV</h2>
            <div className="w-full h-[800px]">
              <embed
                src={MoshikResume}
                type="application/pdf"
                width="100%"
                height="100%"
                className="border-2 border-gray-200 rounded-lg shadow-md"
              />
            </div>
            <div className="text-center mt-4">

              <a
                // href="./Moshik-Ziony-CV.pdf" 
                href={MoshikResume}
                download
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Download CV
              </a>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <div className="space-y-4">
              <p>
                <strong>Email:</strong> moshiktm1994@gmail.com
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/moshik-ziyoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/MoshikZiyoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    
    
    
    <div className="min-h-screen bg-gray-50 flex flex-col">
        <meta name="theme-color" content={themeColor} />
    
      <nav className="bg-white shadow-md relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Moshik Ziony</h1>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => setActiveSection('home')}
              className={`flex items-center space-x-2 ${activeSection === 'home' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              <Home size={20} />
              <span>Home</span>
            </button>
            <button
              onClick={() => setActiveSection('experience')}
              className={`flex items-center space-x-2 ${activeSection === 'experience' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              <Briefcase size={20} />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveSection('skills')}
              className={`flex items-center space-x-2 ${activeSection === 'skills' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              <Award size={20} />
              <span>Skills</span>
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className={`flex items-center space-x-2 ${activeSection === 'projects' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              <Code size={20} />
              <span>Projects</span>
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className={`flex items-center space-x-2 ${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              <Send size={20} />
              <span>Contact</span>
            </button>
            <button
                  onClick={() => setActiveSection('cv')}
                  className={`flex items-center space-x-2 ${activeSection === 'cv' ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <Download size={20} />
                  <span>CV</span>
                </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10 md:hidden">
              <div className="flex flex-col items-center space-y-4 py-4">
                <button
                  onClick={() => {
                    setActiveSection('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 ${activeSection === 'home' ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <Home size={20} />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => {
                    setActiveSection('experience');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 ${activeSection === 'experience' ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <Briefcase size={20} />
                  <span>Experience</span>
                </button>
                <button
                  onClick={() => {
                    setActiveSection('skills');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 ${activeSection === 'skills' ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <Award size={20} />
                  <span>Skills</span>
                </button>
                <button
                  onClick={() => {
                    setActiveSection('projects');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 ${activeSection === 'projects' ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <Code size={20} />
                  <span>Projects</span>
                </button>
                <button
                  onClick={() => {
                    setActiveSection('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 ${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <Send size={20} />
                  <span>Contact</span>
                </button>
                <button
                  onClick={() => setActiveSection('cv')}
                  className={`flex items-center space-x-2 ${activeSection === 'cv' ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <Download size={20} />
                  <span>CV</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 flex-grow">
        {renderSection()}
      </main>

      <footer className="bg-white shadow-md py-4 text-center">
        <p className="text-gray-600">© 2024 Moshik Ziony. All Rights Reserved.</p>
      </footer>
    </div>
    
  );
};


export default App;

