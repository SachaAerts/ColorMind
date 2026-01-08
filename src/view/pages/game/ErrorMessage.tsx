import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/view/components/ui/dialog.tsx";

interface ErrorMessageProps {
    isErrorOpen: boolean;
    setIsErrorOpen: (isErrorOpen: boolean) => void;
}

export default function ErrorMessage({ isErrorOpen, setIsErrorOpen }: ErrorMessageProps) {
    return <>
        <Dialog open={isErrorOpen} onOpenChange={setIsErrorOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Certaines couleurs sont vides</DialogTitle>
                    <DialogDescription>
                        Vous devez poser une couleur dans tout les cases de la ligne.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </>
}