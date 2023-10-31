import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.usersRepository.find();
  }

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return this.usersRepository.update(userId, updateUserDto);
  }

  show(userId: number) {
    const data = this.usersRepository.findOneBy({ id: userId });

    if (data) {
      console.log('my data are>>>>>>>>', data);
      return data;
    } else {
      throw new NotFoundException('User not found');
    }
  }

  delete(userId: number) {
    return { userId };
  }
}
