import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/view/components/ui/dialog.tsx";
import { Button } from "@/view/components/ui/button.tsx";
import { useNavigate } from "react-router-dom";
import Ball from "@/view/components/customs/Ball.tsx";
import type Game from "@/model/objects/game.ts";

interface LooseMessageProps {
    isLooseOpen: boolean;
    setIsLooseOpen: (isLooseOpen: boolean) => void;
    game: Game;
}

export default function LooseMessage({ isLooseOpen, setIsLooseOpen, game }: LooseMessageProps) {
    const navigate = useNavigate();

    const handleFinish = () => {
        setIsLooseOpen(false);
        navigate("/");
    };

    return (
        <Dialog open={isLooseOpen} onOpenChange={() => {}}>
            <DialogContent
                showCloseButton={false}
                className="animate-in zoom-in-95 duration-300"
                onPointerDownOutside={(e) => e.preventDefault()}
                onEscapeKeyDown={(e) => e.preventDefault()}
            >
                <DialogHeader>
                    <DialogTitle className="text-3xl text-center text-red-500 animate-pulse">
                        Défaite ! 💔
                    </DialogTitle>
                    <DialogDescription className="text-center text-lg mt-2">
                        Dommage ! Vous n'avez pas trouvé le code secret.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col items-center gap-4 my-6">
                    <p className="text-sm text-muted-foreground">Le code secret était :</p>
                    <div className="flex justify-center items-center gap-3 bg-[#151515] p-4 rounded-2xl border border-border/50">
                        {game.getColorCode().map((color, i) => (
                            <Ball
                                key={i}
                                color={color}
                                size="md"
                            />
                        ))}
                    </div>
                </div>

                <DialogFooter className="flex justify-center sm:justify-center">
                    <Button
                        onClick={handleFinish}
                        className="bg-red-600 hover:bg-red-700 text-white px-8 active:scale-95 transition-transform"
                    >
                        Terminer
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}