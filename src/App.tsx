import React from "react";
import Board from "./components/Board";

import { GameProvider } from "./context/Game";

function App() {
	React.useEffect(() => {
		console.log("Component Mounted");
	});

	return (
		<GameProvider>
			<div className="w-screen h-screen grid content-center justify-center bg-zinc-800">
				<Board />
			</div>
		</GameProvider>
	);
}

export default App;
