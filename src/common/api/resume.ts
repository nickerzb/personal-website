//import { getAxiosInstance } from './axios-instance'
import jobData from "./jobs.json";
import certificationData from "./certifications.json";

export const getJobInfo = async (): Promise<Job[]> => {
  let data: Job[] = (jobData as any) as Job[];
  data = data.sort((a, b) => {
    const aDate = +new Date(a.start_date);
    const bDate = +new Date(b.start_date);
    return bDate - aDate;
  });
  return data;
};

export const getCertificationsInfo = async (): Promise<Certification[]> => {
  let data: Certification[] = (certificationData as any) as Certification[];
  data = data.sort((a, b) => a.title.localeCompare(b.title));
  return data;
};
