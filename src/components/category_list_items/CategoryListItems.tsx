import { IClothers } from "../../pages/home/types";
import ClothingCart from "../clothing_cart/ClothingCart";
import styles from './CategoryListItems.module.scss';

export default function CategoryListItems({data}:{data: IClothers[]}) {
  return (
    <div className={styles.categoty_list}>
      {data?.map(item => (
        <ClothingCart key={item.name} item={item}/>
      ))}
    </div>
  )
}
