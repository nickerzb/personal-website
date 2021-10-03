
export const getJobInfo = async (): Promise<Job[]> => {

  const response = await fetch('https://personalwebite.blob.core.windows.net/personal-website-storage/jobs.json')
  const items:Job[] = await response.json()

  const sorted = items.sort(
    (
      a: { start_date: string | number | Date },
      b: { start_date: string | number | Date }
    ) => {
      const aDate = +new Date(a.start_date);
      const bDate = +new Date(b.start_date);
      return bDate - aDate;
    }
  );

  return sorted;
};

export const getCertificationsInfo = async (): Promise<Certification[]> => {
  const response = await fetch('https://personalwebite.blob.core.windows.net/personal-website-storage/certifications.json')
  const items: Certification[] = await response.json()

  const sorted = items.sort((a: { title: string }, b: { title: any }) =>
    a.title.localeCompare(b.title)
  );

  return sorted;
};
