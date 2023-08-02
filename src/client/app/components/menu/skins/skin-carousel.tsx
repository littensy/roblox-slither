import { useSelector, useSelectorCreator } from "@rbxts/react-reflex";
import Roact, { useEffect } from "@rbxts/roact";
import { Group } from "client/app/common/group";
import { useRem, useStore } from "client/app/hooks";
import { selectMenuCurrentSkin } from "client/store/menu";
import { LOCAL_USER } from "shared/constants";
import { snakeSkins } from "shared/data/skins";
import { RANDOM_SKIN, selectCurrentPlayerSkin, selectPlayerSkins } from "shared/store/saves";
import { SkinCard } from "./skin-card";
import { DIRECTIONS } from "./utils";

const SKIN_LIST = [RANDOM_SKIN, ...snakeSkins.map((skin) => skin.id)];
const SKIN_LENGTH = SKIN_LIST.size();

export function SkinCarousel() {
	const rem = useRem();
	const store = useStore();

	const skinInventory = useSelectorCreator(selectPlayerSkins, LOCAL_USER) || [];
	const equippedSkin = useSelectorCreator(selectCurrentPlayerSkin, LOCAL_USER) ?? RANDOM_SKIN;
	const currentSkin = useSelector(selectMenuCurrentSkin);

	const currentIndex = SKIN_LIST.indexOf(currentSkin);

	useEffect(() => {
		store.setMenuSkin(equippedSkin);
	}, []);

	return (
		<Group size={new UDim2(1, 0, 1, -rem(3))}>
			{DIRECTIONS.map((direction) => {
				const index = (currentIndex + direction) % SKIN_LENGTH;
				const skin = SKIN_LIST[index] ?? RANDOM_SKIN;

				return (
					<SkinCard
						key={skin}
						id={skin}
						index={direction}
						shuffle={skin === RANDOM_SKIN ? skinInventory : undefined}
						onClick={() => {
							store.setMenuSkin(skin);
						}}
					/>
				);
			})}
		</Group>
	);
}
