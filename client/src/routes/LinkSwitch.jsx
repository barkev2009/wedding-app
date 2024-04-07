import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import user from '../store/user';
import { createContext, useEffect, useState } from 'react';
import { useAuthorization } from '../hooks';
import NoData from './NoData';
import Public from './Public';
import { editAPI, getLink } from '../api/link';

export const LinkContext = createContext();

const LinkSwitch = observer(
  () => {
    const location = useLocation();
    useAuthorization(user, location);
    const [link, setLink] = useState(null);
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
          }
        )
      }, []
    );

    if (!link) {
      return <NoData />
    }
    return <LinkContext.Provider value={{ editHandler }}>
      <Public link={link} />
    </LinkContext.Provider>
  }
)

export default LinkSwitch