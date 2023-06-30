import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

import { Schema } from "./Schema";
import AppDataSource from "./Config/DB";

const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/api/",
    graphqlHTTP({
      schema: Schema,
      graphiql: true,
    })
  );
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  app.listen(3001, () => {
    console.log("App running on port", 3001);
  });
};

main().catch((e) => console.log(e));
