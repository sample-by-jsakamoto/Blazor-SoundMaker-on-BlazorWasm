export const playWav = (wavBytes: Uint8Array) => {
    const blob = new Blob([wavBytes], { type: "audio/x-wav" });
    const url = URL.createObjectURL(blob);

    const audio = new Audio(url);
    audio.addEventListener('ended', () => {
        audio.remove();
        URL.revokeObjectURL(url);
    });
    audio.play();
}