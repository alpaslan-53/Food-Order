import React, { useEffect, useState } from "react";
import MenuList from "../components/MenuList";
import menuler from "../yemekdata";
import axios from "axios";

function HomePage() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/getFoods")
      .then((res) => setFoods(res.data))
      .then((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="row">
        {foods.map((menu, index) => (
          <div key={index} className="col-md-4">
            <MenuList menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
