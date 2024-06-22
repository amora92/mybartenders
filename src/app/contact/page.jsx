import Image from 'next/image'
import styles from './contact.module.css'

export const metadata = {
  title: 'Contact Page',
  description: 'Contact description'
}

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/contact.png' alt='' fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form
          action='https://formspree.io/f/xyyoygpk' // Replace with your Formspree endpoint
          method='post'
          className={styles.form}
        >
          <input
            type='text'
            name='name'
            placeholder='Name and Surname'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            required
          />
          <input
            type='tel'
            name='phone'
            placeholder='Phone Number (Optional)'
          />
          <textarea
            name='message'
            cols='30'
            rows='10'
            placeholder='Message'
            required
          ></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
