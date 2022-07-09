import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "../api/fetchProducts";
/* import { usersImg } from "../../src/assets/users"; */

const usersImg = require.context("../../src/assets/users", true);

const AboutUsScreen = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await fetchProducts(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = response.filter((user) => user.id < 6 && user);

    setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-primary py-2 p-0 lg:p-4 ">
      <div className="container px-2 md:px-0 mx-auto animate__animated animate__fadeIn">
        <h1 className="text-xl lg:text-4xl text-white">¿Quienes somos?</h1>

        <div className="bg-white p-4 rounded-md mt-10">
          <h2 className="text-lg font-bold">Misión</h2>
          <p className="text-base lg:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
            laborum ratione quam hic nihil explicabo optio sapiente ea dolorum,
            suscipit delectus ducimus fugiat tempora accusantium dolore animi
            repudiandae voluptate accusamus natus facere eligendi cum? Est nam
            voluptates exercitationem repellendus eligendi nesciunt fugit
            corporis a animi modi inventore placeat, fugiat quaerat.
          </p>
          <h2 className="text-lg font-bold mt-10">Visión</h2>
          <p className="text-base lg:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            sapiente quisquam dolore perferendis vel, consectetur quod!
            Voluptatem alias nihil modi quisquam necessitatibus. Tempore eum a
            ducimus labore, tenetur voluptatibus alias impedit vitae voluptas
            velit ut assumenda facere nobis eligendi illo explicabo voluptatem
            quod porro esse magnam optio veritatis cupiditate repellat.
          </p>
        </div>
        <h3 className="text-xl lg:text-4xl text-white my-5">
          Opinion de nuestros clientes:
        </h3>
        {users.map((user) => (
          <div
            key={user.id}
            className="my-10 bg-white py-2 px-4 rounded-md grid grid-cols-1 lg:grid-cols-7 "
          >
            <div
              className={`${
                user.id % 2 === 0 && "order-0 lg:order-1"
              } flex justify-center`}
            >
              <img
                src={usersImg(`./user-${user.id}.jpg`)}
                className="aboutUs__avatar"
                alt="user"
              />
            </div>
            <div className="col-span-6 p-2">
              <p className="text-base lg:text-xl">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                dolores iusto pariatur explicabo. Saepe maiores quia numquam
                nihil excepturi eaque error est, nostrum tenetur laboriosam,
                nisi praesentium labore dicta, deleniti placeat voluptatum atque
                reiciendis recusandae odit distinctio culpa qui molestiae
                possimus sequi? At magni qui repellat."
              </p>
              <span
                className={`${
                  user.id % 2 === 1 ? "text-end lg:text-start" : "text-end"
                } block font-bold mt-3 `}
              >
                {user.name}
              </span>
              <span
                className={`${
                  user.id % 2 === 1 ? "text-end lg:text-start" : "text-end"
                } block font-semibold mt-1`}
              >
                {user.address.city}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsScreen;
