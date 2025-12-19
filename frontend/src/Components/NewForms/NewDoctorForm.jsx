import React from 'react'

const NewDoctorForm = ({onClose}) => {
  return (
    <div className='full-screen-form-appearance rounded shadow-lg'>

        <div className='final-new-patient-form'>

        <div className='d-flex justify-content-between align-items-center'>
            <div style={{fontSize:'25px'}}>Please Add Doctor's Details</div>
            <button type='button' 
                onClick={onClose}
                className='btn btn-danger top-right-corner-cross' 
                style={{fontSize:'20px'}}>X
            </button>
        </div>
      
      <form className='m-3'>

    <div className='d-flex justify-content-between'>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Doctor Name :</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Qualification :</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
    </div>

    <div className='my-4'>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Experience :</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number :</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

    </div>

<div className='d-flex justify-content-center'>
  <button type="submit"
   className="btn newPFbtn btn-primary text-center"
    style={{width:'300px', height:'50px'}}>Add Doctor
  </button>
</div>

</form>

    </div>
    </div>
  )
}

export default NewDoctorForm
