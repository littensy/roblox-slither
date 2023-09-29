import { useThrottleCallback } from "@rbxts/pretty-react-hooks";
import { useSelector } from "@rbxts/react-reflex";
import Roact, { useEffect } from "@rbxts/roact";
import { useInputDevice, useStore } from "client/app/hooks";
import { REMOTE_TICK, WORLD_TICK } from "shared/constants";
import { remotes } from "shared/remotes";
import { selectLocalSnake } from "shared/store/snakes";

import { Gamepad } from "./gamepad";
import { Mouse } from "./mouse";
import { Touch } from "./touch";
import { useToggleTouchControls } from "./use-toggle-touch-controls";

export function Controller() {
	const store = useStore();
	const device = useInputDevice();
	const snake = useSelector(selectLocalSnake);

	useToggleTouchControls(snake !== undefined);

	const updateAngle = useThrottleCallback(
		(angle: number) => {
			remotes.snake.move.fire(angle);
			store.setWorldInputAngle(angle);
		},
		{ wait: REMOTE_TICK, leading: true, trailing: true },
	);

	const setBoost = useThrottleCallback(
		(boost: boolean) => {
			remotes.snake.boost.fire(boost);
		},
		{ wait: WORLD_TICK, leading: true, trailing: true },
	);

	useEffect(() => {
		if (snake) {
			store.setWorldInputAngle(0);
		}
	}, [!snake]);

	if (!snake) {
		return <></>;
	}

	return (
		<>
			{device === "keyboard" && <Mouse updateAngle={updateAngle.run} setBoost={setBoost.run} />}
			{device === "touch" && <Touch updateAngle={updateAngle.run} setBoost={setBoost.run} />}
			{device === "gamepad" && <Gamepad updateAngle={updateAngle.run} setBoost={setBoost.run} />}
		</>
	);
}
