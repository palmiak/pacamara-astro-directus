import { createDirectus, rest, readItems } from '@directus/sdk';

export const getDirectusClient = async ( collection, args ) => {
  const client = createDirectus(import.meta.env.PUBLIC_DIRECTUS_URL).with(rest());
  
  const result = await client.request(
    readItems( collection, args )
  );

  return result;
};
