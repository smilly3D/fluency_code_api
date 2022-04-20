import {Entity, PrimaryColumn, Column, CreateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity('students')
export class Students {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password : string;
    
    @Column()
    cpf: string;

    @Column()
    phone: string;

    @Column()
    biography: string;

    @Column()
    photo_url: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdOn : Date;

    @CreateDateColumn()
    updatedOn : Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}