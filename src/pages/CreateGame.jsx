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
    setError,
    clearErrors,
    errors,
  } = useCreateGame();
  console.log(errors);
  return (
    <div className="min-h-screen flex items-center">
      <Card className="bg-white  p-5  flex justify-center  drop-shadow-lg shadow-red-900 rounded-none border-4 border-gray-900  filter-none mx-auto  ">
        <Typography variant="h4" color="blue-gray">
          Create a new videogame
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details into a new videogame.
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 w-auto max-w-screen-lg mx-auto sm:w-auto"
        >
          <div className="mb-4 flex flex-wrap gap-6">
            <div className="flex w-full gap-3 flex-wrap">
              <div className="flex flex-wrap w-full">
                <Input
                  className="w-1/4"
                  label="Name"
                  name="name"
                  {...register("name", {
                    required: true,
                    minLength: 3,
                  })}
                />
                {errors.name?.type === "required" && (
                  <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                    Se requiere el nombre
                  </span>
                )}
                {errors.name?.type === "minLength" && (
                  <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                    Debe tener minimo 3 caracteres
                  </span>
                )}
              </div>
              <div className="flex flex-wrap w-full">
                <Textarea
                  className="w-1/2"
                  label="Description"
                  name="description"
                  {...register("description", {
                    required: true,
                    minLength: 50,
                  })}
                />
                {errors.description?.type === "required" && (
                  <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                    Se requiere un descripcion
                  </span>
                )}
                {errors.description?.type === "minLength" && (
                  <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                    debe ser mas larga minimo 50 caracteres
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-wrap w-full gap-3">
              <Input
                className="w-1/2"
                label="image url"
                name="background_image"
                {...register("background_image", {
                  required: true,
                  pattern: /^(ftp|http|https):\/\/[^ "]+$/,
                })}
              />
              {errors.background_image?.type === "required" && (
                <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                  debe ingresar una imagen
                </span>
              )}
              {errors.background_image?.type === "pattern" && (
                <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                  debe ser una url valida
                </span>
              )}
            </div>
            <div className="flex w-full gap-3">
              <div className="flex flex-wrap w-full">
                <Input
                  className="w-1/2"
                  label="rating"
                  name="rating"
                  {...register("rating")}
                  {...register("rating", {
                    required: true,
                    min: 1,
                    max: 5,
                  })}
                />
                {errors.rating?.type === "minLength" && (
                  <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                    debe ser mayor a 0
                  </span>
                )}
                {errors.rating?.type === "max" && (
                  <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                    debe ser menor a 5
                  </span>
                )}
              </div>
              <div className="flex flex-wrap w-full">
                <Input
                  className="w-1/2"
                  label="web url"
                  name="website"
                  {...register("website", {
                    required: true,
                    pattern: /^(ftp|http|https):\/\/[^ "]+$/,
                  })}
                />
                {errors.website?.type === "required" && (
                  <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                    debe ingresar una url
                  </span>
                )}
                {errors.website?.type === "pattern" && (
                  <span className="p-2 text-xs tracking-wider mt-2 text-gray-700 rounded-lg bg-red-500">
                    debe ser una url valida
                  </span>
                )}
              </div>
            </div>
            <div className="flex w-full gap-3 sm:flex-wrap  flex-wrap">
              <Controller
                control={control}
                name="genres"
                rules={{ required: true, minLength: 3 }}
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

              <Controller
                control={control}
                name="platforms"
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
            </div>

            {/*
            <div className="flex justify-center flex-wrap w-full gap-3 divide-y my-2 border-black border-t p-3">
              <h3 className="w-full">Select Platforms</h3>
              <CheckBoxList
                items={platforms}
                func={register}
                type={"platforms"}
                setErrors={setError}
                values={getValues()}
                clear={clearErrors}
              />
            </div>
            */}

            {/*
                     <div className="flex justify-center flex-wrap w-full gap-3 divide-y my-2 border-black border-t p-3">
              <h3 className="w-full">Select Genres</h3>
              <CheckBoxList
                items={genres}
                func={register}
                type={"genres"}
                setErrors={setError}
                values={getValues()}
                clear={clearErrors}
              />
            </div>
              */}
          </div>

          <Button
            className="mt-6 bg-blue-600 border-2 border-black hover:shadow-inner hover:shadow-[#244156]/90 shadow-284b63-900 rounded-none hover: shadow-inner"
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
