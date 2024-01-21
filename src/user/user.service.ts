import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({ id });
  }
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}