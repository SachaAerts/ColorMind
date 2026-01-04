import MysteryBalls from "@/view/pages/game/MysteryBalls.tsx";
import {useState} from "react";
import Game from "@/model/objects/game.ts";
import type Board from "@/model/objects/board.ts";
import RoundList from "@/view/pages/game/RoundList.tsx";
import type StatusesRounds from "@/model/objects/statusesRounds.ts";

export default function GamePage() {
    const game: Game = new Game();
    const [gameBoard, setGameBoard] = useState<Board>(game.getBoard());
    const [statusesRound, setStatusesRound] = useState<StatusesRounds>(game.getStatusesRound());

    return (
        <main className="min-h-screen flex flex-col items-center px-6 mt-10 gap-5">
            <h1 className="text-2xl text-center">Colormind</h1>

            <div>
                <div className="flex justify-between items-center">
                    <div />
                    <span className="mr-3">{game.getActualRound()} / 10</span>
                </div>

                <MysteryBalls />

                <RoundList gameBoard={gameBoard} statusesRounds={statusesRound} />
            </div>
        </main>
    )
}