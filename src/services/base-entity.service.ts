/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import { ReturnModelType } from '@typegoose/typegoose';
import { AnyParamConstructor } from '@typegoose/typegoose/lib/types';
import { Inject } from 'typedi';
import { Ref } from 'src/types';
import Context from 'src/graphql-setup/context';
import { BaseEntity } from 'src/entities/base.entity';
import { ObjectId } from 'mongodb';
import { AddId } from 'src/inputs/types';

export default class BaseEntityService<T extends BaseEntity> {
  @Inject('context') protected readonly context: Context;

  constructor(protected repository: ReturnModelType<AnyParamConstructor<T>>) {}

  async getOne(id: Ref<T>): Promise<T> {
    if (!id) {
      return null;
    }
    return this.repository.findById(id);
  }

  async getMany(limit?: number): Promise<T[]> {
    return this.repository.find({}).limit(limit).sort('startTime');
  }

  public async createOne(input: Partial<T>): Promise<T> {
    return this.repository.create(input);
  }

  public async updateOne(input: Partial<T>): Promise<T> {
    return this.repository.findByIdAndUpdate(input);
    // const existing = await this.repository.findById(input.id);
    // Object.keys(input).forEach((key) => {
    //   existing[key] = input[key];
    // });

    // return existing.save();
    // eslint-disable-next-line new-cap
    // const bla = new this.repository(creatable as any);
    // await bla.save();
    // const newObject = Object.assign(existing, creatable);

    // (existing as any).name = 'BLA BLA';

    // return existing;
    // this.repository.updateOne({ _id: creatable._id }, { $set: { name: 'foo' } })

    // return null;
    // return this.repository.updateOne(creatable as DocumentType<T, BeAnObject>) as T;
  }

  public async createMany(inputs: Partial<T>[]): Promise<T[]> {
    return this.repository.create(inputs);
  }

  public async deleteOne(partitionKey: Ref<T>): Promise<T> {
    return this.repository.findByIdAndDelete(partitionKey);
  }
}
