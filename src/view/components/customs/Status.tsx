interface StatusProps {
    color: string
}

export default function Status({ color }: StatusProps) {
    return (
        <div className={`w-4 h-4 rounded-full border-black ${color}`} />
    )
}