import { createSelector } from "@rbxts/reflex";
import { describeSnakeFromScore } from "shared/store/snakes";
import { RootState } from "../";

export interface WorldCamera {
	readonly offset: Vector2;
	readonly scale: number;
}

const WORLD_SCALE = 4;

export const selectWorldSubject = (state: RootState) => {
	return state.world.subject;
};

export const selectSnakeFromWorldSubject = (state: RootState) => {
	return state.snakes[state.world.subject];
};

export const selectWorldCamera = createSelector(
	[selectSnakeFromWorldSubject],
	(snake) => {
		if (!snake) {
			return {
				offset: new Vector2(),
				scale: WORLD_SCALE,
			};
		}

		const { radius } = describeSnakeFromScore(snake.score);

		return {
			offset: snake.head.mul(-1),
			// scale: mapStrict(radius, 0.5, 3, WORLD_SCALE, WORLD_SCALE * 0.5),
			scale: 0.5,
		};
	},
	{
		// only re-compute if the snake is not null
		equalityCheck: (current, previous) => current === previous || current === undefined,
	},
);
