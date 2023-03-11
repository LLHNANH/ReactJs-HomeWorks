import React,{ReactNode} from 'react';
import styles from './TypeTelevision.module.css';


type TelevisionType =  {
    nameshop: string;
    nametelevision: string;
    price: number;
    numstar: string;
    img: string;
    icon: ReactNode;
    icon2: ReactNode;
}

function TypeTelevision({nameshop,nametelevision,price,img, icon, icon2, numstar}:TelevisionType){
    return(
        <div className={styles.container1}>
            <div>
                <img src={`./imgs/${img}.jpg`} alt="img" className={styles.ima}/>
            </div>
            <div>
                <p>{nameshop}</p>
                <hr className={styles.hr1}></hr>
                <p className={styles.color1}>{nametelevision}</p>
                <span className={styles.color2}>{icon}{icon}{icon}{icon}</span><span>{icon2}{numstar}</span>
                <p><b>${price}</b></p>
            </div>
        </div>
    )
}

export default TypeTelevision