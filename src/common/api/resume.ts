//import { getAxiosInstance } from './axios-instance'
import jobData from "./jobs.json";

export const getJobInfo = async (): Promise<Job[]> => {
  let data: Job[] = (jobData as any) as Job[];
  return data;
};
