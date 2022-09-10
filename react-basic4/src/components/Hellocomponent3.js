import './Head.css'
import FormCompo from "./FormComponent";
import Transaction from "./Transaction";
import { useState,useEffect, } from "react";// usereducer
import DataConText from "../data/DataContext"; // เรียกใช้ Datacontext  หรือข้อมูลกลาง
import DataReport from "./DataReport";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";



const Title = ()=> <h1 id="Head">โปรแกรมยัญชี รายยรับรายจ่าย</h1>
const Description =()=> <p id="Head2">บันทึกบัญชีแต่ละวัน</p> 



function HelloComponet3(){

    const initState =[
        {id:1,title:"ค่าเช่าบ้าน",amount:-5660},
        {id:2,title:"ค่าอาหาร",amount:-3000},
        {id:3,title:"เงินเดือน",amount:12000},
        {id:4,title:"ค่าจิปาทะ",amount:-5000}
    ]
    const [items,setItems]=useState(initState)

    const [reportIncome,setRepotIncome]=useState(0)
    const [reportExpense,setRepotExpense]=useState(0)

    
    const onaddNewItem=(newItem)=>{
        setItems((prevItem)=>{
            return [newItem,...prevItem]
        })
        console.log("ข้อมูลจาก Form Component", newItem)
    }

    useEffect(()=>{
        const amounts = items.map(items=>items.amount)
        const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
        const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1

        setRepotIncome(income)
        setRepotExpense(expense)
        // console.log("ยอดรายได้",income);
        // console.log("รายจ่าย",expense);
        // console.log(amounts)
      },[items,reportIncome,reportExpense])

      //reducer state
    //   const [count,setCount]=useState(0)
    //   const reducer =(state,action)=>{
    //       switch(action.type){
    //           case "ADD":
    //           return state+action.PayLoad
    //           case "SUB":
    //           return state-action.PayLoad
    //           case "CLEAR":
    //           return 0
    //       }
    //     }
    //   const [result,dispatch] = useReducer(reducer,count)

    return ( 
        <DataConText.Provider value = {
            {
                income :  reportIncome,
                expense : reportExpense
            }
        }> {/*  ข้อมูลกลางคือ"Kongruksiam" component ลูกสามารถเรียกใช้ได้ */}

        <nav id = "all">
            <Title/> 
            {/* <Description/>  */}
            <div>
            <Router>

                <div>
                    <ul className='horizontal-manu'>
                        <li>
                            <Link to ="/">ข้อมูลบัญชี </Link>
                        </li>
                        <li>
                            <Link to ="/insert">บันทึกข้อมูล</Link>
                        </li>
                    </ul>
                </div>

                <Routes>
                    <Route path='/' exact element={<Description/>}></Route>
                    <Route path='/insert'  element={ <><FormCompo onAddItem={onaddNewItem}/><Transaction items={items}/></>}></Route>
                </Routes>
            </Router>
            </div>
            <DataReport/>
            {/* <FormCompo onAddItem={onaddNewItem}/> ให้ฟังชั่นทำงาน onaddNewItem */}
            {/* <Transaction items={items}/> เอาค่าจาก array ไปส่งยัง Component */}
         </nav>
        </DataConText.Provider>
        // <div align="center">
        //     <h1>Hello react{result}</h1>
        //     <button onClick={()=>dispatch({type:"ADD",PayLoad:10})}>เพิ่ม</button>
        //     <button onClick={()=>dispatch({type:"SUB",PayLoad:5})}>ลด</button>
        //     <button onClick={()=>dispatch({type:"CLEAR"})}>ล้าง</button>
        // </div>
    );
}

export default HelloComponet3