import React, { useEffect, useState } from 'react';
import Link from '../components/Link';
import { createAPI, deleteAPI, editAPI, getAllLinks } from '../api/link';

const Admin = () => {

  const [links, setLinks] = useState([]);
  const [name, setName] = useState('');

  const createHandler = (e) => {
    e.preventDefault();
    createAPI(name).then(
      resp => {
        setLinks([...links, resp].sort((a, b) => a.name.localeCompare(b.name)));
      }
    );
    setName('');
  }

  const editHandler = ({ link_uuid, name, allergy, code, gender, link_sent }) => {
    return () => {
      editAPI({ link_uuid, name, allergy, code, gender, link_sent, send_telegram: false }).then(
        ({ link }) => {
          setLinks([...links.filter(item => item.link_uuid !== link.link_uuid), link].sort((a, b) => a.name.localeCompare(b.name)));
        }
      )
    }
  }

  const deleteHandler = (link_uuid) => {
    return () => {
      deleteAPI(link_uuid).then(
        ({ link }) => {
          setLinks(links.filter(item => item.link_uuid !== link.link_uuid).sort((a, b) => a.name.localeCompare(b.name)));
        }
      )
    }
  }

  useEffect(
    () => {
      getAllLinks().then(
        (resp) => setLinks(resp.sort((a, b) => a.name.localeCompare(b.name)))
      )
    }, []
  );

  return (
    <div style={{padding: '10px'}}>
      <form onSubmit={createHandler}>
        <label className="form-label" style={{fontWeight: 'bold'}}>Добавить новый линк</label>
        <div className="input-group mb-3">
          <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Имя линка" aria-describedby="button-addon2" />
          <button disabled={name === ''} className="btn btn-outline-primary" type="submit">Создать</button>
        </div>
      </form>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {
          links.map(
            link => <Link key={link.id} link={link} deleteHandler={deleteHandler} editHandler={editHandler} />
          )
        }
      </div>
    </div>
  )
}

export default Admin