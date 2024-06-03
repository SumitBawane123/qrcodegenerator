
import { useState, useRef } from 'react';
import './App.css';
import QRCode from 'qrcode'

function App() {
  const [ qrData , setqrData] = useState("");
  const text = useRef();
  const handler= () =>{
    const text_value = text.current.value;
    setqrData(text_value);
    QRCode.toDataURL(text_value).then(data => setqrData(data));
  }
  return (
    <div className='m-10'>
      <div className="flex row m-auto">
        <input
          type='text'
          placeholder='Enter Text to generate QR Code'
          ref={text}
          className='p-10 w-2/5 bg-inherit border-b-10 border-none justify-center items-center'
        ></input>
        <button className='generateButton m-5 px-7 py-5 bg-black text-white rounded-xl'
        onClick={()=> handler()}>
          Generate
        </button>
      </div>
      <div>
        {
          qrData? <><img className="m-10 p-10" src={qrData}></img></> : <></>
        }
      </div>
    </div>
    
  );
}

export default App;
