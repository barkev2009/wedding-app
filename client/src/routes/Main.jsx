import React, { useEffect, useState } from 'react';
import styles from '../screens/screen.module.css';
import { getCookie, setCookie } from '../utils/cookies';
import { useLocation, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE } from '../const';

const Main = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [linkUUID, setLinkUUID] = useState(getCookie('ga-wed-link_uuid') || '');
  const [link, setLink] = useState(linkUUID ? location.pathname + linkUUID : null);
  const [error, setError] = useState(link ? true : false);
  useEffect(
    () => {
      setError(link === null ? true : false);
    }, [link]
  );

  const submitHandler = (e) => {
    e.preventDefault();
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    const check = uuidRegex.test(linkUUID);
    if (check || linkUUID === '') {
      setCookie('ga-wed-link_uuid', linkUUID);
      if (linkUUID !== '') {
        setLink(location.pathname + linkUUID);
        setError(false);
      } else {
        setError(true);
        setLink(null);
      }
    } else {
      if (linkUUID === 'auth') {
        navigate(ADMIN_ROUTE);
      }
      setLinkUUID(getCookie('ga-wed-link_uuid') || '');
      const err = document.getElementById('error');
      if (err) {
        err.style.color = 'var(--white)';
        setTimeout(() => err.style.color = 'var(--green)', 3000);
      }
    }
  }

  return (
    <div className={[styles.screen, styles.green, styles.programme].join(' ')}>
      <h1 className={[styles.white_font, styles.center_text, styles.flex, styles.toggle_br].join(' ')}>
        Григорий <br /> и <br /> Анна
      </h1>
      <div className={[styles.flex_center, styles.mainContainer].join(' ')}>
        <div style={{ flex: '1 1 0' }}>
          <h3 style={{ flex: '1 1 0' }} className={[styles.white_font, styles.center_text].join(' ')}>Сейчас Вы находитесь на главной странице нашего крутого сайта для нашей не менее крутой свадьбы!</h3>
          <h3 style={{ flex: '1 1 0', marginTop: '1rem' }} className={[styles.white_font, styles.center_text].join(' ')}>Если Вы получили личную ссылку-приглашение, просим воспользоваться ей)</h3>
        </div>
        <form onSubmit={submitHandler} style={{ flex: '1 1 0', marginTop: '1rem' }}>
          <label style={{ fontSize: '1.3rem', lineHeight: '1.5rem', marginBottom: '1rem' }} htmlFor="#link_uuid" className={[styles.white_font].join(' ')}>Введите ваш личный код для получения ссылки-приглашения</label>
          <div style={{ position: 'relative' }}>
            <input value={linkUUID} onChange={e => setLinkUUID(e.target.value)} style={{ width: '68%' }} className={styles.form} placeholder='Код ссылки' id='link_uuid' type="text" />
            <button type='submit' style={{ width: '30%', float: 'right' }} className={styles.save}>Сохранить</button>
          </div>
          {error && <h3 id='error' style={{ fontSize: '1rem', color: 'var(--green)', transition: 'all .3s' }}>Код должен соответствовать структуре UUID</h3>}
          {link && <a style={{ color: 'var(--white)' }} href={link}>Ваша сгенерированная ссылка</a>}
        </form>
      </div>
    </div>
  )
}

export default Main