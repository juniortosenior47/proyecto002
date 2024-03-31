import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/users.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
import { ErrorManager } from 'src/utils/error.manager';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  public async createUser(body: UserDTO): Promise<UsersEntity> {
    try {
      body.password = await bcrypt.hash(body.password, +process.env.HASH_SALT);
      return await this.usersRepository.save(body);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findUsers(): Promise<UsersEntity[]> {
    try {
      const users: UsersEntity[] = await this.usersRepository.find();
      if (users.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No users found',
        });
      }
      return users;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findUserById(id: string): Promise<UsersEntity> {
    try {
       const user: UsersEntity = await this.usersRepository
        .createQueryBuilder('user')
        .where({ id })
        .getOne();
        if (!user) {
          throw new ErrorManager({
            type: 'BAD_REQUEST',
            message: 'User not found for id: ' + id,
          });
        }
        return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  public async updateUser(
    body: UserUpdateDTO,
    id: string,
  ): Promise<UpdateResult> | undefined {
    try {
      const user: UpdateResult = await this.usersRepository.update(id, body);
      if (user.affected === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No apdate users found',
        });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async deleteUser(id: string): Promise<DeleteResult> | undefined {
    try {
      const user: DeleteResult = await this.usersRepository.delete(id);
      if (user.affected === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No delete users found',
        });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
