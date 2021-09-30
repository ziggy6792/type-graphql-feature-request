import { modelOptions } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { ObjectType, Field } from 'type-graphql';

@modelOptions({
  schemaOptions: {
    timestamps: true,
    // toJSON: { transform: (doc: any, ret: any, options: any) => console.log(doc, ret, options) },
    // toObject: {
    //   transform: (doc: any, ret: any, options: any) => {
    //     console.log(doc, ret, options);
    //     return ret;
    //   },
    // },
  },
  options: {
    /**
     * Documents have a toObject method which converts the mongoose document into a plain JavaScript object.
     * This method accepts a few options. Instead of applying these options on a per-document basis, we may
     * declare the options at the schema level and have them applied to all of the schema's documents by
     * default.
     */
    // toObject?: ToObjectOptions;
    // allowMixed: Severity.ALLOW,
  },
})
@ObjectType()
export class BaseEntity {
  @Field({ name: 'id' })
  _id: ObjectId;

  @Field()
  readonly createdAt: Date;

  @Field()
  readonly updatedAt: Date;

  public equals(compare: any): boolean {
    return this === compare;
  }
}
