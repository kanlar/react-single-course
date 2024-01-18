import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [index, setIndex] = useState(0);
  const [returnButton, setReturnButton] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const mathRandomData = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    setIndex(randomNumber);
  };

  const returnBtn = () => {
    setReturnButton();
  };

  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/course");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const deleteCourseById = (id) => {
    const deleteCourse = data.filter((course) => {
      return course.id !== id;
    });
    setData(deleteCourse);
  };

  const sharedValue = {
    data,
    fetchApi,
    deleteCourseById,
    loading,
    mathRandomData,
    index,
    setIndex,
  };
  return (
    <>
      <Context.Provider value={sharedValue}>{children}</Context.Provider>
    </>
  );
}

export { Provider };

export default Context;
