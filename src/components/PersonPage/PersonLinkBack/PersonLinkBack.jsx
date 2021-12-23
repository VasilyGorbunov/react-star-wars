import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import iconBack from './img/back.svg'
import styles from './PersonLinkBack.module.css'

const PersonLinkBack = () => {
  const history = useHistory()
  const handleGoBack = (e) => {
    e.preventDefault()
    history.goBack()
  }
  return (
    <a href='#' onClick={handleGoBack} className={styles.link}>
      <img src={iconBack} className={styles.link__img} alt='Go Back' />
      <span>Go Back</span>
    </a>
  )
}

PersonLinkBack.propTypes = {}

export default PersonLinkBack
