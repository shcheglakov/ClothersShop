import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>SHOP.CO</h1>
      </Link>
      <ul>
        <li>
          <Link to="/category">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/">
            On Sale
          </Link>
        </li>
        <li>
          <Link to="/">
            New Arrivals
          </Link>
        </li>
        <li>
          <Link to="/">
            Brands
          </Link>
        </li>
      </ul>
      <div className={styles.search_input}>
        <img src="./src/assets/icons/search.svg" alt="Search" width='21px' height='21px'/>
        <input type="text" placeholder='Search for products...'/>
      </div>
      <div className={styles.buttons_block}>
        <img src="./src/assets/icons/basket.svg" alt="" width='30px' height='30px' />
        <img src="./src/assets/icons/profile.svg" alt="" width='30px' height='30px' />
      </div>
    </header>
  )
}
