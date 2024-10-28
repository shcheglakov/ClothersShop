import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.form_footer}>
        <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        <div className={styles.form_uptodate}>
          <div>
            <img src="../src/assets/icons/email.svg" alt="" />
            <input type="text" placeholder='Enter your email address'/>
          </div>
          <button>
            <p>Subscribe to Newsletter</p>
          </button>
        </div>
      </div>
      <div className={styles.main_footer}>
        <div>
          <h2>SHOOP.CO</h2>
          <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
        </div>
        <div>
          <h2>COMPANY</h2>
          <p>About</p>
          <p>Features</p>
          <p>Works</p>
          <p>Career</p>
        </div>
        <div>
          <h2>HELP</h2>
          <p>Customer Support</p>
          <p>Delivery Details</p>
          <p>Terms & Conditions</p>
          <p>Privacy Police</p>
        </div>
        <div>
          <h2>FAQ</h2>
          <p>Account</p>
          <p>Manage Deliveries</p>
          <p>Orders</p>
          <p>Payments</p>
        </div>
        <div>
          <h2>RESOURCES</h2>
          <p>About</p>
          <p>Features</p>
          <p>Works</p>
          <p>Career</p>
        </div>
      </div>
    </footer>
  )
}
