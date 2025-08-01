declare module '*.json' {
  const value: any;
  export default value;
}

export interface ResumeJsonExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  summary: string;
  skills: string[];
}

export interface ResumeJsonSkill {
  name: string;
  category: string;
  level: string;
}

export interface ResumeJsonCloudRoadmap {
  id: string;
  title: string;
  description: string;
  skills: string[];
  completed: boolean;
  progress: number;
}

export interface ResumeJsonData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  experience: ResumeJsonExperience[];
  skills: ResumeJsonSkill[];
  cloudRoadmap: ResumeJsonCloudRoadmap[];
  certifications: any[];
  education: any[];
  projects: any[];
  languages: Array<{
    name: string;
    level: string;
  }>;
  interests: string[];
}