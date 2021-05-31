import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

const TeamData = [
  {
    img: "",
    name: "Edmund Kitan",
    role: "Founder",
  },
  {
    img: "",
    name: "Olarenwaju Cesar",
    role: "Co-Founder",
  },
  {
    img: "",
    name: "Uzo Amanda",
    role: "Head of Growth",
  },
  {
    img: "",
    name: "Donald Duke",
    role: "Head of Product",
  },
];
const Team = () => {
    return (
      <div className="row">
        {TeamData.map((member) => (
          <div>
            <div className="d-flex align-items-center">
              <div className="fs-3">
                <FaRegUserCircle />
              </div>
              <h6 className="title ms-2 mt-2 fw-bold">{member.name}</h6>
            </div>
            <small className="ms-4 fw-bold">{member.role}</small>
          </div>
        ))}
      </div>
    );
};

export default Team;