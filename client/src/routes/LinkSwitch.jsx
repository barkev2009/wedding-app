import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import user from '../store/user';
import { createContext, useEffect, useState } from 'react';
import { useAuthorization } from '../hooks';
import NoData from './NoData';
import Public from './Public';
import { editAPI, getLink } from '../api/link';
import styles from '../screens/screen.module.css';

export const LinkContext = createContext();

const LinkSwitch = observer(
  () => {
    const location = useLocation();
    useAuthorization(user, location);
    const [link, setLink] = useState(null);
    const [loading, setLoading] = useState(true);

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
        getLink(location.pathname).then(
          (resp) => {
            setLink(resp);
            setTimeout(() => setLoading(false), 500);
          }
        )
      }, []
    );

    if (loading) {
      return <div className={[styles.screen, styles.green, styles.flex_center].join(' ')}>
        <h1 className={[styles.white_font, styles.center_text].join(' ')}>Пожалуйста, подождите...</h1>
      </div>
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