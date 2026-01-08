import BallColors from "@/model/objects/colors/ballColors.ts";
import Ball from "@/view/components/customs/Ball.tsx";
import {Button} from "@/view/components/ui/button.tsx";
import {RotateCcw} from "lucide-react";
import {useNavigate} from "react-router-dom";
import type Board from "@/model/objects/board.ts";
import type Game from "@/model/objects/game.ts";
import type StatusesRounds from "@/model/objects/statusesRounds.ts";
import {useState} from "react";
import ErrorMessage from "@/view/pages/game/ErrorMessage.tsx";
import VictoryMessage from "@/view/pages/game/VictoryMessage.tsx";
import LooseMessage from "@/view/pages/game/LooseMessage.tsx";

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
    const [isErrorOpen, setIsErrorOpen] = useState(false);
    const [isVictoryOpen, setIsVictoryOpen] = useState(false);
    const [isLooseOpen, setIsLooseOpen] = useState(false);

    const changeBallColor = (selectedBall: [number, number] | null, color: string) => {
        if(selectedBall !== null) {
            gameBoard.changeBallColor(selectedBall[0], selectedBall[1], color);
            setGameBoard(gameBoard.clone());
            setSelectedBall(null)
        }
    }

    const resetLine = () => {
        gameBoard.resetLastLine()
        setGameBoard(gameBoard.clone());
    }

    const passToNextRound = () => {
        if (game.isAllBallSelected(gameBoard.getLastLine())) {
            setIsErrorOpen(true);
        } else {
            //Verify actual round
            const statusesRound = game.finishRound(gameBoard.getLastLine());
            statusesRounds.setRoundResult(statusesRound);

            //Verify if game is win
            if (game.isWin(gameBoard.getLastLine())) {
                setIsVictoryOpen(true);
            } else {
                if (game.actualRound == 10) {
                    setIsLooseOpen(true);
                }

                //Pass to next round
                game.passToNextRound();
                gameBoard.addNewLine();
                statusesRounds.addNewLine();

                //Set game's data
                setGame(game.clone());
                setGameBoard(gameBoard.clone());
                setStatusesRounds(statusesRounds.clone());
            }
        }
    }

    return (
        <>
            <ErrorMessage isErrorOpen={isErrorOpen} setIsErrorOpen={setIsErrorOpen} />
            <VictoryMessage isVictoryOpen={isVictoryOpen} setIsVictoryOpen={setIsVictoryOpen} game={game} />
            <LooseMessage isLooseOpen={isLooseOpen} setIsLooseOpen={setIsLooseOpen} game={game} />

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
                        onClick={() => resetLine()}
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
        </>
    )
}