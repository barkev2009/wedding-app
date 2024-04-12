import React from 'react';
import styles from '../screens/screen.module.css';

const Main = () => {
  return (
    <div className={[styles.screen, styles.green, styles.programme].join(' ')}>
        <h1 className={[styles.white_font, styles.center_text, styles.flex, styles.toggle_br].join(' ')}>
            Григорий <br /> и <br /> Анна
        </h1>
        <div className={[styles.flex_center, styles.mainContainer].join(' ')}>
            <h3 className={[styles.white_font, styles.center_text].join(' ')}>Сейчас Вы находитесь на главной странице нашего крутого сайта для нашей не менее крутой свадьбы!</h3>
            <h3 className={[styles.white_font, styles.center_text].join(' ')}>Если Вы получили личную ссылку-приглашение, просим воспользоваться ей)</h3>
        </div>
    </div>
  )
}

export default Main