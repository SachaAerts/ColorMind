import Background from "./Background.tsx";
import {Button} from "@/view/components/ui/button.tsx";
import {Play} from "lucide-react";
import {useNavigate} from "react-router-dom";
import BallsHeader from "@/view/pages/menu/BallsHeader.tsx";

export default function Menu() {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
            <Background />

            <BallsHeader />

            <div className="text-center mb-6 md:mb-10 xl:mb-14">
                <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] font-display font-bold tracking-wider glow-text mb-2 md:mb-4 xl:mb-6">
                    COLOR
                </h1>
                <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] font-display font-bold tracking-wider glow-text-accent">
                    MIND
                </h1>
            </div>

            <p className="text-muted-foreground text-center max-w-xs md:max-w-md xl:max-w-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Trouve le code secret en 10 tentatives ou moins
            </p>

            <Button
                variant="glow"
                size="xl"
                onClick={() => navigate("/game")}
                className="mt-8 md:mt-12 xl:mt-16 animate-pulse-glow md:text-lg md:px-8 md:py-6 xl:text-xl xl:px-10 xl:py-8 2xl:text-2xl 2xl:px-12 2xl:py-10"
            >
                <Play className="w-5 h-5 md:w-6 md:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 mr-2" />
                Jouer
            </Button>

            <div className="mt-12 md:mt-20 xl:mt-24 text-center text-sm md:text-base xl:text-lg 2xl:text-xl text-muted-foreground max-w-xs md:max-w-md xl:max-w-lg space-y-3 md:space-y-4 xl:space-y-5">
                <p className="flex items-center justify-center">
                    <span className="inline-block w-3 h-3 md:w-4 md:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 rounded-full status-white mr-2 md:mr-3 xl:mr-4" />
                    Bonne couleur, bonne position
                </p>
                <p className="flex items-center justify-center">
                    <span className="inline-block w-3 h-3 md:w-4 md:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 rounded-full status-grey mr-2 md:mr-3 xl:mr-4" />
                    Bonne couleur, mauvaise position
                </p>
            </div>
        </main>
    )
}