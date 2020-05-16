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
  start_date: string;
  end_date: string;
  achievements: Achievement[];
  titles: TItle[];
  blog_posts: Blog[];
}

interface ReduxAction {
  type: string;
  payload: any;
}

interface Blog {
  title: string;
  description: string;
  link: string;
  published_date: string;
}

interface Title {
  title: string;
  start_date: string;
  end_date: string;
}

interface Achievement {
  id: number;
  text: string;
  sub_achievements: Achievement[];
  link: string;
}
