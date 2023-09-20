import { useDebounceEffect, usePrevious } from "@rbxts/pretty-react-hooks";
import { useSelector, useSelectorCreator } from "@rbxts/react-reflex";
import Roact, { useEffect } from "@rbxts/roact";
import { selectSnakeFromWorldSubject } from "client/store/world";
import { playSound, sounds } from "shared/assets";
import { selectHasLocalSnake, selectSnakeIsBoosting } from "shared/store/snakes";

const ERROR_SOUNDS = [sounds.sfx.error_1, sounds.sfx.error_2, sounds.sfx.error_3];

const random = new Random();

export function WorldSounds() {
	const snake = useSelector(selectSnakeFromWorldSubject);
	const boosting = useSelectorCreator(selectSnakeIsBoosting, snake?.id ?? "");
	const hasLocalSnake = useSelector(selectHasLocalSnake);
	const previousScore = usePrevious(snake?.score);

	const volume = hasLocalSnake ? 0.5 : 0.25;

	// Death sound
	useEffect(() => {
		if (snake?.dead) {
			const index = random.NextInteger(0, ERROR_SOUNDS.size() - 1);
			playSound(ERROR_SOUNDS[index], { volume });
		}
	}, [snake?.dead]);

	// Spawn sound
	useEffect(() => {
		if (hasLocalSnake) {
			playSound(sounds.sfx.start_game);
		}
	}, [hasLocalSnake]);

	// Candy eat sound
	useEffect(() => {
		if ((snake?.score ?? 0) > (previousScore ?? 0)) {
			const speed = random.NextNumber(0.87, 1);
			playSound(sounds.sfx.whoosh, { volume: 0.5 * volume, speed });
		}
	}, [snake?.score]);

	// Boost sound
	useDebounceEffect(
		() => {
			if (snake) {
				playSound(boosting ? sounds.sfx.boost_start : sounds.sfx.boost_stop, { volume });
			}
		},
		[boosting],
		{ wait: 0.25, leading: true },
	);

	return <></>;
}
