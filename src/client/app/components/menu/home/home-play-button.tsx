import { Spring, lerpBinding, useMotor, useTimer } from "@rbxts/pretty-react-hooks";
import Roact from "@rbxts/roact";
import { Frame } from "client/app/common/frame";
import { ReactiveButton } from "client/app/common/reactive-button";
import { Shadow } from "client/app/common/shadow";
import { Text } from "client/app/common/text";
import { useRem } from "client/app/hooks";
import { palette } from "shared/data/palette";
import { remotes } from "shared/remotes";
import { GRADIENT } from "./utils";

interface HomePlayButtonProps {
	readonly anchorPoint: Vector2;
	readonly size: UDim2;
	readonly position: UDim2;
}

export function HomePlayButton({ anchorPoint, size, position }: HomePlayButtonProps) {
	const rem = useRem();
	const timer = useTimer();
	const [hover, setHover] = useMotor(0);

	const shimmer = timer.value.map((t) => {
		return 30 * t;
	});

	const onClick = () => {
		remotes.snake.spawn.fire();
	};

	return (
		<ReactiveButton
			onClick={onClick}
			onHover={(hovered) => setHover(new Spring(hovered ? 1 : 0))}
			backgroundTransparency={1}
			anchorPoint={anchorPoint}
			size={size}
			position={position}
		>
			<Shadow
				shadowColor={Color3.fromRGB(255, 255, 255)}
				shadowTransparency={0.2}
				shadowSize={rem(2.5)}
				shadowOffset={rem(0.25)}
			>
				<uigradient Color={GRADIENT} Rotation={shimmer} />
			</Shadow>

			<Frame
				backgroundColor={palette.white0}
				backgroundTransparency={lerpBinding(hover, 0.05, 0.2)}
				cornerRadius={new UDim(0, rem(0.5))}
				size={new UDim2(1, 0, 1, 0)}
			>
				<uistroke Color={palette.subtext0} Transparency={0.5} Thickness={rem(0.25)} />
			</Frame>

			<Text
				font="Inter"
				fontWeight={Enum.FontWeight.Medium}
				text="Start Playing →"
				textColor={palette.mantle}
				textSize={rem(1.4)}
				size={new UDim2(1, 0, 1, 0)}
			/>
		</ReactiveButton>
	);
}
