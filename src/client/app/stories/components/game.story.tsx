import { hoarcekat, useInterval } from "@rbxts/pretty-react-hooks";
import Roact, { useEffect } from "@rbxts/roact";
import { Game } from "client/app/components/game";
import { SnakeController } from "client/app/components/snake-controller";
import { World } from "client/app/components/world";
import { RootProvider } from "client/app/providers/root-provider";
import { store } from "client/store";
import { LOCAL_USER, WORLD_BOUNDS, WORLD_TICK } from "shared/constants";
import { getRandomAccent } from "shared/data/palette";
import { getRandomDefaultSnakeSkin } from "shared/data/skins";
import { fillArray } from "shared/utils/object-utils";
import { createScheduler } from "shared/utils/scheduler";
import { useMockRemotes } from "../utils/use-mock-remotes";

const IDS = [LOCAL_USER, ...fillArray(10, (index) => `${index}`)];

export = hoarcekat(() => {
	useMockRemotes();

	useEffect(() => {
		for (const id of IDS) {
			store.addSnake(id, {
				name: id,
				head:
					id === LOCAL_USER
						? Vector2.zero
						: new Vector2(
								math.random(-WORLD_BOUNDS, WORLD_BOUNDS),
								math.random(-WORLD_BOUNDS, WORLD_BOUNDS),
						  ),
				skin: getRandomDefaultSnakeSkin().id,
				score: math.random(0, 5000),
			});
		}

		store.populateCandy(
			fillArray(512, (index) => ({
				id: `test-${index}`,
				type: "default",
				position: new Vector2(
					(math.random() * 2 - 1) * WORLD_BOUNDS * 0.2,
					(math.random() * 2 - 1) * WORLD_BOUNDS * 0.2,
				),
				size: math.random(1, 10),
				color: getRandomAccent(),
			})),
		);

		return createScheduler({
			name: "world-tick",
			interval: WORLD_TICK,
			onTick: store.snakeTick,
		});
	}, []);

	useInterval(() => {
		for (const id of IDS) {
			if (id !== LOCAL_USER) {
				store.turnSnake(id, math.random() * 2 * math.pi);
			}
		}
	}, 1.5);

	return (
		<RootProvider>
			<World />
			<Game />
			<SnakeController />
		</RootProvider>
	);
});