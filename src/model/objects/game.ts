class Game {
    public actualRound: number;

    constructor() {
        this.actualRound = 1;
    }

    public getActualRound() {
        return this.actualRound;
    }

    public passToNextRound() {
        this.actualRound += 1;
    }
}

export default Game;