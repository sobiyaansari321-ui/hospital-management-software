import React from 'react'
import Layout from '../Components/Common/Layout.jsx'
import { IoIosSend } from "react-icons/io";


const MessegesPage = () => {
  return (
    <div>
      <Layout title='Messeges'>

        <div className=' d-flex'>

          <div className='messege-page-box-1 shadow-lg rounded'>

            <div >
              <input type="text"
               placeholder='Search...'
               className='msg-search '
               />
            </div>

            <hr />

            <div>

              <ul style={{listStyle:'none'}}>

                {/* chat 1 */}

                <li className='d-flex justify-content-between align-items-center me-4'>

                  <div className='d-flex'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNP8DeYeh2U2C3C7CQLPxfUBJGScbqm8x2CQ&s"
                    alt="" className='msg-pg-profile ' />
                    <div className='mx-3 ms-3 me-8'>
                      <h5 className='pb-2 pt-2'>Mohd. Hassan</h5>
                      <div>Sent Attachment</div>
                    </div>
                   </div>

                  <div className=''>11.00 AM</div>

                </li>

<hr />

                {/* chat 2 */}

                <li className='d-flex justify-content-between align-items-center me-4'>

                  <div className='d-flex'>
                    <img src="data:image/jpeg;base64,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"
                    alt="" className='msg-pg-profile ' />
                    <div className='mx-3 ms-3 me-8'>
                      <h5 className='pb-2 pt-2'>Zunaira Fatema</h5>
                      <div>Sent Messege</div>
                    </div>
                   </div>

                  <div className=''>10.45 AM</div>

                </li>

                <hr />

                {/* chat 3 */}

                <li className='d-flex justify-content-between align-items-center me-4'>

                  <div className='d-flex'>
                    <img src="data:image/jpeg;base64,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"
                    alt="" className='msg-pg-profile ' />
                    <div className='mx-3 ms-3 me-8'>
                      <h5 className='pb-2 pt-2'>Sidra Khan</h5>
                      <div>Sent Messege</div>
                    </div>
                   </div>

                  <div className=''>10.00 AM</div>

                </li>

                <hr />

                {/* chat 4 */}

                <li className='d-flex justify-content-between align-items-center me-4'>

                  <div className='d-flex'>
                    <img src="data:image/jpeg;base64,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"
                    alt="" className='msg-pg-profile ' />
                    <div className='mx-3 ms-3 me-8'>
                      <h5 className='pb-2 pt-2'>Farheen Sheikh</h5>
                      <div>Sent Attachment</div>
                    </div>
                   </div>

                  <div className=''>9.30 AM</div>

                </li>

                <hr />

                {/* chat 5 */}

                <li className='d-flex justify-content-between align-items-center me-4'>

                  <div className='d-flex'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_139gKXq2t2wCfM4QPv4s-BjREMGhiK3lw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_139gKXq2t2wCfM4QPv4s-BjREMGhiK3lw&s"
                    alt="" className='msg-pg-profile ' />
                    <div className='mx-3 ms-3 me-8'>
                      <h5 className='pb-2 pt-2'>Adiba Sheikh</h5>
                      <div>Sent Messege</div>
                    </div>
                   </div>

                  <div className=''>8.30 AM</div>

                </li>
                

              </ul>

            </div>
          </div>

          <div className='messege-page-box-2 shadow-lg rounded'>

                  <div className=' chat-page'>

                    <div className="d-flex header">

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNP8DeYeh2U2C3C7CQLPxfUBJGScbqm8x2CQ&s"
                    alt="" className='msg-pg-profile ' />
                    <div className='mx-3 ms-3 me-8'>
                      <h5 className='pb-2 pt-2'>Mohd. Hassan</h5>
                      <div>Online</div>
                    </div>

                    </div>

                    <div className="chat-msg-1">
                    <div >
                      Hi! I need to meet Dr. Mehta tomorrow...
                    </div>
                    <div className='my-4 time'>11.10 am</div>
                    </div>

                    <div className="chat-msg-2">
                    <div >
                      All appointments are full.
                    </div>
                    <div className='my-4 time'>11.11 am</div>
                    </div>

                    <div className="chat-msg-1-1">
                    <div >
                      Ok...
                    </div>
                    <div className='my-4 time'>11.12 am</div>
                    </div>

                  </div>

                  

                  <div className="footer d-flex align-items-center">

                    <div >
                      <input type="text"
                      className='chat-msg-typing'
                       placeholder='Type a messege...'
                       />
                    </div>

                    <div>
                      <button className='send-btn'><IoIosSend size={60} style={{padding:'5px'}}/></button>
                    </div>

                  </div>

               
          </div>

        </div>
        
      </Layout>
    </div>
  )
}

export default MessegesPage
