import { Monster } from "../models";

interface BattleResult {
    winner: Monster;
    rounds: number;
}

export function calculateBattleResult(monster1: Monster, monster2: Monster): BattleResult {

    let attacker: Monster | null = null;
    let defender: Monster | null = null;

    if (monster1.speed > monster2.speed) {
        attacker = monster1;
        defender = monster2;
    } else if(monster2.speed > monster1.speed) {
        attacker = monster2;
        defender = monster1;
    } else if (monster1.attack > monster2.attack) {
        attacker = monster1;
        defender = monster2;
    } else {
        attacker = monster2;
        defender = monster1;
    }

    let rounds = 0;

    while(monster1.hp > 0 && monster2.hp > 0) {
        if(attacker && defender) {
            const damage = Math.max(attacker.attack - defender.defense, 1);
            defender.hp -= damage;

            rounds++;

            // Swap attacker and defender for the next round

            const temp: any = attacker;
            attacker = defender;
            defender = temp;
        }
    }

    const winner = monster1.hp > 0 ? monster1 : monster2;
    return {
        winner,
        rounds
    }

}