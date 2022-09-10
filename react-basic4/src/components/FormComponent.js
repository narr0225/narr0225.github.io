import { useState,useEffect} from 'react'
import './Head.css'
import { v4 as uuidv4 } from 'uuid';


const FormCompo =(props) =>{ // props รับค่ามาจากอีก component
    console.log("render formcomponent")
    const[title,setTitle] = useState('') // ค่าเริ่มต้น UseState
    const[amount,setAmount] = useState(0)
    const [formValid,SetFormValid] = useState(false) 

    const inputTitle=(event)=>{
        setTitle(event.target.value) //เอา funtion ก็บใน useState
        console.log(event.target.value)
    }
    const inputAmount=(event)=>{
        setAmount(event.target.value)
        console.log(event.target.value) // targrt สิ่งที่พิมพ์
    }
    const saveItem=(event)=>{
        event.preventDefault() //ไม่ให้หน้ารีเฟรช
        const itemData ={
            id:uuidv4(),
            title:title,
            amount:Number(amount), // กำหนดค่าให้เป็น Number
        }
        props.onAddItem(itemData) //เอาค่าจาก item ไปส่งอีก component
        console.log(itemData) //โชว์ให้ดูว่าทั้ง 2 ข้อมมูลมารวมกัน 
        setTitle('') // clear useState เป็นค่าว่าง 
        setAmount('') // clear useState เป็นค่าว่าง 
        // console.log("บันทึกข้อมูล")
    }

    useEffect(()=>{
      const checkData = title.trim().length>0 && amount!==0
        SetFormValid(checkData)

    },[amount,title])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange= {inputTitle} value={title}></input> {/*clear useState เป็นค่าว่าง */}
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="Number" placeholder="ระบุจำนวนเงิน" onChange= {inputAmount} value={amount}></input>
                </div>
                <div>
                    <button className="btn" type="submit" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>


        </div>
    )
}

export default FormCompo