import { Card, CardActionArea, CardContent, CardMedia, Slider, Typography } from "@mui/material"
import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard, BattleMonsterTitle, ProgressBar } from "./MonsterBattleCard.styled"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = (props: MonsterCardProps) => {
    const { monster, title} = props;
    const monsterRatings = [
        {
            name: 'HP',
            value: monster?.hp
        },
        {
            name: 'Attack',
            value: monster?.attack
        },
        {
            name: 'Defense',
            value: monster?.defense
        },
        {
            name: 'Speed',
            value: monster?.speed
        }
    ]
    if (monster) {
        return (<Card>
            <CardActionArea>
                <div className="CardMediaContainer" style={{margin: "15px 15px 0 15px"}}>
                    <CardMedia
                        style={{borderRadius: '7px'}}
                        className="Img"
                        component="img"
                        image={monster.imageUrl}
                        alt={monster.name}
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {monster.name}
                    </Typography>
                    {monsterRatings.map((monsterRating)=>(
                        <div>
                            <label>{monsterRating.name}</label>
                            <ProgressBar variant="determinate" value={monsterRating.value} />
                        </div>
                    ))}
                </CardContent>
            </CardActionArea>
        </Card>);
    }
    return (
        <BattleMonsterCard centralized>
            <BattleMonsterTitle>{title!}</BattleMonsterTitle>
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }