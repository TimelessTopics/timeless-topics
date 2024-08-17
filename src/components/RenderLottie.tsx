export function RenderLottie() {
    return (
        <video width="320" height="240" autoPlay muted playsInline loop preload="">
            <source src="/animation.webm" type="video/webm" />
            <span className="animate-pulse">Loading...</span>
        </video>
    )
}