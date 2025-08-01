import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: "Najzon Weaver",
  title: "Aspiring Cloud Security Engineer",
  location: "Mount Clemens, MI",
  summary: "Driven by a passion for securing cloud infrastructure and learning emerging technologies in cybersecurity and AWS.",
  contact: {
    email: "weaverj56@gmail.com",
    phone: "+1 313 690 1673",
    location: "Mount Clemens, MI"
  },
  experience: [
    {
      id: "assistant-manager",
      title: "Assistant Manager",
      company: "Family Dollar",
      duration: "Nov 2015 – Aug 2016",
      description: [
        "Led team operations and workflow coordination",
        "Managed inventory control and stock management",
        "Provided exceptional customer service and conflict resolution",
        "Trained new employees on procedures and best practices"
      ],
      skills: ["Team Leadership", "Workflow Coordination", "Customer Service", "Training & Development"]
    },
    {
      id: "cashier-sales",
      title: "Cashier/Sales Associate",
      company: "Various Retail",
      duration: "2014 – 2015",
      description: [
        "Processed transactions and handled customer inquiries",
        "Maintained store presentation and organization",
        "Collaborated with team members to meet daily targets",
        "Developed strong communication and problem-solving skills"
      ],
      skills: ["Customer Service", "Communication", "Problem Solving", "Time Management"]
    }
  ],
  skills: [
    { id: "customer-service", name: "Customer Service", category: "interpersonal" },
    { id: "workflow-coordination", name: "Workflow Coordination", category: "management" },
    { id: "team-leadership", name: "Team Leadership", category: "management" },
    { id: "communication", name: "Communication", category: "interpersonal" },
    { id: "operations-management", name: "Operations Management", category: "management" },
    { id: "time-management", name: "Time Management", category: "productivity" },
    { id: "problem-solving", name: "Problem Solving", category: "analytical" },
    { id: "inventory-control", name: "Inventory Control", category: "operations" },
    { id: "training-development", name: "Training & Development", category: "management" }
  ],
  cloudRoadmap: [
    {
      id: "aws-fundamentals",
      title: "AWS Fundamentals",
      description: "Core AWS services, EC2, S3, VPC, IAM basics",
      skills: ["AWS Console", "Cloud Computing Basics", "Infrastructure as Code"],
      completed: false
    },
    {
      id: "security-fundamentals",
      title: "Security Fundamentals",
      description: "Network security, encryption, identity management",
      skills: ["IAM", "Security Groups", "VPC Security", "KMS"],
      completed: false
    },
    {
      id: "devsecops",
      title: "DevSecOps",
      description: "Security automation, CI/CD pipelines, infrastructure security",
      skills: ["CloudFormation", "Security Automation", "CI/CD Security"],
      completed: false
    },
    {
      id: "monitoring-compliance",
      title: "Monitoring & Compliance",
      description: "CloudTrail, Config, compliance frameworks, incident response",
      skills: ["CloudWatch", "CloudTrail", "AWS Config", "Compliance"],
      completed: false
    }
  ]
};