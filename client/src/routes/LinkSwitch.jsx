import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import user from '../store/user';
import { createContext, useEffect, useState } from 'react';
import { useAuthorization } from '../hooks';
import NoData from './NoData';
import Public from './Public';
import { editAPI, getLink } from '../api/link';
import { getCookie } from '../utils/cookies';
import styles from '../screens/screen.module.css';

export const LinkContext = createContext();

const LinkSwitch = observer(
  () => {
    const location = useLocation();
    useAuthorization(user, location);
    const [link, setLink] = useState(null);
    const [loading, setLoading] = useState(false);
    const editHandler = (visitOption, allergy) => {
      return () => {
        editAPI({ link_uuid: link.link_uuid, code: visitOption.code, allergy }).then(
          (resp) => {
            setLink(resp.link);
          }
        )
      }
    }

    useEffect(
      () => {
        setLoading(true);
        let cookieLink = getCookie('link');
        if (!cookieLink) {
          getLink(location.pathname).then(
            (resp) => {
              setLink(resp);
              setLoading(false);
            }
          )
        } else {
          cookieLink = JSON.parse(cookieLink);
          if (cookieLink.link_uuid === location.pathname.replace('/', '')) {
            setLink(cookieLink);
            setLoading(false);
          } else {
            getLink(location.pathname).then(
              (resp) => {
                setLink(resp);
                setLoading(false);
              }
            )
          }
        }
      }, []
    );

    if (loading) {
      return <div className={[styles.screen, styles.green].join(' ')}></div>
    }
    if (!link) {
      return <NoData />
    }
    return <LinkContext.Provider value={{ editHandler }}>
      <Public link={link} />
    </LinkContext.Provider>
  }
)

export default LinkSwitch