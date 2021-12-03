import React, { useEffect, useRef, useState } from 'react'
import { Article, Button, Img, ImgWrapper } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1447684808650-354ae64db5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        console.log('Intersecting')
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='Photo' />
              </ImgWrapper>
            </a>
            <Button>
              <MdFavoriteBorder size='32px' /> {likes} likes
            </Button>
          </>
      }
    </Article>
  )
}
