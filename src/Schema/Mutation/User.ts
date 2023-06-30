import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDef/User";
import { Users } from "../../Entities/Users";
import { MessageType } from "../TypeDef/Message";

export const CREATE_USER = {
  type: MessageType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve(parent: any, args: any) {
    Users.insert(args);
    return args;
  },
};
export const DELETE_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent: any, args: any) {
    Users.delete(args.id);
    return args;
  },
};

export const UPDATE_USER = {
  type: UserType,
  args: {
    username: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, oldPassword, newPassword } = args;
    const user = await Users.findOneBy({
      username: username,
    });
    const userPassword = user?.password;
    // console.log(user);
    if (userPassword === oldPassword) {
      return await Users.update(
        { username: username },
        { password: newPassword }
      );
    } else {
      throw new Error("Password do not match");
    }
  },
};
