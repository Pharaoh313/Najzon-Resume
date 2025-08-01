import { ResumeData } from '../types';
import { ResumeJsonData } from '../types/resume';
import resumeJsonData from './resume.json';

// Cast the imported JSON to our typed interface
const resumeJson = resumeJsonData as ResumeJsonData;

// Transform JSON data to match our TypeScript interfaces
export const resumeData: ResumeData = {
  name: resumeJson.name,
  title: resumeJson.title,
  location: resumeJson.location,
  summary: resumeJson.summary,
  contact: {
    email: resumeJson.email,
    phone: resumeJson.phone,
    location: resumeJson.location
  },
  experience: resumeJson.experience.map(exp => ({
    id: exp.id,
    title: exp.title,
    company: exp.company,
    duration: exp.duration,
    description: exp.description,
    skills: exp.skills
  })),
  skills: resumeJson.skills.map((skill, index) => ({
    id: skill.name.toLowerCase().replace(/\s+/g, '-'),
    name: skill.name,
    category: skill.category
  })),
  cloudRoadmap: resumeJson.cloudRoadmap.map(step => ({
    id: step.id,
    title: step.title,
    description: step.description,
    skills: step.skills,
    completed: step.completed
  }))
};