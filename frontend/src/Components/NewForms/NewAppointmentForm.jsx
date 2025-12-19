import React from 'react'

const NewAppointmentForm = ({onClose}) => {
  return (
        <div className='full-screen-form-appearance rounded shadow-lg'>

        <div className='final-new-patient-form'>


        <div className='d-flex justify-content-between align-items-center'>
            <div style={{fontSize:'25px'}}>New Appointment </div>
            <button type='button' 
                onClick={onClose}
                className='btn btn-danger top-right-corner-cross' 
                style={{fontSize:'20px'}}>X
            </button>
        </div>

      
<form className='m-3'>

    <div className='d-flex justify-content-between'>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Time :</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Date :</label>
    <input type="Date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
    </div>


    <div className='my-4'>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Patient Name :</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Age :</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Doctor :</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

    </div>

<div className='d-flex justify-content-center'>
  <button type="submit"
   className="btn newPFbtn btn-primary text-center"
    style={{width:'300px', height:'50px'}}>Add Patient
  </button>
</div>

</form>

        </div>
    </div>
  )
}

  

export default NewAppointmentForm
