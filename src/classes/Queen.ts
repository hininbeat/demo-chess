import Piece from "./Piece";

export default class Queen extends Piece {
	availableMoves: PiecePos[];
	constructor(side: PieceSide, pos: PiecePos) {
		super(4, side, pos);
		this.availableMoves = [];
	}

	select(board: Game["board"]) {}

	move() {
		console.log("Queen Moved");
	}
}
