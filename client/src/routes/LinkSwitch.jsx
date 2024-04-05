import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import user from '../store/user';
import { useEffect, useState } from 'react';
import { useAuthorization } from '../hooks';
import NoData from './NoData';
import Public from './Public';
import { getLink } from '../api/link';

const LinkSwitch = observer(
  () => {
    const location = useLocation();
    useAuthorization(user, location);
    const [link, setLink] = useState(null);

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
    return <Public link={link} />
  }
)

export default LinkSwitch