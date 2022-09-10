import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import HelloComponet3 from './components/Hellocomponent3';
import reportWebVitals from './reportWebVitals';

// สร้าง Funtion component 
function HelloComponet(){
  return <h1>อิดอกทองหน้าหีจริงๆ</h1>

}

// สร้าง Class component 

class HelloComponet2 extends React.Component{
  render(){
    return <h1>สวัสกีจ้าาาา</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HelloComponet3/>);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
