import { Spring, useMotor } from "@rbxts/pretty-react-hooks";
import { useSelector } from "@rbxts/react-reflex";
import Roact, { useEffect, useMemo } from "@rbxts/roact";
import { Group } from "client/app/common/group";
import { useRem } from "client/app/hooks";
import { selectWorldCamera } from "client/store/world";
import { CandyItem } from "./candy-item";
import { useCandyOnScreen } from "./use-candy-on-screen";

export function Candy() {
	const rem = useRem();
	const world = useSelector(selectWorldCamera);
	const candyOnScreen = useCandyOnScreen(world.offset, world.scale);

	const [smoothOffset, setSmoothOffset] = useMotor({
		x: world.offset.X,
		y: world.offset.Y,
	});

	const children = useMemo(() => {
		let length = 0;

		return candyOnScreen.mapFiltered((entity) => {
			if (length > 200) {
				return;
			}

			length++;

			return (
				<CandyItem
					key={`candy-${entity.id}`}
					size={entity.size}
					point={entity.position.mul(world.scale)}
					color={entity.color}
					eatenAt={entity.eatenAt?.mul(world.scale)}
				/>
			);
		});
	}, [candyOnScreen]);

	useEffect(() => {
		setSmoothOffset({
			x: new Spring(world.offset.X),
			y: new Spring(world.offset.Y),
		});
	}, [world.offset]);

	return (
		<Group
			position={smoothOffset.map(
				(offset) => new UDim2(0.5, rem(offset.x * world.scale), 0.5, rem(offset.y * world.scale)),
			)}
		>
			{children}
		</Group>
	);
}