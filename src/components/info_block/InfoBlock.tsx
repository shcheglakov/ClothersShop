import styles from './InfoBlock.module.scss'

export default function InfoBlock() {
  return (
    <div className={styles.info_block}>
      <div className={styles.info_block_content}>
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button>
          <p>Shop now</p>
        </button>
        <div className={styles.numbers_stats}>
          <div className={styles.item}>
            <h2>200+</h2>
            <p>International Brands</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.item}>
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.item}>
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  )
}
