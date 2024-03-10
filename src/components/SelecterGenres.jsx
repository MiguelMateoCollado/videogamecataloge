import Select from "react-select";
import useSelectGenres from "../hooks/useSelectGenres";
const SelecterGenres = () => {
  const { handleSelect, genres } = useSelectGenres();

  return (
    <div className="md:w-2/4 w-full z-auto">
      <Select
        options={genres.genres}
        onChange={(e) => handleSelect(e.value)}
        label="Select Version"
      ></Select>
    </div>
  );
};

export default SelecterGenres;
