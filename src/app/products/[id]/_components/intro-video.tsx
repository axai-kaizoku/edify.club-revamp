"use client"
import React from "react"

function IntroVideo() {
  return (
    <div className="flex justify-center items-center sm:min-h-screen ">
      <video autoPlay loop muted src="/intro_video.mp4" />
    </div>
  )
}

export default IntroVideo
