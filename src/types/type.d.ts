type PieceType = -1 | 0 | 1 | 2 | 3 | 4 | 5;
type PieceSide = -1 | 0 | 1;
type PiecePos = [number, number];

interface Piece {
	type: PieceType;
	side: PieceSide;
	pos: PiecePos;
	moves: number;
}

interface Game {
	board: Array<Piece[]>;
}
