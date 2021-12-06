import React from 'react'
// Components
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = ({ data }) => {
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
