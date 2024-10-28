import { useQuery } from '@tanstack/react-query'
import styles from './ReviewsList.module.scss'
import { clotherService } from '../../services/clother.service'

export default function ReviewsList() {
    const {data} = useQuery({
        queryKey: ['review list'],
        queryFn: () => clotherService.getReviews()
    })

    return (
        <div className={styles.reviews_list}>
            <h1>OUR HAPPY CUSTOMERS</h1>
            <div className={styles.items_reviews}>
                {data?.map(item => (
                    <div key={item.name} className={styles.item_reviews}>
                        <div>
                            <img src="../src/assets/icons/zvezda.svg" alt="" />
                            <img src="../src/assets/icons/zvezda.svg" alt="" />
                            <img src="../src/assets/icons/zvezda.svg" alt="" />
                            <img src="../src/assets/icons/zvezda.svg" alt="" />
                            <img src="../src/assets/icons/zvezda.svg" alt="" />
                        </div>
                        <h3>{item.name}</h3>
                        <p>{item.review}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
