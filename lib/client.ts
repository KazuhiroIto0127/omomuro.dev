import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@/lib/__generated/sdk';

const TOKEN = process.env.CONTENTFUL_DELIVERY_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const graphQLClient = new GraphQLClient(ENDPOINT, {
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});

export const client = getSdk(graphQLClient);
