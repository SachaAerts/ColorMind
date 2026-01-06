import BallColors from "@/model/objects/colors/ballColors.ts";
import Ball from "@/view/components/customs/Ball.tsx";
import {Button} from "@/view/components/ui/button.tsx";
import {RotateCcw} from "lucide-react";
import {useNavigate} from "react-router-dom";
import type Board from "@/model/objects/board.ts";
import type Game from "@/model/objects/game.ts";
import type StatusesRounds from "@/model/objects/statusesRounds.ts";

interface ControllerProps {
    gameBoard: Board;
    setGameBoard: (gameBoard: Board) => void;
    selectedBall: [number, number] | null;
    setSelectedBall: (ball: [number, number] | null) => void;
    game: Game;
    setGame: (rounds: Game) => void;
    statusesRounds: StatusesRounds;
    setStatusesRounds: (statusesRounds: StatusesRounds) => void;
}

export default function Controller({gameBoard, setGameBoard, selectedBall, setSelectedBall, game, setGame, statusesRounds, setStatusesRounds}: ControllerProps) {
    const navigate = useNavigate();

    const changeBallColor = (selectedBall: [number, number] | null, color: string) => {
        if(selectedBall !== null) {
            gameBoard.changeBallColor(selectedBall[0], selectedBall[1], color);
            setGameBoard(Object.assign(Object.create(Object.getPrototypeOf(gameBoard)), gameBoard));
            setSelectedBall(null)
        }
    }

    const passToNextRound = () => {
        if (game.actualRound == 10) {
            //TODO: Il faudrait ajouter pour faire en sorte de vérifier les points de la manche avant de la skip
            navigate("/");
        } else {
            game.passToNextRound();
            gameBoard.addNewLine();
            statusesRounds.addNewLine();

            setGame(Object.assign(Object.create(Object.getPrototypeOf(game)), game));
            setGameBoard(Object.assign(Object.create(Object.getPrototypeOf(gameBoard)), gameBoard));
            setStatusesRounds(Object.assign(Object.create(Object.getPrototypeOf(statusesRounds)), statusesRounds));
        }
    }

    return (
        <div className="fixed bottom-10 left-0 right-0 flex flex-col items-center gap-7 py-4 px-7 mx-3 border-t bg-[#151515] rounded-2xl border border-border/50">
            <div className="flex justify-center items-center gap-5">
                <Ball color={BallColors.Red} size="md" isInteractive={true} onClick={() => changeBallColor(selectedBall, BallColors.Red)} />
                <Ball color={BallColors.Blue} size="md" isInteractive={true} onClick={() => changeBallColor(selectedBall, BallColors.Blue)} />
                <Ball color={BallColors.Green} size="md" isInteractive={true} onClick={() => changeBallColor(selectedBall, BallColors.Green)} />
                <Ball color={BallColors.Yellow} size="md" isInteractive={true} onClick={() => changeBallColor(selectedBall, BallColors.Yellow)} />
                <Ball color={BallColors.Orange} size="md" isInteractive={true} onClick={() => changeBallColor(selectedBall, BallColors.Orange)} />
                <Ball color={BallColors.Cyan} size="md" isInteractive={true} onClick={() => changeBallColor(selectedBall, BallColors.Cyan)} />
            </div>

            <div className="flex justify-center items-center gap-3">
                <Button
                    className="bg-white hover:bg-white/90 text-black h-10 w-10 p-0 active:scale-95 transition-transform"
                >
                    <RotateCcw />
                </Button>
                <Button
                    className="bg-red-600 hover:bg-red-700 text-white h-10 px-6 active:scale-95 transition-transform"
                    onClick={() => navigate("/")}
                >
                    Abandonner
                </Button>
                <Button
                    className="bg-green-600 hover:bg-green-700 text-white h-10 px-6 active:scale-95 transition-transform"
                    onClick={() => passToNextRound()}
                >
                    Valider
                </Button>
            </div>
        </div>
    )
}