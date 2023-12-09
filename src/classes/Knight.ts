import Piece from "./Piece";

export default class Knight extends Piece {
	availableMoves: PiecePos[];
	constructor(side: PieceSide, pos: PiecePos) {
		super(2, side, pos);
		this.availableMoves = [];
	}

	select(board: Game["board"]) {}

	move() {
		console.log("Knight Moved");
	}
}
