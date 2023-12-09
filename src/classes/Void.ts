import Piece from "./Piece";

export default class Void extends Piece {
	constructor(pos: PiecePos) {
		super(-1, -1, pos);
	}
}
