import { useThrottleCallback } from "@rbxts/pretty-react-hooks";
import React from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { PrimaryButton } from "client/components/ui/primary-button";
import { Text } from "client/components/ui/text";
import { fonts } from "client/constants/fonts";
import { useRem, useStore } from "client/hooks";
import { selectWorldSpectating } from "client/store/world";
import { palette } from "shared/constants/palette";
import { cycleNextSnake } from "shared/store/snakes";

export function SpectateButton() {
	const rem = useRem();
	const store = useStore();
	const spectating = useSelector(selectWorldSpectating);

	const onClick = useThrottleCallback(
		() => {
			store.setWorldSpectating(store.getState(cycleNextSnake(spectating)));
		},
		{ wait: 0.5, trailing: false },
	);

	return (
		<PrimaryButton
			onClick={onClick.run}
			overlayGradient={new ColorSequence(palette.text)}
			size={new UDim2(0, rem(4), 0, rem(4))}
		>
			<Text font={fonts.inter.medium} text="🎥" textSize={rem(2)} size={new UDim2(1, 0, 1, 0)} />
		</PrimaryButton>
	);
}
