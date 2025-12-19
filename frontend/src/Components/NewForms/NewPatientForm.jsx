
import React from 'react'

const NewPatientForm = ({onClose}) => {
  return (
    <div className='full-screen-form-appearance rounded shadow-lg'>

        <div className='final-new-patient-form'>


        <div className='d-flex justify-content-between align-items-center'>
            <div style={{fontSize:'25px'}}>Please Add Patient's Details</div>
            <button type='button' 
                onClick={onClose}
                className='btn btn-danger top-right-corner-cross' 
                style={{fontSize:'20px'}}>X
            </button>
        </div>

      
<form className='m-3'>

    <div className='d-flex justify-content-between'>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name :</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Age :</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
    </div>

    <div >
        <div className='d-flex'>Gender :
  <div className="form-check ms-3 me-4">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      Male
    </label>
  </div>
  <div className="form-check me-4">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
    <label className="form-check-label" htmlFor="flexRadioDefault2">
      Female
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
    <label className="form-check-label" htmlFor="flexRadioDefault3">
      Other
    </label>
  </div>
</div>

    </div>


    <div className='my-4'>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Blood Group</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number :</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email ID :</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

    </div>

<div className='d-flex justify-content-center'>
  <button type="submit"
   className="btn newPFbtn btn-primary text-center"
    style={{width:'300px' , height:'50px'}}>Add Patient
  </button>
</div>

</form>

        </div>
    </div>
  )
}

export default NewPatientForm

