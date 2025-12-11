import { IoDocument } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { RiMedicineBottleFill } from "react-icons/ri";
import { VscBook } from "react-icons/vsc";

const ActivityOverView = () => {
  return (
    <div
      className="activityOverViewParentContainer shadow-lg rounded p-3  bg-white h-100"
      style={{ width: "30%" }}
    >
      {/* Title and Dropdown  */}
      <div className="d-flex justify-content-between align-items-center  mb-1">
        <h5>Activity Overview</h5>
        <div className="btn-group">
          <button
            type="button"
            className="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Daily
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Weekly
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Monthly
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                Yearly
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                All
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Activity Containers */}
      {/* 1st & 2nd Container */}
      <div className="d-flex justify-content-between align-items-center gap-2">
        {/* First Container */}
        <div className="d-flex justify-content-center align-items-center activityOverViewContainer1   rounded h-25 w-50 p-3">
          <div>
            <div className="text-center">
              <IoDocument size={25} />
            </div>
            <div className="text-center fw-bold">{25}</div>
            <div className="text-center">Appointment</div>
          </div>
        </div>

        {/*Second Container  */}
        <div className="activityOverViewContainer2 d-flex justify-content-center align-items-center  rounded h-25 w-50 p-3">
          <div>
            <div className="text-center">
              <IoPeople size={25} />
            </div>
            <div className="text-center fw-bold">{25}</div>
            <div className="text-center">Patients</div>
          </div>
        </div>
      </div>
      {/* 3rd & 4th Container */}
      <div className="d-flex justify-content-around align-items-center gap-2 mt-2">
        {/* Third Container */}
        <div className="d-flex justify-content-center align-items-center activityOverViewContainer3   rounded h-25 w-50 p-3">
          <div>
            <div className="text-center">
              <RiMedicineBottleFill size={25} />
            </div>
            <div className="text-center fw-bold">{25}</div>
            <div className="text-center">Medicine Sold</div>
          </div>
        </div>

        {/* Fourth Container */}
        <div className="activityOverViewContainer4 d-flex justify-content-center align-items-center rounded h-25 w-50 p-3">
          <div>
            <div className="text-center">
              <VscBook size={25} />
            </div>
            <div className="text-center fw-bold">{25}</div>
            <div className="text-center">Education Content</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityOverView;
