import Item from "./Item";
import './Head.css'
import { v4 as uuidv4 } from 'uuid'; // เพือ ให้รัน uniq key เพราะ jsx จะต้องมี่ค่าไม่ซํ้า



function Transaction(props){
    const {items} = props

    return ( 
        <div>
            <nav>
                {items.map((element)=>{
                    return <Item {...element} key={uuidv4()} /> //spread operator ทำแทน & Uniqe key

                })}

             </nav>

        </div>
        
    );
}

export default Transaction

