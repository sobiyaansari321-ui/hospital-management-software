import React from 'react'

const DashboardPatientFee = () => {
  return (
    <div className='fee-box m-3 shadow-lg rounded '>

      <div className="bold m-3">Patient Fee</div>

      <div>
        <ul style={{listStyleType:'none'}} className='ps-2 pe-2'>

          <li className='d-flex justify-content-between align-items-center p-2 '>
            <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s" alt="" />
            <div className=''>
              <div>Rahul Sharma</div>
              <div className='redtext'>Doctors Fee Pending</div>
            </div>
              <button className='btn fee-btn btn-primary'>Fee Request</button>
          </li>

          <hr /> 

          <li className='d-flex justify-content-between align-items-center p-2'>
            <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s" alt="" />
            <div>
              <div>Mira Khan</div>
              <div className='redtext'>Doctors Fee Pending</div>
            </div>
              <button className='btn fee-btn btn-primary'>Fee Request</button>
          </li>

          <hr />

          <li className='d-flex justify-content-between align-items-center p-2'>
            <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s" alt="" />
            <div>
              <div>John Kaif</div>
              <div className='redtext'>Doctors Fee Pending</div>
            </div>
              <button className='btn fee-btn btn-primary'>Fee Request</button>
          </li>

          <hr />

        </ul>
      </div>
      
    </div>
  )
}

export default DashboardPatientFee
