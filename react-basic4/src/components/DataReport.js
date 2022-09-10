import DataConText from "../data/DataContext";
import { useContext } from "react";
import './item.css'

const DataReport=()=>{
    const {income,expense} = useContext(DataConText)

    return(    
        <div>
            <h4>ยอดคงเหลือ(บาท)</h4>
            <h1>{income-expense}</h1>
            <div>
                <h4>ยอดรายรับ</h4>
                <p className="income">{income}</p>
            </div>
            <div>
                <h4>ยอดรายจ่าย</h4>
                <p className="expense">{expense}</p>
            </div>
        </div>

    );
}

export default DataReport