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
}

export default StatusesRounds;