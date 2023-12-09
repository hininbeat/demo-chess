import Piece from "./Piece";

export default class King extends Piece {
	availableMoves: PiecePos[];
	constructor(side: PieceSide, pos: PiecePos) {
		super(5, side, pos);
		this.availableMoves = [];
	}

	select(board: Game["board"]) {}

	move() {
		console.log("King Moved");
	}
}
