import { PLAYABLE_COLORS } from "@/model/objects/colors/ballColors.ts";

class CreateColorCode {
    public static createColorCode(): string[] {
        const colorCode: string[] = [];
        const availableColors: string[] = [...PLAYABLE_COLORS];

        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * availableColors.length);
            colorCode.push(availableColors[randomIndex]);
            availableColors.splice(randomIndex, 1);
        }

        return colorCode;
    }
}

export default CreateColorCode;