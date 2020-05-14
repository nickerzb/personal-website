//import { getAxiosInstance } from './axios-instance'
import jobData from "./jobs.json";

export const getJobInfo = async (): Promise<Job[]> => {
  let data: Job[] = (jobData as any) as Job[];
  data = data.map(job => {
    let newJob = { ...job };
    newJob.start_date = new Date(job.start_date);
    if (job.end_date) {
      newJob.end_date = new Date(job.end_date);
    }
    return newJob;
  });
  return data;
};
