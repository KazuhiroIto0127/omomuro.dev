import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';

const TOKEN = process.env.CONTENTFUL_DELIVERY_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: {
    [URL]: {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  },
  generates: {
    './lib/__generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
    './lib/__generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
    './lib/__generated/sdk.ts': {
      documents: ['./lib/graphql/**/*.graphql'],
      plugins: ['client-preset'],
      config: {
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
      },
    },
  },
};
export default config;
