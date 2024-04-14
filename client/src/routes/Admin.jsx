import React, { useEffect, useState } from 'react';
import Link from '../components/Link';
import { createAPI, createManyAPI, deleteAPI, editAPI, getAllLinks } from '../api/link';
import { exportHandler } from '../handlers';
import Modal from '../common/Modal';

const Admin = () => {

  const [links, setLinks] = useState([]);
  const [name, setName] = useState('');
  const [createLinks, setCreateLinks] = useState(false);
  const [newLinks, setNewLinks] = useState('');

  const createHandler = (e) => {
    e.preventDefault();
    createAPI(name).then(
      resp => {
        setLinks([...links, resp].sort((a, b) => a.name.localeCompare(b.name)));
      }
    );
    setName('');
  }

  const createManyHandler = async () => {
    setCreateLinks(false);
    const linkArray = newLinks.split('\n');
    createManyAPI(linkArray).then(
      resp => {
        setLinks(links.concat(resp).sort((a, b) => a.name.localeCompare(b.name)));
      }
    );
    setNewLinks('');
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
    <div style={{ padding: '10px' }}>
      <button className='btn btn-outline-primary mb-3' onClick={() => setCreateLinks(!createLinks)}>Создать несколько линков</button>
      <button className='btn btn-outline-success mb-3' onClick={exportHandler(links)}>Скачать отчет</button>
      <form onSubmit={createHandler}>
        <label className="form-label" style={{ fontWeight: 'bold' }}>Добавить новый линк</label>
        <div className="input-group mb-3">
          <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Имя линка" aria-describedby="button-addon2" />
          <button disabled={name === ''} className="btn btn-outline-primary" type="submit">Создать</button>
        </div>
      </form>
      <div style={{ height: "70vh", overflowY: 'scroll', border: '1px solid #e0e0e0', borderRadius: '10px' }} className="accordion accordion-flush" id="accordionFlushExample">
        {
          links.map(
            link => <Link key={link.id} link={link} deleteHandler={deleteHandler} editHandler={editHandler} />
          )
        }
      </div>
      <Modal active={createLinks} setActive={setCreateLinks}>
        <textarea name="Создать несколько ссылок" id="create_links" style={{ width: '100%', height: '60vh' }} onChange={e => setNewLinks(e.target.value)} value={newLinks}></textarea>
        <div className="btn-group" style={{width: '100%'}} role="group">
          <button type="button" className="btn btn-success" onClick={createManyHandler}>Создать</button>
          <button type="button" className="btn btn-danger" onClick={() => setCreateLinks(false)}>Отменить</button>
        </div>
      </Modal>
    </div>
  )
}

export default Admin