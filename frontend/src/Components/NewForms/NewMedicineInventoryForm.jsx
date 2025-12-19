import React from 'react'

const NewMedicineInventoryForm = ({onClose}) => {
  return (
    <div className='full-screen-form-appearance rounded shadow-lg'>

        <div className='final-new-patient-form'>


        <div className='d-flex justify-content-between align-items-center'>
            <div style={{fontSize:'25px'}}> Add Product's Details</div>
            <button type='button' 
                onClick={onClose}
                className='btn btn-danger top-right-corner-cross' 
                style={{fontSize:'20px'}}>X
            </button>
        </div>

      
<form className='m-3'>

    <div className=''>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Product Name :</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Type :</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
    </div>


    <div className='my-4'>

      <div className='d-flex justify-content-between align-items-center'>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Price :</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Expiry Date :</label>
    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
      </div>


  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">In Stock :</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Manufacturer :</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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

export default NewMedicineInventoryForm
