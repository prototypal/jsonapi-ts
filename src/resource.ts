import { ResourceAttributes, ResourceRelationships, ResourceSchema } from "./types";
import { camelize } from "./utils/string";

export default abstract class Resource {
  static get type() {
    return camelize(this.name);
  }

  static schema: ResourceSchema = {
    attributes: {},
    relationships: {}
  };

  id?: string;
  type: string;
  attributes: ResourceAttributes;
  relationships: ResourceRelationships;

  constructor({
    id,
    attributes,
    relationships
  }: {
    id?: string;
    attributes?: ResourceAttributes;
    relationships?: ResourceRelationships;
  }) {
    this.id = id;
    this.type = (this.constructor as typeof Resource).type;
    this.attributes = attributes || {};
    this.relationships = relationships || {};
  }
}
