import { ROLES } from "../../constants/roles";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { IUser } from "../../interfaces/user.interface";

import { UsersProjectsEntity } from "./usersProjects.entity";

@Entity({name : 'users'})
export class UsersEntity extends BaseEntity implements IUser {
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    ege: number;
    @Column({unique : true})
    email: string;
    @Column({unique : true})
    username: string;
    @Column()
    password: string;
    @Column({ type: 'enum', enum: ROLES})
    role: ROLES;
    //@OneToMany(()=> UsersProjectsEntity, (userproject)=> userproject.user)
    //projectIncludes: UsersProjectsEntity;
}