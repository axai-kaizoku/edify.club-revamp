"use client"

import React, { useEffect, useRef, useState } from "react"
import useMeasure from "react-use-measure"
import { AnimatePresence, motion, MotionConfig } from "motion/react"
import { cn } from "@/lib/utils"
import useClickOutside from "@/hooks/use-outside-click"

const transition = {
  type: "spring",
  bounce: 0.1,
  duration: 0.25,
}

export default function ToolbarExpandable() {
  const [contentRef, { height: heightContent }] = useMeasure()
  const [menuRef, { width: widthContainer }] = useMeasure()
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [maxWidth, setMaxWidth] = useState(0)

  useClickOutside(ref, () => {
    setIsOpen(false)
  })

  useEffect(() => {
    if (!widthContainer || maxWidth > 0) return

    setMaxWidth(widthContainer)
  }, [widthContainer, maxWidth])

  return (
    <MotionConfig transition={transition}>
      <div className="absolute top-8" ref={ref}>
        <div className="h-full w-full rounded-xl border border-zinc-950/10 bg-white">
          <div className="flex space-x-2 p-2" ref={menuRef}>
            <button
              aria-label="User"
              className={cn(
                "relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]",
                isOpen ? "bg-zinc-100 text-zinc-800" : ""
              )}
              type="button"
              onClick={() => {
                if (!isOpen) setIsOpen(true)
                if (isOpen) {
                  setIsOpen(false)
                  return
                }
              }}
            >
              USER
            </button>
          </div>
          <div className="overflow-hidden">
            <AnimatePresence initial={false} mode="sync">
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0 }}
                  animate={{ height: heightContent ?? 0 }}
                  exit={{ height: 0 }}
                  style={{
                    width: "40vw",
                  }}
                >
                  <div ref={contentRef} className="p-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isOpen ? 1 : 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <div
                        className={cn(
                          "px-2 pt-2 text-sm",
                          isOpen ? "block" : "hidden"
                        )}
                      >
                        <div className="flex flex-col space-y-4 w-40">
                          <div className="flex flex-col space-y-1 text-zinc-700">
                            <div className="h-8 w-8 rounded-full bg-linear-to-br from-blue-500 to-blue-400" />
                            <span>Ibelick</span>
                          </div>
                          <button
                            className="relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
                            type="button"
                          >
                            Edit Profile
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  )
}
