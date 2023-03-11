import React from 'react'
import styles from './TypeClothes.module.css'

type ClothesType =  {
    name: string;
    category: string;
    receptacle: string;
    fashion: string;
    sex: string;
    img: string
}

function TypeClothes({name,category,receptacle,fashion,sex, img}:ClothesType){
    return(
        <div className={styles.typeclothes}>
            <div>
                <img src={`./imgs/${img}.jpg`} alt="img" className={styles.img}/>
            </div>
            <div className={styles.typeclothesright}>
                <h2 className={styles.color}>{name}</h2>
                <p>{category}</p>
                <p>{receptacle}</p>
                <p>{fashion}</p>
                <p>{sex}</p>
            </div>
        </div>
    )
}

export default TypeClothes