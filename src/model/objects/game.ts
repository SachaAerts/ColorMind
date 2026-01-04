import Board from "@/model/objects/board.ts";
import StatusesRounds from "@/model/objects/statusesRounds.ts";

class Game {
    public board: Board;
    public actualRound: number;
    public statusesRound: StatusesRounds;

    constructor() {
        this.board = new Board();
        this.actualRound = 1;
        this.statusesRound = new StatusesRounds();
    }

    public getBoard() {
        return this.board;
    }

    public getActualRound() {
        return this.actualRound;
    }

    public getStatusesRound() {
        return this.statusesRound;
    }
}

export default Game;