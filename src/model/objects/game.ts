import CreateColorCode from "@/model/services/createColorCode.ts";
import VerifyRounds from "@/model/services/verifyRounds.ts";

class Game {
    public actualRound: number;

    public colorCode: string[];

    constructor() {
        this.actualRound = 1;
        this.colorCode = CreateColorCode.createColorCode();
    }

    public getActualRound() {
        return this.actualRound;
    }

    public getColorCode() {
        return this.colorCode;
    }

    public passToNextRound() {
        this.actualRound += 1;
    }

    public finishRound(resultRound: string[]) {
        return VerifyRounds.verifyRound(resultRound, this.colorCode);
    }

    public clone(): Game {
        const clonedGame = Object.create(Game.prototype);
        clonedGame.actualRound = this.actualRound;
        clonedGame.colorCode = [...this.colorCode];
        return clonedGame;
    }
}

export default Game;