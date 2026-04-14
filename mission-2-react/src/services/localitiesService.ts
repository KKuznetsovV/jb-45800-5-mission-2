import type { Locality } from '../models/Locality';

const LOCALITIES_API =
  'https://data.gov.il/api/3/action/datastore_search?resource_id=8f714b6f-c35c-4b40-a0e7-547b675eee0e&limit=2000';

export async function fetchLocalities(): Promise<Locality[]> {
  const response = await fetch(LOCALITIES_API);
  if (!response.ok) {
    throw new Error('Failed to fetch localities');
  }
  const data = await response.json() as { result: { records: Locality[] } };
  return data.result.records;
}
