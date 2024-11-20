import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import useCreateGame from "../hooks/useCreateGame";
import Select from "react-select";
import { Controller } from "react-hook-form";

const CreateGame = () => {
  const {
    platforms,
    genres,
    getValues,
    register,
    handleSubmit,
    onSubmit,
    control,
    errors,
  } = useCreateGame();
  console.log(getValues());
  return (
    <div className="min-h-screen my-2 m-2 md:m-0   flex items-center min-w-screen">
      <Card className="bg-white p-5   w-full max-w-2xl flex justify-center  drop-shadow-lg shadow-red-900 rounded-none border-4 border-gray-900  filter-none mx-auto ">
        <Typography variant="h4" color="blue-gray">
          Create a new videogame
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details into a new videogame.
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2  max-w-2xl w-full grid grid-cols-6 gap-y-4 "
        >
          <div className="flex flex-wrap  col-span-6">
            <Input
              className="w-full"
              label="Name"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "El nombre es obligatorio",
                },
                minLength: {
                  value: 3,
                  message: "Debe tener minimo 3 caracteres",
                },
              })}
            />
            {errors.name?.message && (
              <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="col-span-6">
            <Textarea
              className=""
              label="Description"
              name="description"
              {...register("description", {
                required: {
                  value: true,
                  message: "Se requiere una descripcion del juego",
                },
                minLength: {
                  value: 30,
                  message: "Debe tener almenos 30 caracteres",
                },
              })}
            />
            {errors.description?.message && (
              <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="col-span-6">
            <Input
              label="image url"
              name="background_image"
              {...register("background_image", {
                required: {
                  value: true,
                  message: "Se requiere una URL de imagen",
                },
                pattern: {
                  value: /\.([0-9a-z]+)(?:[\?#]|$)/i,
                  message: "La url debe ser valida",
                },
              })}
            />
            {errors.background_image?.message && (
              <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                {errors.background_image.message}
              </span>
            )}
          </div>
          <div className="col-span-6">
            <Input
              className=" "
              label="rating"
              name="rating"
              {...register("rating")}
              {...register("rating", {
                required: { value: true, message: "Califica el juego" },
                min: { value: 1, message: "El valor minimo es 1" },
                max: { value: 5, message: "El valor maximo es 5" },
              })}
            />
            {errors.rating?.message && (
              <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                {errors.rating.message}
              </span>
            )}
          </div>
          <div className="col-span-6">
            <Input
              className=""
              label="web url"
              name="website"
              {...register("website", {
                required: {
                  value: true,
                  message: "Debe ser una url valida",
                },
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Debe ingresar una Url valida",
                },
              })}
            />
            {errors.website?.message && (
              <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                {errors.website.message}
              </span>
            )}
          </div>
          <div className="col-span-6 flex flex-wrap gap-y-4">
            <Controller
              control={control}
              name="genres"
              rules={{
                required: {
                  value: true,
                  message: "Debe seleccionar almenos 1 categoria",
                },
                validate: (value) =>
                  value.length < 5 || "Debe tener menos de 5 categorias",
              }}
              render={({ field: { onChange, name, ref } }) => (
                <Select
                  isMulti
                  closeMenuOnSelect={false}
                  onChange={(e) => onChange(e)}
                  name={name}
                  options={genres}
                  ref={ref}
                  className="w-full"
                />
              )}
            />
            {errors.genres?.message && (
              <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                {errors.genres.message}
              </span>
            )}
            <Controller
              control={control}
              name="platforms"
              rules={{
                required: {
                  value: true,
                  message: "Debe seleccionar al menos 1 plataforma",
                },
                validate: (value) =>
                  value.length < 5 || "Debe tener menos de 5 plataformas",
              }}
              render={({ field: { onChange, name, ref } }) => (
                <Select
                  isMulti
                  closeMenuOnSelect={false}
                  onChange={(e) => onChange(e)}
                  name={name}
                  options={platforms}
                  ref={ref}
                  className="w-full"
                />
              )}
            />
            {errors.platforms?.message && (
              <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                {errors.platforms.message}
              </span>
            )}
          </div>
          <Button
            className="mt-6 bg-blue-600 col-span-6 border-2 border-black hover:shadow-inner hover:shadow-[#244156]/90 shadow-284b63-900 rounded-none hover: shadow-inner"
            fullWidth
            type="submit"
          >
            CREAR JUEGO
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateGame;
