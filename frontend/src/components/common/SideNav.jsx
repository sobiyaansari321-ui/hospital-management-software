import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSpeedometer } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { TbMessageFilled } from "react-icons/tb";
import { FaBookMedical } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
const SideNav = () => {
  return (
    <div className="shadow  vh-100">
      <div className="d-flex justify-content-center pt-4">
        <img className="w-50 h-50" src="/logo.png" alt="Logo" />
      </div>

      <ul className="mt-5" style={{ listStyle: "none" }}>
        <li className="my-3">
          <NavLink to={"/dashboard"}>
            <div className="px-2 py-2 hover-div">
              <IoSpeedometer size={20} className="me-2" />
              Dashboard
            </div>
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink to={"/patients"}>
            <div className="px-2 py-2 hover-div">
              <IoPeople size={20} className="me-2" />
              Patients
            </div>
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink to={"/appointments"}>
            <div className="px-2 py-2 hover-div">
              <IoDocument size={20} className="me-2" />
              Appointments
            </div>
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink to={"/doctors"}>
            <div className="px-2 py-2 hover-div">
              <FaUserDoctor size={20} className="me-2" />
              Doctors
            </div>
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink to={"/messages"}>
            <div className="px-2 py-2 hover-div">
              <TbMessageFilled size={20} className="me-2" />
              Messages
            </div>
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink to={"/education-content"}>
            <div className="px-2 py-2 hover-div">
              <HiMiniBuildingOffice size={20} className="me-2" />
              Education Content
            </div>
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink to={"/medicine-inventory"}>
            <div className="px-2 py-2 hover-div">
              <FaBookMedical size={20} className="me-2" />
              Medicine Inventory
            </div>
          </NavLink>
        </li>
        <li className="my-3">
          <NavLink to={"/settings"}>
            <div className="px-2 py-2 hover-div">
              <FaBookMedical size={20} className="me-2" />
              Settings
            </div>
          </NavLink>
        </li>
        <li className="my-3">
          <NavLink to={"/"}>
            <button className=" btn btn-danger px-2 py-2 w-75">
              <RxExit size={20} className="me-2" />
              Logout
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
