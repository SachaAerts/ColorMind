const StatusesColors = {
    ColorEmplacementFound: "status-white",
    ColorFound: "status-grey",
    ColorNotFound: "status-empty",
} as const;

export type StatusesColor = typeof StatusesColors[keyof typeof StatusesColors];
export default StatusesColors;