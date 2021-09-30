import { InputType, Field } from 'type-graphql';
import { ObjectId } from 'mongodb';

export type AddId<T> = T & Identifiable;

@InputType()
export class Identifiable {
  @Field()
  id: ObjectId;
}
