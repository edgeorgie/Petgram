import React from 'react'
import { ListOfPhotoCardsContainer } from '../containers/ListOfPhotoCardsContainer'
import { ListOfCategories } from '../components/ListOfCategories'
import { Helmet } from 'react-helmet'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram - A social media for pets</title>
        <meta name='description' content='A social media for pets' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={id} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
