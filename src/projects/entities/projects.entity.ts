import {  Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { IProject } from "../../interfaces/project.interface";
import { UsersProjectsEntity } from "../../users/entities/usersProjects.entity";


@Entity({name : 'projects'})
export class ProjectsEntity extends BaseEntity implements IProject {
    @Column()
    name: string;
    @Column()
    description: string;
    //@OneToMany(()=>UsersProjectsEntity,(usersProjects)=> usersProjects.project)
    //userIncludes: UsersProjectsEntity;
   
}