import { Column, ManyToOne, OneToMany } from "typeorm";

import { BaseEntity } from "../../config/base.entity";
import { ACCESS_LEVEL } from "../../constants/roles";
import { UsersEntity } from "./users.entity";
import { ProjectsEntity } from "../../projects/entities/projects.entity";


export class UsersProjectsEntity extends BaseEntity {
    @Column({type: 'enum', enum: ACCESS_LEVEL})
    acceslevels: ACCESS_LEVEL;

    /*@ManyToOne(()=> UsersEntity, (user)=> user.projectIncludes)
    user: UsersEntity;
    
    @ManyToOne(()=> ProjectsEntity, (project)=> project.userIncludes)
    project: ProjectsEntity;
    */
}