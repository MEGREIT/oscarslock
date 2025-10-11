import { type SchemaTypeDefinition } from "sanity";
import post from "./schemas/post";
import author from "./schemas/author";
import service from "./schemas/service";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, service],
};
