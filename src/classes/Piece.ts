export default class Piece {
	type;
	side;
	pos;
	moves;
	constructor(type: PieceType, side: PieceSide, pos: PiecePos) {
		this.type = type;
		this.side = side;
		this.pos = pos;
		this.moves = 0;
	}
}
