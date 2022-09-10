import './Head.css'
import './item.css'
import PropTypes, { symbol } from 'prop-types'; // ให้ props ตรงกันกับที่กำหนด
import DataConText from '../data/DataContext';
import { useContext } from 'react';


const Item =(props)=> { //Props Destructuring

    const {title,amount} = props // เขียนแบบนี้ จะได้ไม่ต้องแทนค่า props.title
    const status = amount<0 ? "expense":"income" 
    const symbol = amount<0 ? "-":"+"
    const {income,expense} = useContext(DataConText) // เรียก object หลายตัวมาลงใน component

    
    return (<ul>
        
        <li className={status}>
            {title} {status}
                <span>{symbol}{Math.abs(amount)}  {income}{expense}

                </span>
        </li>


    </ul>);
}

Item.propTypes={               //ให้ prop ตรงกัน
    title:PropTypes.string,
    amount:PropTypes.string

}

export default Item

