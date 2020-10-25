import {
  Column,
  Entity, JoinTable, ManyToMany,
  PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany
} from "typeorm";

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file: string;

}
