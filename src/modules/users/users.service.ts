import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {

  constructor(private readonly prima: PrismaService) { }

  create(createUserDto: Prisma.UserCreateInput) {
    return this.prima.user.create({
      data: {
        ...createUserDto, userSetting: {
          create: {
            notificationOn: false,
            smsEnable: false
          }
        }
      }
    })
  }

  findAll() {
    return this.prima.user.findMany({ include: { userSetting: true } })
  }

  findOne(id: number) {
    return this.prima.user.findUnique({
      where: { id }, include: {
        userSetting: {
          select: {
            smsEnable: true
          }
        }
      }
    })
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.prima.user.update({ data: updateUserDto, where: { id } })
  }

  remove(id: number) {
    return this.prima.user.delete({ where: { id } })
  }
}
