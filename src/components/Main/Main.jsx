import React, { useContext } from 'react'
import './Main.css';
import { Context } from '../../context/Context';

const Main = () => {


    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);


  return (
    <div className='main'>
        <div className='nav'>
            <p>AI</p>
            <img src='/user.png' alt='img1' className='im_all' />
        </div>

        <div className="main-container">


            {!showResult ? <>
                <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you..</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p>What is JAVA?</p>
                    <img src='/j.png' alt='img2' className='icon_img'/>
                </div>
                <div className="card">
                    <p>What is React?</p>
                    <img src='/R.png' alt='img2' className='icon_img'/>
                </div>
                <div className="card">
                    <p>What is HTML?</p>
                    <img src='/html.png' alt='img2' className='icon_img'/>
                </div>
                <div className="card">
                    <p>What is CSS?</p>
                    <img src='/css.png' alt='img2' className='icon_img'/>
                </div>
            </div>
            </>
            :
            <div className='result'>
              <div className='result-title'>
                <img src='/user.png' alt='' />
                <p>{recentPrompt}</p>
              </div> 
              <div className='result-data'>
              <img src='/ai.png' alt='' />
              {loading?
              <div className='loader'>
              <hr/>
              <hr/>
              <hr/>
              </div>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
               
                </div>      
            </div>}


           


            <div className="main-button">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)}  value={input} type='text' placeholder='Enter a  Prompt Here' />
                    <div>
                        <img src='/images.png' alt='' className='icon_img'/>
                        <img src='/mic.png' alt='' className='icon_img'/>
                        {input?<img onClick={()=> onSent()} src='/send.png' alt='' className='icon_img'/>:null}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main