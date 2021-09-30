import { Reel, ReelModel } from 'src/entities/reel.entity';
import { Ref } from 'src/types';
import { Service } from 'typedi';
import BaseEntityService from './base-entity.service';

@Service()
export class ReelService extends BaseEntityService<Reel> {
  constructor() {
    super(ReelModel);
  }

  async getOne(id: Ref<Reel>): Promise<Reel> {
    if (!id) {
      const first = await this.repository.find({}).limit(1);
      if (first.length > 0) {
        return first[0];
      }
    }
    return this.repository.findById(id);
  }
}
