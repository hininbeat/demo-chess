import Piece from "./Piece";

export default class Rook extends Piece {
	availableMoves: PiecePos[];
	constructor(side: PieceSide, pos: PiecePos) {
		super(1, side, pos);
		this.availableMoves = [];
	}

	select(board: Game["board"]) {}

	move() {
		console.log("Rook Moved");
	}
}
