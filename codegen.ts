import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';

const TOKEN = process.env.CONTENTFUL_DELIVERY_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const config: CodegenConfig = {
  schema: {
    [URL]: {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  },
  documents: ['lib/graphql/src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './lib/graphql/codegen/': {
      preset: 'client',
      plugins: [],
    },
  },
};
export default config;
