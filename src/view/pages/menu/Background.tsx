import Ball from "../../components/customs/Ball.tsx";
import Colors from "../../../model/objects/colors.ts";

export default function Background() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 opacity-20 animate-float" style={{ animationDelay: '0s' }}>
                <Ball color={Colors.Red} size="lg" />
            </div>
            <div className="absolute top-40 right-16 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
                <Ball color={Colors.Blue} size="md" />
            </div>
            <div className="absolute bottom-32 left-20 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
                <Ball color={Colors.Green} size="lg" />
            </div>
            <div className="absolute bottom-48 right-10 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
                <Ball color={Colors.Yellow} size="md" />
            </div>
            <div className="absolute top-1/3 left-1/4 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
                <Ball color={Colors.Orange} size="sm" />
            </div>
            <div className="absolute top-1/2 right-1/4 opacity-15 animate-float" style={{ animationDelay: '2.5s' }}>
                <Ball color={Colors.Cyan} size="sm" />
            </div>
        </div>
    )
}