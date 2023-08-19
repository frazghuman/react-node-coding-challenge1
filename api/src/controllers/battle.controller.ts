import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Battle, Monster } from '../models';
import { calculateBattleResult } from '../utils/battle';

const list = async (req: Request, res: Response): Promise<Response> => {
  const battles = await Battle.query();
  return res.status(StatusCodes.OK).json(battles);
};

const battle = async (req: Request, res: Response) => {

  try {
    const { monster1Id, monster2Id } = req.body;

    const monster1 = await Monster.query().findById(monster1Id);
    const monster2 = await Monster.query().findById(monster2Id);

    if (!monster1 || !monster2) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'Monsters not found'})
    }

    const battleResult = calculateBattleResult(monster1, monster2);

    await Battle.query().insert({ monsterA: monster1, monsterB: monster2, winner: battleResult.winner});

    return res.status(StatusCodes.OK).json(battleResult);

  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'Error conducting battle'})
  }
  // const battles = await Battle.query();
  // return res.status(StatusCodes.OK).json(battles);
};

export const BattleController = {
  list,
  battle
};
