import shuffle from "lodash/shuffle";
import { MAX_COORD, MIN_COORD } from "../constants";
import { Direction } from "../constants/direction";
import { DirectionStrings, ICell, IPosition } from "../types";

const getAvailableDirections = (
  emptyCellPosition: IPosition,
  excludedDirection: DirectionStrings | null
) => {
  const directions = [];

  if (emptyCellPosition.x > MIN_COORD && emptyCellPosition.x <= MAX_COORD) {
    directions.push(Direction.Left);
  }

  if (emptyCellPosition.x >= MIN_COORD && emptyCellPosition.x < MAX_COORD) {
    directions.push(Direction.Right);
  }

  if (emptyCellPosition.y > MIN_COORD && emptyCellPosition.y <= MAX_COORD) {
    directions.push(Direction.Up);
  }

  if (emptyCellPosition.y >= MIN_COORD && emptyCellPosition.y < MAX_COORD) {
    directions.push(Direction.Down);
  }

  return directions.filter((v) => v !== excludedDirection);
};

export const getRandomDirection = (
  cells: ICell[],
  excludedDirection: DirectionStrings | null
): DirectionStrings => {
  const emptyCell = cells.at(-1) as ICell;

  const availableDirections = getAvailableDirections(
    emptyCell.position.current,
    excludedDirection
  );

  return shuffle(availableDirections)[0];
};
