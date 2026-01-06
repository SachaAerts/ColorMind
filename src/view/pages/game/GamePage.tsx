import MysteryBalls from "@/view/pages/game/MysteryBalls.tsx";
import {useState} from "react";
import Board from "@/model/objects/board.ts";
import RoundList from "@/view/pages/game/RoundList.tsx";
import StatusesRounds from "@/model/objects/statusesRounds.ts";
import Controller from "@/view/pages/game/Controller.tsx";
import Game from "@/model/objects/game.ts";

export default function GamePage() {
    const [game, setGame] = useState(new Game());
    const [gameBoard, setGameBoard] = useState<Board>(new Board());
    const [statusesRound, setStatusesRound] = useState<StatusesRounds>(new StatusesRounds());
    const [selectedBall, setSelectedBall] = useState<[number, number] | null>(null);

    const isBallSelected = (i: number, j: number) => {
        if (selectedBall === null) {
            return false;
        }

        return selectedBall[0] === i && selectedBall[1] === j;
    }

    return (
        <main className="min-h-screen flex flex-col items-center px-6 mt-10 gap-5 pb-64">

            <h1 className="text-2xl text-center">Colormind</h1>

            <div>
                <div className="flex justify-between items-center">
                    <div />
                    <span className="mr-3">{game.getActualRound()} / 10</span>
                </div>

                <MysteryBalls />

                <RoundList
                    gameBoard={gameBoard}
                    statusesRounds={statusesRound}
                    actualRound={game.actualRound}
                    isSelected={isBallSelected}
                    setSelectedBall={setSelectedBall}
                />
            </div>

            <Controller
                gameBoard={gameBoard}
                setGameBoard={setGameBoard}
                selectedBall={selectedBall}
                setSelectedBall={setSelectedBall}
                game={game}
                setGame={setGame}
                statusesRounds={statusesRound}
                setStatusesRounds={setStatusesRound}
            />
        </main>
    )
}