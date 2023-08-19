import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Monster } from '../models';

const list = async (req: Request, res: Response): Promise<Response> => {
  try {
    const monsters = await Monster.query();
    return res.status(StatusCodes.OK).json(monsters);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: 'Monsters not found'});
  }
};

export const MonsterController = {
  list,
};
