import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm"


@Entity("settings")
class Setting{

    @PrimaryColumn()
    id: String

    @Column()
    username: String

    @Column()
    chat: Boolean

    @UpdateDateColumn()
    updated_at: Date

    @UpdateDateColumn()
    created_at: Date;

}

export { Setting }