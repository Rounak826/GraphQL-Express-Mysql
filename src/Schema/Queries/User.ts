import { GraphQLID, GraphQLList } from "graphql";
import { UserType } from "../TypeDef/User";
import { Users } from "../../Entities/Users";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find();
  },
};
export const GET_USER = {
  type: UserType,
  args: {
    id: GraphQLID,
  },
  resolve(parent: any, args: any) {
    return Users.findOneBy({ id: args.id });
  },
};
