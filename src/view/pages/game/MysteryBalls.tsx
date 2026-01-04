import Ball from "@/view/components/customs/Ball.tsx";
import BallColors from "@/model/objects/colors/ballColors.ts";

export default function MysteryBalls() {
    return (
        <div className="flex justify-center items-center gap-3 bg-[#151515] p-4 rounded-2xl border border-border/50">
            {Array.from({length: 4}, (_, i) => (
                <Ball color={BallColors.Empty} size="md" isMysteryBall={true} key={i} />
            ))}
        </div>
    )
}