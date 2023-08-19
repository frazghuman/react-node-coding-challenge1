import { Monster } from "../../models/interfaces/monster.interface"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterCard: React.FC<MonsterCardProps> = ({ title }) => {
    return (
        <></>
    )
}

export { MonsterCard }