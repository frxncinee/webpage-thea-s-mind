import React from 'react'
import { m, n, o, p, q }from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: m, title: 'April 12, 2024', description: "This was the day you said yes to me. This will forever be a memorable date for me. I really appreciate your efforts and how you planned it out. Also, I had super fun, kasi lowkey scavenger hunt ^^"},
    { Image: n, title: 'May 29, 2024', description: "Graduating together. I'm glad we got to celebrate one of the most important events in our lives together. I hope to celebrate more things with you in the future, may it be accomplishments or failures."},
    { Image: o, title: 'Novermber 28 & December 22, 2024', description: "Our birth dates. What a privilege it is to be present and celebreate each other's special day. It may be a normal day for you, but I will always make it special as I will be forever thankful for your existence."},
    { Image: p, title: 'December 21, 2024', description: "Another first together. Aside sa first travel mo to see your partner, we tried new things and created new memories. It is also a first to travel back home together and I hope to travel more with you in the future."},
    { Image: q, title: 'January 12, 2024', description: "Our first celeb ng monthsary sa first month of the year. I'm glad to be yours this 2025, and I can't wait to celebrate many more monthsaries with you, until we've lost count."},


  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            - pictures -
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture