import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: "Najzon Weaver",
  title: "Aspiring Cloud Security Engineer",
  location: "Mount Clemens, MI",
  summary: "Aspiring Cloud Security Engineer with a strong foundation in operations, logistics, and customer service. Known for real-time problem solving, communication, and leadership. Currently seeking opportunities to grow in cloud security and cybersecurity roles.",
  contact: {
    email: "weaverj56@gmail.com",
    phone: "+1 313 690 1673",
    location: "Mount Clemens, MI"
  },
  experience: [
    {
      id: "postal-carrier",
      title: "Postal Carrier",
      company: "United States Postal Service",
      duration: "August 2020 – Present",
      description: [
        "Deliver 500+ packages and mailpieces daily, maintaining delivery accuracy and time efficiency.",
        "Resolve customer issues and delivery challenges with professionalism and clear communication.",
        "Plan and adapt delivery routes in real time based on volume, weather, and logistics conditions."
      ],
      skills: ["Problem Solving", "Customer Service", "Time Management", "Operations Management"]
    },
    {
      id: "shift-lead",
      title: "Shift Lead",
      company: "Pokeworks",
      duration: "April 2019 – August 2020",
      description: [
        "Supervised 3–5 team members per shift, ensuring quality service and team accountability.",
        "Trained new employees on store operations, customer service, and food handling standards.",
        "Handled daily transactions over $2,000 while maintaining loss prevention and financial accuracy.",
        "Resolved customer issues quickly to maintain service standards and store reputation."
      ],
      skills: ["Team Leadership", "Staff Training", "Workflow Coordination", "Conflict Resolution"]
    },
    {
      id: "food-expeditor",
      title: "Food Expeditor",
      company: "The Great Greek",
      duration: "July 2019 – December 2019",
      description: [
        "Coordinated communication between kitchen and front-of-house teams to ensure timely, accurate food delivery.",
        "Verified order quality, presentation, and accuracy before sending dishes to guests."
      ],
      skills: ["Workflow Coordination", "Communication", "Problem Solving", "Time Management"]
    },
    {
      id: "assistant-manager",
      title: "Assistant Manager",
      company: "Family Dollar",
      duration: "November 2015 – August 2016",
      description: [
        "Promoted from Cashier to Assistant Manager based on strong performance and leadership.",
        "Supervised daily store operations, including opening/closing, staff task assignments, and shift coverage.",
        "Trained and coached team members on POS systems, store procedures, and customer service standards.",
        "Handled cash deposits and inventory audits, ensuring financial and stock accuracy.",
        "Resolved customer issues and complaints with professionalism, maintaining store reputation."
      ],
      skills: ["Team Leadership", "Operations Management", "Staff Training", "Inventory Management"]
    }
  ],
  skills: [
    { id: "customer-service", name: "Customer Service", category: "interpersonal" },
    { id: "inventory-management", name: "Inventory Management", category: "operations" },
    { id: "workflow-coordination", name: "Workflow Coordination", category: "management" },
    { id: "time-management", name: "Time Management", category: "productivity" },
    { id: "task-delegation", name: "Task Delegation", category: "management" },
    { id: "problem-solving", name: "Problem Solving", category: "analytical" },
    { id: "team-leadership", name: "Team Leadership", category: "management" },
    { id: "staff-training", name: "Staff Training", category: "management" },
    { id: "conflict-resolution", name: "Conflict Resolution", category: "interpersonal" },
    { id: "operations-management", name: "Operations Management", category: "management" }
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