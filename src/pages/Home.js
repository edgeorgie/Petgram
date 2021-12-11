import React from 'react'
import { ListOfPhotoCardsContainer } from '../containers/ListOfPhotoCardsContainer'
import { ListOfCategories } from '../components/ListOfCategories'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories /> <ListOfPhotoCardsContainer categoryId={id} />
    </>
  )
}
