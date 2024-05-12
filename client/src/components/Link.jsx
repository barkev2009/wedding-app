import React, { useEffect, useState } from 'react';
import Modal from '../common/Modal';
import { GENDERS } from '../const';

const Link = ({ link, deleteHandler, editHandler }) => {

    const [name, setName] = useState(link.name);
    const [collapsed, setCollapsed] = useState();
    const [active, setActive] = useState(false);
    const [check, setCheck] = useState(link.link_sent);
    const [isOfficial, setIsOfficial] = useState(link.is_official);

    const selectHandler = (e) => {
        editHandler({ link_uuid: link.link_uuid, gender: e.target.value })();
    }
    const checkHandler = () => {
        editHandler({ link_uuid: link.link_uuid, link_sent: !check })();
        setCheck(!check);
    }
    const isOfficialHandler = () => {
        editHandler({ link_uuid: link.link_uuid, is_official: !isOfficial })();
        setIsOfficial(!isOfficial);
    }

    useEffect(
        () => {
            document.querySelector(`#flush-Heading-${link.link_uuid} button`).classList.toggle('collapsed');
            document.getElementById(`flush-collapse-${link.link_uuid}`).classList.toggle('collapse');
        }, [collapsed]
    );

    return (
        <div className='accordion-item' style={{ position: 'relative' }}>
            <button onClick={() => setActive(true)} type="button" className="btn-close" style={{ position: 'absolute', zIndex: 4, left: '10px', top: '15px' }} />
            <h2 onClick={() => setCollapsed(!collapsed)} className="accordion-header" id={'flush-Heading-' + link.link_uuid}>
                <button style={{ paddingLeft: '50px', backgroundColor: check ? 'aquamarine' : 'LightCoral' }} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#flush-collapse-' + link.link_uuid} aria-expanded="false" aria-controls={'flush-collapse-' + link.link_uuid}>
                    {link.name}
                </button>
            </h2>
            <div id={'flush-collapse-' + link.link_uuid} className="accordion-collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" >
                    <div className="card">
                        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <a href={`/${link.link_uuid}`} >{window.location.origin + '/' + link.link_uuid}</a>
                            <div className="form-check form-switch">
                                <input style={{ position: 'absolute', right: '5px' }} className="form-check-input" type="checkbox" checked={check} onChange={checkHandler} disabled={check} />
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="input-group mb-3">
                                    <input type="checkbox" className="btn-check" onChange={isOfficialHandler} checked={isOfficial} id={"btn-check-outlined" + link.link_uuid} autoComplete="off" />
                                    <label className="btn btn-outline-primary" htmlFor={"btn-check-outlined" + link.link_uuid}>Нужна официальная часть</label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Пол</span>
                                    <select className="form-select" onChange={selectHandler}>
                                        {
                                            Object.keys(GENDERS).map(
                                                g => <option selected={g === link.gender} key={g} value={g}>{GENDERS[g].name}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Имя линка</span>
                                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" placeholder="Имя линка" aria-describedby="button-addon2" />
                                    <button disabled={name === link.name} onClick={editHandler({ link_uuid: link.link_uuid, name })} className="btn btn-outline-primary" type="button" id="button-addon2">Сохранить</button>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" >Присутствие</span>
                                    <input value={link.visit_option.value} type="text" className="form-control" disabled />
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Аллергия</span>
                                    <input value={link.allergy} type="text" className="form-control" disabled />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Modal active={active} setActive={setActive}>
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <label className="form-label" style={{ fontWeight: 'bold' }}>Удалить линк?</label>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-danger" onClick={deleteHandler(link.link_uuid)}>Удалить</button>
                        <button type="button" className="btn btn-success" onClick={() => setActive(false)}>Отменить</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Link