import { useQuery } from '@tanstack/react-query'
import styles from './ClothingList.module.scss'
import { clotherService } from '../../services/clother.service'
import ClothingCart from '../clothing_cart/ClothingCart'

export default function ClothingList({title}:{title: string}) {
  const {data} = useQuery({
    queryKey: ['email list'],
    queryFn: () => clotherService.getClothers()
  })

  return (
    <div className={styles.clothing_list}>
      <h1>{title}</h1>
      <div className={styles.items_clother}>
        {data?.slice(0, 4).map(item => (
          <ClothingCart key={item.name} item={item}/>
        ))}
      </div>
      <button>
        <p>View All</p>
      </button>
      <div className={styles.underline}></div>
    </div>
  )
}
