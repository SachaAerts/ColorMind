const Colors = {
    Red: 'ball-red',
    Blue: 'ball-blue',
    Green: 'ball-green',
    Yellow: 'ball-yellow',
    Orange: 'ball-orange',
    Cyan: 'ball-cyan',
    Empty: 'ball-empty',
} as const;

export type Color = typeof Colors[keyof typeof Colors];
export default Colors;