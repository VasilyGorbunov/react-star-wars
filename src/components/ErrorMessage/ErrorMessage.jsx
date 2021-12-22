import PropTypes from 'prop-types';

import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
      <>
      <p className={styles.text}>
        The dark side of the force has won.<br/>
        We cannot display data.<br/>
        Come back when we fix everything.
      </p>
      </>
  )
}

ErrorMessage.propTypes = {
    // test: PropTypes.string,
}

export default ErrorMessage;