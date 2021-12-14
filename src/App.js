import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'

import { Home } from './pages/Home'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

const User = React.lazy(() => import('./pages/User'))
const Favs = React.lazy(() => import('./pages/Favs'))
const Detail = React.lazy(() => import('./pages/Detail'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<h1>Suspense. Loading...</h1>}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      <Navbar />
    </Suspense>
  )
}
