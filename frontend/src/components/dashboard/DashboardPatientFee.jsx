const DashboardPatientFee = () => {
  return (
    <div className="p-3 shadow-lg bg-white rounded " style={{ width: "30%" }}>
      <div>
        <h5>Patient Fee</h5>
      </div>

      <div
        className="mt-2"
        style={{ height: "30vh", overflowX: "hidden", overflowY: "auto" }}
      >
        <ul
          style={{
            listStyle: "none",
          }}
          className="ps-0 "
        >
          <li
            className="w-100 d-flex justify-content-between align-items-center py-2"
            style={{ borderBottom: "1px solid grey" }}
          >
            <div className="d-flex align-items-center">
              {/* Image  */}
              <div>
                <img
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  src="https://cdn-icons-png.freepik.com/512/6069/6069202.png"
                  alt="Diet Plan"
                />
              </div>
              {/* Title */}
              <div className="ms-2">
                <div className="educationContentTitle">abc</div>
                <div className="educationContentSubTitle text-danger">
                  Doctors fee pending
                </div>
              </div>
            </div>

            <button className="btn btn-primary">Request Fee</button>
          </li>{" "}
          <li
            className="w-100 d-flex justify-content-between align-items-center py-2"
            style={{ borderBottom: "1px solid grey" }}
          >
            <div className="d-flex align-items-center">
              {/* Image  */}
              <div>
                <img
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  src="https://cdn-icons-png.freepik.com/512/6069/6069202.png"
                  alt="Diet Plan"
                />
              </div>
              {/* Title */}
              <div className="ms-2">
                <div className="educationContentTitle">abc</div>
                <div className="educationContentSubTitle text-danger">
                  Doctors fee pending
                </div>
              </div>
            </div>

            <button className="btn btn-primary">Request Fee</button>
          </li>{" "}
          <li
            className="w-100 d-flex justify-content-between align-items-center py-2"
            style={{ borderBottom: "1px solid grey" }}
          >
            <div className="d-flex align-items-center">
              {/* Image  */}
              <div>
                <img
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  src="https://cdn-icons-png.freepik.com/512/6069/6069202.png"
                  alt="Diet Plan"
                />
              </div>
              {/* Title */}
              <div className="ms-2">
                <div className="educationContentTitle">abc</div>
                <div className="educationContentSubTitle text-danger">
                  Doctors fee pending
                </div>
              </div>
            </div>

            <button className="btn btn-primary">Request Fee</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardPatientFee;
