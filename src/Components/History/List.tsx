import s from './history.module.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Item from './Item';
import { selectors } from '../../redux';
import { S } from 'Components/interfases/ICurrentWeather.interface'

export default function List() {
    const state = useSelector(selectors.getHistory)
    const navigate = useNavigate();
    return <div>
        <ul className={s.list}>
                {state.slice(0,10).map((s: S) => 
                    <li key={s.date} onClick={()=>navigate(`/in/${s.name}`)}>
                        <Item state={s}/>
                   </li>
                )}
        </ul>
    </div>
}