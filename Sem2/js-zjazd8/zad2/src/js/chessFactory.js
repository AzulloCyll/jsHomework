const chessFactory = () => {
	class King {
		constructor() {
			this.moves = ["dupa", "dupa2", "dupa3"];
		}
	}

	class Queen {
		constructor() {
			this.moves = ["quww"];
		}
	}

	class Bishop {
		constructor() {
			this.moves = ["lewo", "prawo"];
		}
	}

	class Knight {
		constructor() {
			this.moves = ["kuń1", "kuń2"];
		}
	}

	class Rook {
		constructor() {
			this.moves = ["dupa lewo"];
		}
	}

	return {
		getCheck: (type) => {
			if (type === "king") {
				return new King();
			}
			if (type === "queen") {
				return new Queen();
			}
			if (type === "bishop") {
				return new Bishop();
			}
			if (type === "knight") {
				return new King();
			}
			if (type === "rook") {
				return new Rook();
			}
		},
	};
};

export { chessFactory };