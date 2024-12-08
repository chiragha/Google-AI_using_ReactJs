import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { Context } from '../../context/Context';

const Sidebar = () => {

   const[expand, setExpand] = useState(false)
   const{onSent , prevPrompt, setRecentPrompt, newChat} = useContext(Context)
    

   const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
   }
  return (
    <div className='sidebar'>
        <div className="top">
            <img  onClick={() => setExpand(prev => !prev)} className='menu img_all' src='/menu.png' alt='img'/>
            <div onClick={()=> newChat()} className="new-chat">
                <img src='/plus-sign.svg' alt='img2' className='img_all'/>
                {expand ? <p>New Chat</p> : null}
            </div>
            {expand ? <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompt.map((item,index) => {
                    return (
                        <div onClick={() => loadPrompt(item)} className='recent-entry'>
                             <img src='/msg.png' alt='img3' className='img_all'/>
                             <p>{item.slice(0,18)} ...</p>
                        </div> 
                    )
                })}
               
            </div> : null}
            
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src='/que.svg' alt='img4' className='img_all'/>
                {expand ? <p>Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src='/his.png' alt='img4' className='img_all'/>
                {expand?<p>History</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src='/settings.svg' alt='img4' className='img_all'/>
                {expand?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar