import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

//Variables de entorno front 
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const App = () => {
  const [arrayProducts, setArrayProducts] = useState([]);

  const {register,handleSubmit,reset,formState:{errors}}= useForm();

  // const watchInputs = watch()

  useEffect(() => {
    const FetchGetProducts = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/products`);
        setArrayProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    FetchGetProducts();
  }, [arrayProducts]);

  const onSubmit =async(data)=>{

      const response = await axios.post(`${BACKEND_URL}/products`,data)
      console.log("datas: " ,response)
      reset()
  }
  // console.log(watchInputs);

  return (
    <div className="  container mr-auto   ">
      <div >
        <h1 className="text-3xl text-center">Registro de Producto</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mt-3 mx-auto ">
          <div className="mb-5 ">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder="name@flowbite.com"
              {...register("name",{required:"Este campo es obligatorio"})}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-white"
            >
              price
            </label>
            <input
              type="number"
              id="price"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              {...register("price",{required:"Este campo es obligatorio"})}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="descripcion"
              className="block mb-2 text-sm font-medium text-white"
            >
              descripcion
            </label>
            <input
              type="text"
              id="descripcion"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              {...register("description",{required:"Este campo es obligatorio"})}
            />
          </div>
        
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Registrar
          </button>
        </form>
      </div>

      <h1 className=" text-3xl font-bold">Productos</h1>
      <div className="grid grid-cols-3 gap-2 mr-3">
        {arrayProducts.length > 0 ? (
          arrayProducts.map((producto) => (
            <div key={producto._id} className=" py-3 px-1 border-2 border-white rounded-2xl ">
                <h1 > {producto.name} </h1>
                <h1 > {producto.price} </h1>
                <p > {producto.description} </p>

            </div>
           
          ))
        ) : (
          <p>No hay Productos</p>
        )}
      </div>
    </div>
  );
};
