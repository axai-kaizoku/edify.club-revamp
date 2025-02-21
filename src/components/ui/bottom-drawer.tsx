"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils";

export interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className: string
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className
}) => {

  const drawerRef = useRef<HTMLDivElement>(null)

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 200 }}
      onDragEnd={(event, info) => {
        if (info.point.y > 600) onClose()
      }}
      className={cn(`fixed bottom-0 left-0 w-full z-50 rounded-t-[30px] pb-2 shadow-2xl shadow-slate-700 
                 max-h-[80vh] overflow-hidden`, className)}

      ref={drawerRef}
    >
      {/* Drag Handle */}
      <div className="flex justify-center pt-4 pb-3">
        <div className="w-10 h-1 bg-[#858585] rounded-full"></div>
      </div>


      {/* Drawer Content - Scrollable */}
      <div className="w-full px-4 pb-4 overflow-y-auto max-h-[calc(80vh-50px)]">

        {title && (
          <p className="text-black text-lg text-center font-gilroySemiBold">
            {title}
          </p>
        )}
        <div className="mt-2">{children}</div>
      </div>
    </motion.div>
  )
}

export default Drawer