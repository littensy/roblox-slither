import { createRoot } from "@rbxts/react-roblox";
import Roact, { Portal, StrictMode } from "@rbxts/roact";
import { Players } from "@rbxts/services";

import { App } from "./app";
import { RootProvider } from "./providers/root-provider";
import { profileAllComponents } from "./utils/profiler";

const root = createRoot(new Instance("Folder"));
const target = Players.LocalPlayer.WaitForChild("PlayerGui");

profileAllComponents();

root.render(
	<StrictMode>
		<RootProvider>
			<Portal target={target}>
				<App />
			</Portal>
		</RootProvider>
	</StrictMode>,
);
