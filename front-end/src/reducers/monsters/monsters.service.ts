import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const startBattle = async (monster1Id: number, monster2Id: number) => {
  const formData: any = {monster1Id, monster2Id};

  return await fetch(`${API_URL}/battle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  
}

export const MonsterService = {
  getAll,
  startBattle
};
