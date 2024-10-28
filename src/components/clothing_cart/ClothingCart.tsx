import { IClothers } from '../../pages/home/types'
import styles from './ClothingCart.module.scss'

export default function ClothingCart({item}:{item: IClothers}) {
  return (
    <div key={item.name} className={styles.item_clother}>
      <img src={item.images[0]} alt="" width="295px" height="298px" />
      <h3>{item.name}</h3>
      <div className={styles.rating_block}>
        <div>
          <img src="../src/assets/icons/zvezda.svg" alt="" />
          <img src="../src/assets/icons/zvezda.svg" alt="" />
          <img src="../src/assets/icons/zvezda.svg" alt="" />
          <img src="../src/assets/icons/zvezda.svg" alt="" />
          <img src="../src/assets/icons/zvezda.svg" alt="" />
        </div>
        <p>{item.rating}/5</p>
      </div>
      <p>${item.price}</p>
    </div>
  )
}
