import {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import icon from "./img/bookmark.svg"

import styles from './Favorite.module.css';

const Favorite = () => {
  const [count, setCount] = useState(0);
  const storeData = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeData).length;
    length.toString().length > 2 ? setCount("...") : setCount(length);
    setCount(length);
  });

  return (
    <div className={styles.container}>
        <Link to='/favorites'>
          <span className={styles.counter}>{count}</span>
          <img src={icon} alt="Favorites" className={styles.icon}/>
        </Link>
    </div>
  )
}

Favorite.propTypes = {
  prop: PropTypes.string
}

export default Favorite
