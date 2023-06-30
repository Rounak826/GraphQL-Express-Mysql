import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutation/User";
const RootQuery = new GraphQLObjectType({
  name: "rootquery",
  fields: {
    getAllUser: GET_ALL_USERS,
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updateUser: UPDATE_USER,
  },
});
export const Schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
