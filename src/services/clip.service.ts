import { Clip, ClipModel } from 'src/entities/clip.entity';
import { Ref } from 'src/types';
import { Service } from 'typedi';
import { ObjectId } from 'mongodb';
import BaseEntityService from './base-entity.service';

@Service()
export class ClipService extends BaseEntityService<Clip> {
  constructor() {
    super(ClipModel);
  }

  async getByIds(ids: ObjectId[]): Promise<Clip[]> {
    return this.repository.find({ _id: { $in: ids } });
  }
}
