export const VideoCard = ({ src }: { src: string }) => {
  return (
    <video
      width="240"
      height="240"
      controls
      autoPlay
      muted
      loop
      preload="none"
      className="rounded-lg object-contain"
      aria-label="Layers"
    >
      <source src={src} type="video/mp4" />
      <track
        src="/media/videos/captions_en.vtt"
        kind="captions"
        srcLang="en"
        label="english_captions"
        default
      />
      Your browser does not support the video tag.
    </video>
  )
}
