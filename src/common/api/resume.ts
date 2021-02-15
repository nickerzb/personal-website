const { CosmosClient } = require("@azure/cosmos");

const endpoint = "https://personal-website-db.documents.azure.com/"; // Add your endpoint
const key =
  "pj8SpKm1HRA8PHpQ3d4qNXEUxcYjqUJ7d2HcKH0nU9F15P0POtjwgVyR8XP4PP1rViKHPfh0He1zegljWCbHpw=="; // Add the masterkey of the endpoint
const client = new CosmosClient({ endpoint, key });

export const getJobInfo = async (): Promise<Job[]> => {
  const database = client.database("Personal-Website");
  const container = database.container("Jobs");

  const querySpec = {
    query: "SELECT * from jobs"
  };
  const { resources: items } = await container.items
    .query(querySpec)
    .fetchAll();

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

  return sorted as Job[];
};

export const getCertificationsInfo = async (): Promise<Certification[]> => {
  const database = client.database("Personal-Website");
  const container = database.container("Certifications");

  const querySpec = {
    query: "SELECT * from certifications"
  };
  const { resources: items } = await container.items
    .query(querySpec)
    .fetchAll();

  const data = items.sort((a: { title: string }, b: { title: any }) =>
    a.title.localeCompare(b.title)
  );

  return data as Certification[];
};
