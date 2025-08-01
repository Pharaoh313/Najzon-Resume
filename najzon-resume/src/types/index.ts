export interface JobExperience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
}

export interface CloudSecurityStep {
  id: string;
  title: string;
  description: string;
  skills: string[];
  completed: boolean;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  summary: string;
  contact: ContactInfo;
  experience: JobExperience[];
  skills: Skill[];
  cloudRoadmap: CloudSecurityStep[];
}