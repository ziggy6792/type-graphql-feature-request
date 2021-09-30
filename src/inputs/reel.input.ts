/* eslint-disable max-classes-per-file */
import { Reel } from 'src/entities/reel.entity';
import { Definition, Standard } from 'src/enums';
import { InputType, Field } from 'type-graphql';
import { ObjectId } from 'mongodb';
import { Identifiable } from './types';

@InputType()
export class UpdateReelInput implements Partial<Reel> {
  @Field({ name: 'id' })
  _id: ObjectId;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field((type) => Standard, { nullable: true })
  standard: Standard;

  @Field((type) => Definition, { nullable: true })
  definition: Definition;
}
