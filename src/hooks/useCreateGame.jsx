import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useCreateGame = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const api_local = import.meta.env.VITE_API_LOCAL;
  const [platforms, setPlatforms] = useState();
  const [genres, setGenres] = useState();
  async function getPlatforms() {
    let data = await axios.get(`${api_local}/platforms`);
    setPlatforms(await data.data);
  }
  async function getGenres() {
    let data = await axios.get(`${api_local}/generos`);
    setGenres(await data.data);
  }

  const onSubmit = (data) =>
    axios.post(`${api_local}/create`, data).then(() => navigate("/"));

  useEffect(() => {
    getPlatforms();
    getGenres();
  }, []);
  return {
    register,
    handleSubmit,
    clearErrors,
    platforms,
    getValues,
    setError,
    errors,
    genres,
    onSubmit,
  };
};

export default useCreateGame;
