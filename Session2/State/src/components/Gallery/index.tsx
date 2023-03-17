import React from 'react';
import styles from './Gallery.module.css';
import {SlArrowLeft,SlArrowRight} from 'react-icons/sl';

const Gallery = () => {
    let [currentGallery,setCurrentGallery] = React.useState(0)
    const thumbnails = [0,1,2];
  return (
    <div className={styles.container}>
        <div className={styles.container1}>
            <span className={styles.vetical +' '+ styles.right} onClick={()=>{
                setCurrentGallery((prev)=>{
                    if(currentGallery < 1){
                        return 2
                    }
                    return prev - 1
                });


            }}><SlArrowLeft/></span>
            <img className={styles.vetical} src={`./imgs/${currentGallery}.webp`} />
            <span className={styles.vetical  +' '+ styles.left} onClick={()=>{
                setCurrentGallery((prev)=>{
                    if(currentGallery > 1){
                        return 0
                    }
                    return prev + 1
                });


            }}><SlArrowRight/></span>
        </div>
        <div>
            {thumbnails.map((gal,index)=>{
                return (
                    <span onClick={()=>{
                        setCurrentGallery(gal);
                        console.log(index,currentGallery);
                    }} key={index}>
                        {index != currentGallery ?<img className={styles.thumbnails} src={`./imgs/${gal}.webp`} />:<img className={styles.thumbnailsblue} src={`./imgs/${gal}.webp`} />}
                         </span>
                )
            })}
        </div>
    </div>
  )
}

export default Gallery