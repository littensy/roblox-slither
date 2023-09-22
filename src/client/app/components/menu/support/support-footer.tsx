import Roact from "@rbxts/roact";
import { Text } from "client/app/common/text";
import { useRem } from "client/app/hooks";
import { fonts } from "client/app/utils/fonts";
import { palette } from "shared/data/palette";

const colorize = (text: string, color: Color3) => {
	return `<font transparency="0" color="#${color.ToHex()}">${text}</font>`;
};

export function SupportFooter() {
	const rem = useRem();

	return (
		<Text
			richText
			font={fonts.inter.medium}
			text={[
				"Your support helps us build",
				[
					colorize("m", palette.red),
					colorize("a", palette.peach),
					colorize("g", palette.yellow),
					colorize("i", palette.green),
					colorize("c", palette.sapphire),
					colorize("a", palette.blue),
					colorize("l", palette.mauve),
				].join(""),
				'experiences <font transparency="0">✨</font>',
			].join(" ")}
			textColor={palette.text}
			textTransparency={0.5}
			textSize={rem(1.25)}
			textXAlignment="Center"
			textYAlignment="Bottom"
			position={new UDim2(0.5, 0, 1, -rem(3))}
		/>
	);
}
