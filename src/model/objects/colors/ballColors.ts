const BallColors = {
    Red: 'ball-red',
    Blue: 'ball-blue',
    Green: 'ball-green',
    Yellow: 'ball-yellow',
    Orange: 'ball-orange',
    Cyan: 'ball-cyan',
    Empty: 'ball-empty',
} as const;

export type BallColor = typeof BallColors[keyof typeof BallColors];
export default BallColors;

export const PLAYABLE_COLORS = [
    BallColors.Red,
    BallColors.Blue,
    BallColors.Green,
    BallColors.Yellow,
    BallColors.Orange,
    BallColors.Cyan,
];