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

    public changeBallColor(line: number, col: number, newColor: string) {
        this.verifyIfContainedColorInSameLine(line, newColor);
        this.board[line][col] = newColor;
    }

    private verifyIfContainedColorInSameLine(line: number, newColor: string) {
        for(let col = 0; col < this.board[line].length; col++) {
            if (this.board[line][col] === newColor) {
                this.board[line][col] = BallColors.Empty;
            }
        }
    }

    public addNewLine() {
        const newLine: string[] = new Array(4).fill(BallColors.Empty);
        this.board.push(newLine);
    }
}

export default Board;