export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {
  const diceFaces = [dice1, dice2, dice3];
  const repititions: any = {};
  let isOutOfRange = false;
  diceFaces.forEach(diceFace => {
    if(diceFace < 1 || diceFace > 6) {
      isOutOfRange = true;
    }
    if(repititions[diceFace]) {
      repititions[diceFace]++;
    } else {
      repititions[diceFace] = 1;
    }
  })

  if (isOutOfRange) {
    throw 'Dice out of number range';
  }

  const noOfDifferentNumbers = Object.keys(repititions).length;
  const repititionKeys: string[] = Object.keys(repititions);
  let result = 0;
  switch (noOfDifferentNumbers) {
    case 1:
      result = Number(repititionKeys[0]) * 3;
      break;
    case 2:
      if(repititions[repititionKeys[0]] > repititions[repititionKeys[1]]) {
        result = Number(repititionKeys[0]) * 2;
      } else {
        result = Number(repititionKeys[1]) * 2;
      }
      break;
  
    default:
      result = Number(repititionKeys[repititionKeys.length - 1]);
      break;
  }
  return result;
};
