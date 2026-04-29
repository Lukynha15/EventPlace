import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { UserAlreadyExistsException } from 'src/errors/user.error';
import { PrismaService } from 'src/prisma.service';
import { hashPassword } from 'src/utils/hash.password';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        username: createUserDto.username,
        email: createUserDto.email,
      },
    });

    if (userExists) {
      throw new UserAlreadyExistsException();
    }

    await firstValueFrom(
      this.httpService.get(
        `https://viacep.com.br/ws/${createUserDto.cep}/json`,
      ),
    );

    await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        username: createUserDto.username,
        email: createUserDto.email,
        password: await hashPassword(createUserDto.password),
        birthDate: createUserDto.birthDate,
        avatar: createUserDto.avatar,
        rating: createUserDto.rating,
        cep: createUserDto.cep,
      },
    });

    return 'Usuário criado com sucesso!';
  }

  async findOne(id: string) {
    await this.prisma.user.findUnique({ where: { id } });
    return `Este é o #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    await this.prisma.user.delete({ where: { id } });
    return `Excluído com sucesso!`;
  }
}
