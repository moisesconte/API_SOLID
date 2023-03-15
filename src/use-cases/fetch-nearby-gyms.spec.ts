import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository';
import { expect, describe, it, beforeEach } from 'vitest';
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms';

let gymsRepository: InMemoryGymsRepository;
let sut: FetchNearbyGymsUseCase;

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new FetchNearbyGymsUseCase(gymsRepository);
  });


  it('should be able to fetch nearby gyms', async () => {

    await gymsRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -20.7439268,
      longitude: -46.6258785
    });


    await gymsRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: -20.6387965,
      longitude: -46.5065128
    });

    const { gyms } = await sut.execute({
      userLatitude: -20.7439268,
      userLongitude: -46.6258785
    });

    expect(gyms).toHaveLength(1);
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })]);
  });

});