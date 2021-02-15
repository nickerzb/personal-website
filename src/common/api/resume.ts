const { CosmosClient } = require("@azure/cosmos");

const endpoint = "https://personal-website-db.documents.azure.com/"; // Add your endpoint
const key =
  "pj8SpKm1HRA8PHpQ3d4qNXEUxcYjqUJ7d2HcKH0nU9F15P0POtjwgVyR8XP4PP1rViKHPfh0He1zegljWCbHpw=="; // Add the masterkey of the endpoint
const client = new CosmosClient({ endpoint, key });

export const getJobInfo = async (): Promise<Job[]> => {
  const database = client.database("Personal-Website");
  const container = database.container("Jobs");

  const querySpec = {
    query: "SELECT * from jobs order by jobs.start_date desc"
  };
  const { resources: items } = await container.items
    .query(querySpec)
    .fetchAll();
  return items as Job[];
};

export const getCertificationsInfo = async (): Promise<Certification[]> => {
  const database = client.database("Personal-Website");
  const container = database.container("Certifications");

  const querySpec = {
    query: "SELECT * from certifications order by certifications.title"
  };
  const { resources: items } = await container.items
    .query(querySpec)
    .fetchAll();

  return items as Certification[];
};
