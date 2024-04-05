import React, { useEffect, useState } from 'react';
import Modal from '../common/Modal';

const Link = ({ link, deleteHandler, editHandler }) => {

    const [name, setName] = useState(link.name);
    const [collapsed, setCollapsed] = useState();
    const [active, setActive] = useState(false);

    useEffect(
        () => {
            document.querySelector(`#flush-Heading-${link.link_uuid} button`).classList.toggle('collapsed');
            document.getElementById(`flush-collapse-${link.link_uuid}`).classList.toggle('collapse');
        }, [collapsed]
    );

    return (
        <div className='accordion-item' style={{ position: 'relative' }}>
            <button onClick={() => setActive(true)} type="button" class="btn-close" style={{ position: 'absolute', zIndex: 4, left: '10px', top: '15px' }} />
            <h2 onClick={() => setCollapsed(!collapsed)} class="accordion-header" id={'flush-Heading-' + link.link_uuid}>
                <button style={{ paddingLeft: '50px' }} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#flush-collapse-' + link.link_uuid} aria-expanded="false" aria-controls={'flush-collapse-' + link.link_uuid}>
                    {link.name}
                </button>
            </h2>
            <div id={'flush-collapse-' + link.link_uuid} class="accordion-collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body" >
                    <div className="card">
                        <div class="card-header">
                            <a href={`/${link.link_uuid}`} >{window.location.origin + '/' + link.link_uuid}</a>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Имя линка</span>
                                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" placeholder="Имя линка" aria-describedby="button-addon2" />
                                    <button disabled={name === link.name} onClick={editHandler({ link_uuid: link.link_uuid, name })} class="btn btn-outline-primary" type="button" id="button-addon2">Сохранить</button>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" >Присутствие</span>
                                    <input value={link.visit_option.value} type="text" className="form-control" disabled />
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Аллергия</span>
                                    <input value={link.allergy} type="text" className="form-control" disabled />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Modal active={active} setActive={setActive}>
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <label class="form-label" style={{ fontWeight: 'bold' }}>Удалить линк?</label>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-danger" onClick={deleteHandler(link.link_uuid)}>Удалить</button>
                        <button type="button" class="btn btn-success" onClick={() => setActive(false)}>Отменить</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Link