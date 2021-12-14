import React, { useContext } from 'react'
import { SubmitButton } from '../components/SubmitButton'
import { Context } from '../Context'

export default () => {
  const { removeAuth } = useContext(Context)
  return (
    <div>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Logout</SubmitButton>
    </div>
  )
}
