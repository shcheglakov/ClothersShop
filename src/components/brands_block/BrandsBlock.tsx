import styles from './Brandsblock.module.scss'

export default function BrandsBlock() {
  // const {links} = [
  //   '../src/assets/images/versace.svg',
  //   '../src/assets/images/zara.svg',
  //   '../src/assets/images/gucci.svg',
  //   '../src/assets/images/prada.svg',
  //   '../src/assets/images/calvin_klein.svg'
  // ]
  return (
    <div className={styles.brands_block}>
      <img src="../src/assets/images/versace.svg" alt="" />
      <img src="../src/assets/images/zara.svg" alt="" />
      <img src="../src/assets/images/gucci.svg" alt="" />
      <img src="../src/assets/images/prada.svg" alt="" />
      <img src="../src/assets/images/calvin_klein.svg" alt="" />
    </div>
  )
}
