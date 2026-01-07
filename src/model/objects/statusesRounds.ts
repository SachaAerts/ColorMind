import StatusesColors from "@/model/objects/colors/statusesColors.ts";

class StatusesRounds {
    public statusesRounds: string[][];

    constructor() {
        this.statusesRounds = this.initializeStatusesRounds();
    }

    public getStatusesRounds() {
        return this.statusesRounds;
    }

    public getStatusesRoundsLine(i: number) {
        return this.statusesRounds[i];
    }

    private initializeStatusesRounds() {
        const firstLine: string[] = new Array(4).fill(StatusesColors.ColorNotFound);
        const statusesRounds: string[][] = [];
        statusesRounds.push(firstLine);
        return statusesRounds;
    }

    public addNewLine() {
        const newLine: string[] = new Array(4).fill(StatusesColors.ColorNotFound);
        this.statusesRounds.push(newLine);
    }

    public setRoundResult(resultRound: string[]) {
        for (let i = 0; i < resultRound.length; i++) {
            this.statusesRounds[this.statusesRounds.length - 1][i] = resultRound[i];
        }
    }

    public clone(): StatusesRounds {
        const clonedStatusesRounds = Object.create(StatusesRounds.prototype);
        clonedStatusesRounds.statusesRounds = this.statusesRounds.map(line => [...line]);
        return clonedStatusesRounds;
    }
}

export default StatusesRounds;