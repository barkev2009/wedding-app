import React, { useContext, useEffect, useState } from 'react';
import styles from './screen.module.css';
import { GENDERS } from '../const';
import { getVisitOptions } from '../api/link';
import VisitOption from '../components/VisitOption';
import { LinkContext } from '../routes/LinkSwitch';
import ym from 'react-yandex-metrika';

const Form = ({ link }) => {

    const [options, setOptions] = useState([]);
    const [allergy, setAllergy] = useState(link.allergy);
    const [name, setName] = useState(link.name);
    const [chosenOption, setChosenOption] = useState(link.visit_option);
    const [activeInfo, setActiveInfo] = useState(false);
    const { editHandler } = useContext(LinkContext);
    const clickHandler = (e) => {
        if (e.target.id.includes('radio-')) {
            const newOption = options.filter(item => item.code === e.target.id.replace('radio-', '').replace('parent-', ''))[0];
            if (newOption.code !== chosenOption.code) {
                ym('reachGoal','change-presence');
                setChosenOption(newOption);
                editHandler({visitOption: newOption})();
            }
        }
    }
    const buttonHanlder = () => {
        if (name !== link.name) {
            ym('reachGoal','change-name');
        }
        if (allergy !== link.allergy) {
            ym('reachGoal','change-allergy');
        }
        setActiveInfo(true);
        editHandler({name, allergy, visitOption: chosenOption})();
        setTimeout(() => setActiveInfo(false), 3000);
    }
    const focusHandler = () => {
        document.querySelector('.publicContainer').classList.toggle('scrollSnap');
    }

    useEffect(
        () => {
            getVisitOptions().then(
                (data) => {
                    setOptions(data);
                }
            );
        }, []
    );

    let confirm, you, inform, your;
    switch (link.gender) {
        case GENDERS.male.code:
            confirm = 'подтверди свое ';
            you = 'тебя';
            your = 'Твои';
            inform = 'Сообщи';
            break;
        case GENDERS.female.code:
            confirm = 'подтверди свое ';
            you = 'тебя';
            your = 'Твои';
            inform = 'Сообщи';
            break;
        default:
            confirm = 'подтвердите ваше ';
            you = 'вас';
            your = 'Ваши';
            inform = 'Сообщите';
            break;
    }

    return (
        <div className={[styles.screen, styles.green, styles.form].join(' ')}>
            <h1 className={[styles.white_font, styles.center_text].join(' ')}>Анкета гостя</h1>
            <div className={styles.flex}>
                <h3 className={[styles.white_font, styles.center_text, styles.confirm].join(' ')}>
                    Пожалуйста, {confirm}
                    присутствие на нашем празднике до 
                    <b> 01.07.2024</b> любым удобным
                    для {you} способом.
                </h3>
                <div className={styles.nameContainer}>
                    <h3 className={[styles.white_font].join(' ')}>Имя Фамилия</h3>
                    <input style={{border: 'none', borderBottom: '1px solid var(--white)'}} onFocus={focusHandler} onBlur={focusHandler} onChange={e => setName(e.target.value)} className={[styles.white_font, styles.green].join(' ')} type='text' value={name} />
                    <div style={{ transition: 'all .4s' }} className={[activeInfo ? styles.white_font : styles.green_font].join(' ')}>{your} данные успешно сохранены!</div>
                </div>
                <div className={styles.toggle_mt}>
                    <h3 className={[styles.white_font].join(' ')}>Присутствие</h3>
                    <div className={styles.optionContainer}>
                        {
                            options.map(
                                o => <VisitOption key={o.code} visitOption={o} chosenOption={chosenOption} clickHandler={clickHandler} />
                            )
                        }
                    </div>
                </div>
                <div className={styles.toggle_mt} style={{display: 'flex', flexDirection: 'column'}}>
                    <h3 className={[styles.white_font].join(' ')}>{inform} нам об аллергии</h3>
                    <input style={{border: 'none', borderBottom: '1px solid var(--white)'}} onFocus={focusHandler} onBlur={focusHandler} onChange={e => setAllergy(e.target.value)} className={[styles.white_font, styles.green].join(' ')} type='text' value={allergy} />
                    <div style={{ transition: 'all .4s' }} className={[activeInfo ? styles.white_font : styles.green_font].join(' ')}>{your} данные успешно сохранены!</div>
                    <button style={{width: '35%', margin: '0 auto', marginTop: '1rem', fontSize: '1.3rem'}} className={[styles.save].join(' ')} onClick={buttonHanlder}>Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default Form