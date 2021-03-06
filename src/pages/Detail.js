import React from 'react'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export default ({ detailId }) => (
  <Layout title={`Photography ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
