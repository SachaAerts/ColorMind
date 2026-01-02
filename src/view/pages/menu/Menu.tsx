import {Link} from "react-router-dom";
import Background from "./Background.tsx";

export default function Menu() {
    return (
        <main className="min-h-screen">
            <Background/>

            <div>
                <span>Color</span>
                <span>Mind</span>
            </div>

            <ul>
                <li>
                    <Link to="/">Start</Link>
                </li>

                <li>
                    <Link to="/">Score</Link>
                </li>
            </ul>
        </main>
    )
}