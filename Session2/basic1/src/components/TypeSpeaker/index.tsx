import React from 'react';
import styles from './TypeSpeaker.module.css';

type SpeakerType =  {
    name: string;
    date: string;
    madeby: string;
    img: string;
}

function TypeSpeaker({name,date,madeby,img}:SpeakerType){
    return(
        <div className={styles.typespeaker}>
            <div>
                <img src={`./imgs/${img}.jpg`} alt="img" className={styles.img}/>
            </div>
            <div className={styles.content}>
                <p>Technology</p>
                <h2 className={styles.color}>{name}</h2>
                <span>{date} by </span><span className={styles.color}>{madeby}</span>
            </div>
        </div>
    )
}

export default TypeSpeaker