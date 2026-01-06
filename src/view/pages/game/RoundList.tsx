import type Board from "@/model/objects/board.ts";
import Ball from "@/view/components/customs/Ball.tsx";
import StatusesRounds from "@/model/objects/statusesRounds.ts";
import Status from "@/view/components/customs/Status.tsx";

interface RoundListProps {
    gameBoard: Board
    statusesRounds: StatusesRounds
    actualRound: number
    isSelected: (i: number, j: number) => boolean,
    setSelectedBall: (ball: [number, number] | null) => void
}

export default function RoundList({gameBoard, statusesRounds, actualRound, isSelected, setSelectedBall}: RoundListProps) {
    const selectBall = (i: number, j: number) => {
        setSelectedBall([i, j]);
    }

    return <>
        <div className="flex flex-col justify-center items-center gap-3 mt-5">
            {gameBoard.getBoard().map((row, i) => (
                <div key={i} className="flex justify-center items-center gap-10 bg-[#151515] p-4 rounded-2xl border border-border/50">
                    <div className="flex justify-center items-center gap-1">
                        {statusesRounds.getStatusesRoundsLine(i).map((status, k) => (
                            <Status key={k} color={status} />
                        ))}
                    </div>

                    <div className="flex justify-center items-center gap-3">
                        {row.map((ball, j) =>
                            i === actualRound - 1 ? (
                                <Ball
                                    color={ball}
                                    size="md"
                                    key={j}
                                    isInteractive={true}
                                    isSelected={isSelected(i, j)}
                                    onClick={() => selectBall(i, j)}
                                />
                            ) : (
                                <Ball
                                    color={ball}
                                    size="md"
                                    key={j}
                                />
                            )
                        )}
                    </div>
                </div>
            ))}
        </div>
    </>
}