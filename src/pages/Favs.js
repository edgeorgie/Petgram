import React from 'react'
import { FavsWithQuery } from '../containers/GetFavorities'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout title='Those are your favs' subtitle='Take a look to those pets! Are your favs.'>
      <FavsWithQuery />
    </Layout>
  )
}
