import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const pass = await bcrypt.hash(createUserDto.password, 10);
      const newuser = await this.usersRepository.create({
        ...createUserDto,
        password: pass,
      });

      return await this.usersRepository.save(newuser);
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async findAll() {
    return await this.usersRepository.find({});
  }

  async findOne(id: number) {
    try {
      return await this.usersRepository.findOne({ where: { id: id } });
    } catch (e) {}
  }
  findOneUserByEmail(email: string): Promise<User> {
    try {
      return this.usersRepository.findOne({ where: { email } });
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.usersRepository.findOne({ where: { id: id } });
      if (user) {
        user.unit == updateUserDto.unit;
        user.role == updateUserDto.role;
        await this.usersRepository.save(user);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const hashpass = await bcrypt.hash(password, 10);
    const user = await this.usersRepository.findOne({ where: { email } });
    const match = await bcrypt.compare(password, hashpass);
    if (user && match) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
