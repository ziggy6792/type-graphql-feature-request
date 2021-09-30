/* eslint-disable no-useless-constructor */

import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { Service } from 'typedi';
import { Clip } from 'src/entities/clip.entity';
import { ClipService } from 'src/services/clip.service';

@Service()
@Resolver((of) => Clip)
export class ClipResolver {
  constructor(private readonly clipService: ClipService) {}

  @Query(() => [Clip])
  async listClips(@Arg('limit', { nullable: true }) limit: number): Promise<Clip[]> {
    return this.clipService.getMany(limit);
  }
}
