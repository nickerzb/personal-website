/// <reference types="react-scripts" />

declare module "*.svg" {
  const content: string;
  export default content;
}

interface ResumeInfo {
  jobs: Job[];
}

interface Job {
  id: number;
  company_name: string;
  company_website: string;
  current_title: string;
  start_date: Date;
  end_date: Date;
  achievements: Achievement[];
}

interface Achievement {
  id: number;
  text: string;
  sub_achievements: Achievement[];
  isLink: boolean;
  link: string;
}
