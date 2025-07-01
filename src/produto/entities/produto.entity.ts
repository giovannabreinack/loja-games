import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";

@Entity({name: "tb_produtos"})

export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column('decimal', {precision: 10, scale: 2, nullable: false})
    preco: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
     onDelete: "CASCADE"
    })
     categoria: Categoria
}