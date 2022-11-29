import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material'
import { useEffect, useRef, useState } from 'react'
import ListItem from '../listItem'
import './list.scss'

const List = () => {
  const [isMoved, setIsMoved] = useState(false)
  const [sliderNumber, setSliderNumber] = useState(0)

  const listRef = useRef()

  useEffect(() => {
    if (sliderNumber === 0) {
      setIsMoved(false)
    }
  }, [sliderNumber])

  const clickHandler = direction => {
    setIsMoved(true)
    const distance = listRef.current.getBoundingClientRect().x - 50
    if (direction === 'left' && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1)
      listRef.current.style.transform = `translateX(${distance + 230}px)`
    }
    if (direction === 'right' && sliderNumber < 5) {
      setSliderNumber(sliderNumber + 1)
      listRef.current.style.transform = `translateX(${distance + -230}px)`
    }
  }

  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch</span>
      <div className='wrapper'>
        {isMoved ? (
          <ArrowBackIosOutlined
            className='sliderArrow left'
            onClick={() => clickHandler('left')}
          />
        ) : null}
        <div className='container' ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          className='sliderArrow right'
          onClick={() => clickHandler('right')}
        />
      </div>
    </div>
  )
}

export default List
