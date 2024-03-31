import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
import { UsersEntity } from '../entities/users.entity';
import { UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @Post('register')
    public postRegister(@Body() body: UserDTO){
        return this.usersService.createUser(body);
    }

    @Get('all')
    public getAllUsers(): Promise<UsersEntity[]>{
        return this.usersService.findUsers();
    }

    @Get(':id')
    public getUserById(@Param('id', new ParseUUIDPipe()) id: string): Promise<UsersEntity>{
        return this.usersService.findUserById(id);
    }

    @Put('edit/:id')
    public updateUser(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: UserUpdateDTO): Promise<UpdateResult>{
        return this.usersService.updateUser(body, id);
    }

    @Put('delete/:id')
    public deleteUser(@Param('id', new ParseUUIDPipe()) id: string){
        return this.usersService.deleteUser(id);
    }
}
