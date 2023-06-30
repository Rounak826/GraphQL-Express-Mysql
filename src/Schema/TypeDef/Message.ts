import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} from "graphql";
export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    status: { type: GraphQLInt },
  }),
});
