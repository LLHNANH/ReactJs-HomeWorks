import React from 'react';
import {AiOutlineLike} from 'react-icons/ai';
import styles from './ButtonLike.module.css'

const ButtonLike = () => {
  let [like, setLike] = React.useState(false)
  const handleonClick = () => {
    setLike(prev => !prev)
  }
    return (
    <div>
        <button onClick={handleonClick}>{like ? <span className={styles.color}><AiOutlineLike/> Thích</span> : <span><AiOutlineLike/> Thích</span>}</button>
    </div>
  )
}

export default ButtonLike