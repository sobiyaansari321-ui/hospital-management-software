import React, { useState } from 'react'
import NewMedicineInventoryForm from '../Components/NewForms/NewMedicineInventoryForm.jsx';
import Layout from '../Components/Common/Layout.jsx'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";


const MedicineInventoryPage = () => {
  const [ showMedInvForm , setShowMedInvForm ] = useState(false)
  return (
      <Layout title='Medicine Inventory'>

        <div className='medicine-box shadow-lg rounded '>
          
          <div className='d-flex justify-content-between align-items-center p-4 pb-2'>

          <div style={{fontSize:'35px'}}>Medicine Inventory</div>
          <button 
          className='btn medicine-btn btn-primary'
          onClick={()=>{setShowMedInvForm(true)}}
          ><FaPlus /> Add Product
          </button>

          </div>

          <hr/>

          <div className='d-flex  align-items-center'>

        </div>


        <div className='below-hr-content d-flex align-items-center'>

<input type="text"
placeholder=" Search Product..."
className="search-product"
 />

<div class="dropdown drpdn-btn-1">
  <a class="btn medicine-dropdown-btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Product Type
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Tablet</a></li>
    <li><a class="dropdown-item" href="#">Syrup </a></li>
    <li><a class="dropdown-item" href="#">Inhaler</a></li>
  </ul>
</div>


<div class="dropdown drpdn-btn-2">
  <a class="btn medicine-dropdown-btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Manufacturer
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">John's Medicines</a></li>
    <li><a class="dropdown-item" href="#">David's Ltd</a></li>
    <li><a class="dropdown-item" href="#">Rohan's Medico</a></li>
  </ul>
</div>

<div class="dropdown drpdn-btn-3">
  <a class="btn medicine-dropdown-btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Stock Status
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </div>

        <div>
          <table class="table table-hover table-bordered text-center my-4" style={{fontSize:'22px'}}>
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Type</th>
      <th scope="col">Price</th>
      <th scope="col">In Stock</th>
      <th scope="col">Expiry Date</th>
      <th scope="col">Manufacturer</th>
      <th scope="col">User Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Oxyfine</td>
      <td>Inhaler</td>
      <td>75.00</td>
      <td>50 units</td>
      <td>05/01/2026</td>
      <td>John's Medicines</td>
      <td className='d-flex justify-content-between align-items-center p-2'>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaPlus  size={27} style={{paddingRight:'5px'}}/>
        </button>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaMinus  size={27} style={{paddingRight:'10px'}}/>
        </button>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaEdit size={27} style={{paddingRight:'5px'}} />
        </button>
      </td>
    </tr>
    
    <tr>
      <td>Paracatamol</td>
      <td>Tablet</td>
      <td>25.00</td>
      <td>150 units</td>
      <td>25/05/2026</td>
      <td>David's Ltd</td>
      <td className='d-flex justify-content-between align-items-center p-2'>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaPlus  size={27} style={{paddingRight:'5px'}}/>
        </button>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaMinus  size={27} style={{paddingRight:'10px'}}/>
        </button>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaEdit size={27} style={{paddingRight:'5px'}} />
        </button>
      </td>
    </tr>

    <tr>
      <td>Besnelli</td>
      <td>Syrup</td>
      <td>150.00</td>
      <td>80 units</td>
      <td>30/10/2026</td>
      <td>Rohan's Medico</td>
      <td className='d-flex justify-content-between align-items-center p-2'>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaPlus  size={27} style={{paddingRight:'5px'}}/>
        </button>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaMinus  size={27} style={{paddingRight:'10px'}}/>
        </button>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaEdit size={27} style={{paddingRight:'5px'}} />
        </button>
      </td>
    </tr>

    <tr>
      <td>Oxyfine</td>
      <td>Inhaler</td>
      <td>75.00</td>
      <td>50 units</td>
      <td>05/01/2026</td>
      <td>John's Medicines</td>
      <td className='d-flex justify-content-between align-items-center p-2'>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaPlus  size={27} style={{paddingRight:'5px'}}/>
        </button>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaMinus  size={27} style={{paddingRight:'10px'}}/>
        </button>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaEdit size={27} style={{paddingRight:'5px'}} />
        </button>
      </td>
    </tr>

    <tr>
      <td>Besnelli</td>
      <td>Syrup</td>
      <td>150.00</td>
      <td>80 units</td>
      <td>30/10/2026</td>
      <td>Rohan's Medico</td>
      <td className='d-flex justify-content-between align-items-center p-2'>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaPlus  size={27} style={{paddingRight:'5px'}}/>
        </button>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaMinus  size={27} style={{paddingRight:'10px'}}/>
        </button>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaEdit size={27} style={{paddingRight:'5px'}} />
        </button>
      </td>
    </tr>

    <tr>
      <td>Paracatamol</td>
      <td>Tablet</td>
      <td>25.00</td>
      <td>150 units</td>
      <td>25/05/2026</td>
      <td>David's Ltd</td>
      <td className='d-flex justify-content-between align-items-center p-2'>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaPlus  size={27} style={{paddingRight:'5px'}}/>
        </button>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaMinus  size={27} style={{paddingRight:'10px'}}/>
        </button>
        <button style={{margin:'4px',backgroundColor:'aliceblue',borderRadius:'12%',width:'50px',}}>
          <FaEdit size={27} style={{paddingRight:'5px'}} />
        </button>
      </td>
    </tr>

  </tbody>
</table>
        </div>

<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end" style={{fontSize:'25px'}}>
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>


        </div>

        {showMedInvForm && (
    <NewMedicineInventoryForm onClose={() => setShowMedInvForm(false)} />
        )}

      </Layout>
  )
}

export default MedicineInventoryPage
