import PropTypes from 'prop-types'
import styles from './HomePage.module.css'
import ChooseSide from "@components/HomePage/ChooseSide";

const HomePage = () => {
  return (
    <>
      <h1 className='header__text'>HomePage</h1>
      <ChooseSide/>
    </>
  )
}

HomePage.propTypes = {}

export default HomePage
