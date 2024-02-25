import React from "react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import ListItem from "../components/ListItem";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState(null);

  const fetchData = async () => {
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
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    let timerId = setInterval(() => fetchData(), 2000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <ul>
        {data?.map((item) => {
          return <ListItem key={item._id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Dashboard;
