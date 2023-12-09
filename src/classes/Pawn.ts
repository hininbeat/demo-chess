import Piece from "./Piece";

export default class Pawn extends Piece {
	availableMoves: PiecePos[];
	constructor(side: PieceSide, pos: PiecePos) {
		super(0, side, pos);
		this.availableMoves = [];
	}

	select(board: Game["board"]) {}

	move() {
		console.log("Pawn Moved");
	}
}
