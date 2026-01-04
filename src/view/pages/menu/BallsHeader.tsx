import Ball from "@/view/components/customs/Ball.tsx";
import BallColors from "@/model/objects/colors/ballColors.ts";

export default function BallsHeader() {
    return (
        <div className="flex gap-3 mb-4">
            <div
                key={BallColors.Red}
                className="animate-bounce-subtle"
                style={{ animationDelay: `${0}s` }}
            >
                <Ball color={BallColors.Red} size="md" />
            </div>

            <div
                key={BallColors.Blue}
                className="animate-bounce-subtle"
                style={{ animationDelay: `${0.15}s` }}
            >
                <Ball color={BallColors.Blue} size="md" />
            </div>

            <div
                key={BallColors.Green}
                className="animate-bounce-subtle"
                style={{ animationDelay: `${2 * 0.15}s` }}
            >
                <Ball color={BallColors.Green} size="md" />
            </div>

            <div
                key={BallColors.Yellow}
                className="animate-bounce-subtle"
                style={{ animationDelay: `${3 * 0.15}s` }}
            >
                <Ball color={BallColors.Yellow} size="md" />
            </div>

            <div
                key={BallColors.Orange}
                className="animate-bounce-subtle"
                style={{ animationDelay: `${4 * 0.15}s` }}
            >
                <Ball color={BallColors.Orange} size="md" />
            </div>

            <div
                key={BallColors.Cyan}
                className="animate-bounce-subtle"
                style={{ animationDelay: `${5 * 0.15}s` }}
            >
                <Ball color={BallColors.Cyan} size="md" />
            </div>
        </div>
    )
}