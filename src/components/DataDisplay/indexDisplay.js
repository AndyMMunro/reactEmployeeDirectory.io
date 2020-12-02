import React, { useContext } from "react";
import EmployeeContext from "../utils/EmployeeContext";

function EmployeeInfo() {
  const { image, name, phone, email, DOB  } = useContext(EmployeeContext);

  return (
            <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Image: {image} </td>
                    <td>Name: {name} </td>
                    <td>Phone: {phone} </td>
                    <td>Email: {email}</td>
                    <td>DOB: {DOB}</td>
                </tr>
            </tbody>
        </table>
  );
}

export default EmployeeInfo;