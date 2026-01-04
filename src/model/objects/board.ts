import BallColors from "@/model/objects/colors/ballColors.ts";

class Board {
    public board: string[][]

    constructor() {
        this.board = this.initializeBoard()
    }

    public getBoard() {
        return this.board;
    }

    private initializeBoard() {
        const firstLine: string[] = new Array(4).fill(BallColors.Empty);
        const board: string[][] = [];
        board.push(firstLine);
        return board;
    }
}

export default Board;