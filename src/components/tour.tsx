'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const sports = [
  { id: 1, name: 'Football', link: '/football' },
  { id: 2, name: 'Basketball', link: '/basketball' },
  { id: 3, name: 'Cricket', link: '/cricket' },
  { id: 4, name: 'Volleyball', link: '/volleyball' },
  { id: 5, name: 'Table Tennis', link: '/table-tennis' },
  { id: 6, name: 'Badminton', link: '/badminton' },
  { id: 7, name: 'Chess', link: '/chess' },
  { id: 8, name: 'Athletics', link: '/athletics' },
]

const TournamentLayout: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Boys Hostel Tournament</h1>
      
      {/* Video Section */}
      <div className="relative w-full h-0 pb-[56.25%] mb-8 bg-black rounded-lg overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/placeholder-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <span className="bg-white text-black px-4 py-2 rounded-full text-sm md:text-base cursor-pointer">
              Click to play
            </span>
          </div>
        )}
      </div>

      {/* Circular Logos Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
        {sports.map((sport) => (
          <Link key={sport.id} href={sport.link}>
            <div className="flex flex-col items-center group">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden transition-transform group-hover:scale-105 shadow-lg">
                <Image
                  src={`/placeholder.svg?height=160&width=160&text=${sport.name}`}
                  alt={sport.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-80 transition-opacity"
                />
              </div>
              <p className="mt-2 text-center font-medium group-hover:text-blue-600 transition-colors">
                {sport.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TournamentLayout

