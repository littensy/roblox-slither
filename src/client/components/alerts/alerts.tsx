import React from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { selectAlerts } from "client/store/alert";

import { Alert } from "./alert";

export function Alerts() {
	const alerts = useSelector(selectAlerts);

	return (
		<>
			{alerts.map((alert, index) => (
				<Alert key={alert.id} alert={alert} index={index} />
			))}
		</>
	);
}
