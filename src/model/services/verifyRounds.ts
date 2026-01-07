import StatusesColors, { type StatusesColor } from "@/model/objects/colors/statusesColors.ts";

class VerifyRounds {
    public static verifyRound(resultRound: string[], colorCode: string[]): StatusesColor[] {
        const statusesActualRound: StatusesColor[] = [];

        for (let i = 0; i < colorCode.length; i++) {
            statusesActualRound.push(this.verifyState(resultRound[i], colorCode, i));
        }

        return this.sortStatuses(statusesActualRound);
    }

    private static verifyState(actualColorInResultRound: string, colorCode: string[], index: number): StatusesColor {
        if (actualColorInResultRound === colorCode[index]) {
            return StatusesColors.ColorEmplacementFound;
        }

        if (colorCode.includes(actualColorInResultRound)) {
            return StatusesColors.ColorFound;
        }

        return StatusesColors.ColorNotFound;
    }

    private static sortStatuses(statuses: StatusesColor[]): StatusesColor[] {
        const priorityOrder: Record<StatusesColor, number> = {
            [StatusesColors.ColorEmplacementFound]: 1,
            [StatusesColors.ColorFound]: 2,
            [StatusesColors.ColorNotFound]: 3,
        };

        return [...statuses].sort((a, b) => priorityOrder[a] - priorityOrder[b]);
    }
}

export default VerifyRounds;