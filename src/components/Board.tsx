import React from "react";
import { useGame } from "../context/Game";
import Piece from "./Piece";

// grid-template-columns: repeat(8, auto);
// grid-template-rows: repeat(8, auto);

const Board = () => {
	const { board } = useGame();

	return (
		<div className="grid grid-cols-8 grid-rows-8 gap-2">
			{board.map((r) => {
				return r.map((c) => <Piece piece={c} />);
			})}
		</div>
	);
};

export default Board;
