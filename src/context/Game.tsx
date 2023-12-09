import React from "react";
import Void from "../classes/Void";
import Pawn from "../classes/Pawn";
import Rook from "../classes/Rook";
import Knight from "../classes/Knight";
import Bishop from "../classes/Bishop";
import Queen from "../classes/Queen";
import King from "../classes/King";

const GameContext = React.createContext<Game | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
	const [board, setBoard] = React.useState<Game["board"]>([]);

	function createInitialBoard() {
		const initialBoard = [];
		for (let r = 0; r < 8; r += 1) {
			const row = [];
			for (let c = 0; c < 8; c += 1) {
				if (r == 0 || r == 7) {
					if (c == 0 || c == 7) {
						if (r == 0) {
							row.push(new Rook(1, [r, c]));
						} else {
							row.push(new Rook(0, [r, c]));
						}
					} else if (c == 1 || c == 6) {
						if (r == 0) {
							row.push(new Knight(1, [r, c]));
						} else {
							row.push(new Knight(0, [r, c]));
						}
					} else if (c == 2 || c == 5) {
						if (r == 0) {
							row.push(new Bishop(1, [r, c]));
						} else {
							row.push(new Bishop(0, [r, c]));
						}
					} else if (c == 3) {
						if (r == 0) {
							row.push(new Queen(1, [r, c]));
						} else {
							row.push(new Queen(0, [r, c]));
						}
					} else if (c == 4) {
						if (r == 0) {
							row.push(new King(1, [r, c]));
						} else {
							row.push(new King(0, [r, c]));
						}
					}
				} else if (r == 1 || r == 6) {
					if (r == 1) {
						row.push(new Pawn(1, [r, c]));
					} else {
						row.push(new Pawn(0, [r, c]));
					}
				} else {
					row.push(new Void([r, c]));
				}
			}
			initialBoard.push(row);
		}
		setBoard(initialBoard);
	}

	React.useEffect(() => {
		createInitialBoard();
	}, []);

	React.useEffect(() => {
		console.log(board);
	}, [board]);

	return <GameContext.Provider value={{ board }}>{children}</GameContext.Provider>;
};

export const useGame = () => React.useContext(GameContext) as Game;
