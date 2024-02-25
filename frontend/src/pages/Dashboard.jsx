import React from "react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        axios
          .get(`http://localhost:3000/accidents/${user?.state}`, {
            headers: {
              authorization: token,
            },
          })
          .then((res) => {
            setData(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <ul>
        {data?.map((item) => {
          return <li key={item._id}>{item.severity}</li>;
        })}
      </ul>
    </div>
  );
};

export default Dashboard;
