# Prisma, GraphQL, ReasonReact, Apollo Client Sterter

GraphQL/Prisma Backend + ReasonReact Apollo Frontend with typesafe graphql query generation

# Setup

## Global Dependencies

- Docker
- Prisma v1.x (https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-TYPESCRIPT-t002/)
- Reason/Bucklescript `npm i -g bs-platform` _AND_ https://github.com/reasonml/reason-cli

## Repo Dependencies

> `cd server && yarn && cd ../ui && yarn`

## Environment Variables

- Copy the ui/.env.example file to ui/.env and be sure to provide all variables with values

## Generate Fiels and Start the servers

You can run do all of this with one command from the root directory of the repo:

> `yarn start`ls

Or, you can handle them separately in different terminal sessions:

From _ui_ directory

> `yarn start`

From \_server directory

> `yarn start`
