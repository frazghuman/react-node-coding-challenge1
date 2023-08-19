import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { Title } from "../../components/title/Title"
import { fetchMonstersData } from "../../reducers/monsters/monsters.actions"
import { selectMonsters, selectComputerMonster, selectSelectedMonster } from "../../reducers/monsters/monsters.selectors"
import { BattleSection, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay"

import { MonsterService } from "../../reducers/monsters/monsters.service";

const BattleOfMonsters = () => {
    const dispatch = useAppDispatch()

    const monsters = useSelector(selectMonsters)
    const selectedMonster = useSelector(selectSelectedMonster)
    const selectedComputerMonster = useSelector(selectComputerMonster)

    const [winner, setWinner] = useState<string | null>(null)

    useEffect(() => {
        dispatch(fetchMonstersData())
    }, [dispatch]);

    useEffect(() => {
        setWinner(null);
    }, [selectedMonster]);

    const handleStartBattleClick = async () => {
        // Fight!
        try {
            
            if(selectedMonster?.id && selectedComputerMonster?.id) {
                const response = await MonsterService.startBattle(Number(selectedMonster?.id), Number(selectedComputerMonster?.id));
                debugger;
                if (response.ok) {
                    const responseData = await response.json(); // Parse the response as JSON
                    if (responseData?.winner?.name) {
                        setWinner(responseData.winner.name);
                    }
                  } else {
                    console.error('POST request failed');
                  }
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} />

            {!!winner ? <WinnerDisplay text={winner} /> : <></>}

            <BattleSection>
                <MonsterBattleCard monster={selectedMonster} title={selectedMonster?.name || "Player"}></MonsterBattleCard>
                <StartBattleButton data-testid="start-battle-button"  disabled={selectedMonster === null} onClick={handleStartBattleClick}>Start Battle</StartBattleButton>
                <MonsterBattleCard monster={selectedComputerMonster} title={selectedComputerMonster?.name || "Computer"}></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }