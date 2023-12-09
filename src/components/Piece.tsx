import React from "react";

const Piece = ({ piece }: { piece: Piece }) => {
	return (
		<div className="w-24 h-24 bg-gray-100 rounded">
			<h1>{piece.type}</h1>
			<h2>{piece.side}</h2>
		</div>
	);
};

export default Piece;
