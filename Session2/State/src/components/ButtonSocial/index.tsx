import React,{ReactNode} from 'react';
import styles from "./ButtonSocial.module.css";

type Buttontype = {
    brand: string;
    icon: ReactNode;
  }
  
  function ButtonSocial({brand, icon}: Buttontype){
    return(
      <div className={styles.button_social}>
        <span>{icon}</span>
        <span> Continute with {brand}</span>
      </div>
    )
  }

  export default ButtonSocial