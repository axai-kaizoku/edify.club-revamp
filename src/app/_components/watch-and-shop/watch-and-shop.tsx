import { VideoCard } from "./video-card"

const videos = [
  "/media/videos/video-1.mp4",
  "/media/videos/video-2.mp4",
  "/media/videos/video-3.mp4",
  "/media/videos/video-4.mp4",
  "/media/videos/video-1.mp4",
]

export const WatchAndShop = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h3 className="font-orange text-2xl lg:text-4xl mt-5 lg:mt-1 mb-4 lg:mb-11">
        Watch & Shop
      </h3>
      <div className="flex justify-start lg:justify-around gap-4 lg:gap-7 items-center w-full h-full overflow-x-auto px-3">
        {videos.map((vid, i) => (
          <VideoCard key={`${vid}-${i}`} src={vid} />
        ))}
      </div>
    </div>
  )
}
