import React from "react";
import "./chat.css";

import Navbar from "../../component/home/navbar/navbar";
import Sidebar from "../../component/home/sidebar-menu/sidebar-menu";

import sendIcon from "../../assets/image/send.png";

const Chat = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <Sidebar />
        </div>
        <div className='section-chat'>
          <div className='row'>
            <div className='col-sm-4 d-flex justify-content-end'>
              <div className='list-chat'>
                <div className='listchat-header'>
                  <h5 style={{fontWeight:'bold'}}>Chat</h5>
                </div>
                <div className='list-user'>
                   <div style={{marginBottom:'5vh'}}>
                       <h4 style={{fontWeight:'bold', fontSize: '16px'}}>Jonas adam</h4>
                       <p style={{fontSize: 'small', color: '#9B9B9B'}}>woyy gimana sih jual...</p>
                   </div>
                   <div>
                       <h4 style={{fontWeight:'bold', fontSize: '16px'}}>Takyun</h4>
                       <p style={{fontSize: 'small', color: '#9B9B9B'}}>bapake tuku iwak...</p>
                   </div>
                </div>
              </div>
            </div>
            <div className='col-sm-8'>
              <div className='text-message'>
                <div className='message-header'>
                <h5 style={{fontWeight:'bold'}}>Jonas adam</h5>
                </div>
                <div className='messaging'>
                  <div className='chatting'>
                      hkljhkh
                  </div>
                  <div className='input-message'>
                    <div class='form-group' style={{ width: "90%" }}>
                      <form>
                        <input
                          type='text'
                          class='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          style={{ borderRadius: "23px", padding: "0 1.4vw" }}
                          autocomplete='off'
                          placeholder='type message..'
                        />
                      </form>
                    </div>
                    <div className='send'>
                      <img src={sendIcon} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
