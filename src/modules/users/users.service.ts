import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {

  constructor(private readonly prima: PrismaService) { }

  create(createUserDto: Prisma.UserCreateInput) {
    return this.prima.user.create({ data: createUserDto })
  }

  findAll() {
    return this.prima.user.findMany()
  }

  findOne(id: number) {
    return this.prima.user.findUnique({ where: { id } })
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.prima.user.update({ data: updateUserDto, where: { id } })
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
