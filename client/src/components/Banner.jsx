import React, { useState } from 'react'
import { X, Info } from 'lucide-react'

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-[#1a4d3a] border-b border-[#2d5a47] px-4 py-2 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center relative">
          <div className="flex items-center gap-2 text-center">
            <Info className="w-4 h-4 text-green-300 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-green-50">
              <span className="font-semibold">Disclaimer:</span> This is a RE-MAKE-UP project for educational and personal portfolio purposes only. 
              <span className="hidden sm:inline"> This is not the official PhilHealth website.</span>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-0 text-green-300 hover:text-green-100 transition-colors duration-200 flex-shrink-0"
            aria-label="Close disclaimer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}