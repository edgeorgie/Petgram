import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Error, Form, Input, Button, Title } from './style'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='email' {...email} />
        <Input disabled={disabled} type='password' placeholder='password' {...password} />
        <Button>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
