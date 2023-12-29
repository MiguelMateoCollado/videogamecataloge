import { Checkbox, Card, List, Typography } from "@material-tailwind/react";
import { Fragment } from "react";
import useCreateGame from "../hooks/useCreateGame";
const CheckBoxList = ({ items, type, func, setErrors, values, clear }) => {
  console.log(values);
  return (
    <Card className="w-full flex flex-wrap">
      <List className="flex flex-wrap flex-row">
        {items?.map((item) => {
          return (
            <Fragment key={item.id}>
              <label
                key={item.id}
                htmlFor={item.name}
                className="flex cursor-pointer w-auto items-center px-3 py-2"
              >
                <Checkbox
                  ripple={false}
                  className="hover:before:opacity-0"
                  name={item.name}
                  value={item.name}
                  {...func(type)}
                  containerProps={{
                    className: "p-0 px-2",
                  }}
                />
                <Typography color="blue-gray" className="font-medium">
                  {item.name}
                </Typography>
              </label>
            </Fragment>
          );
        })}
      </List>
    </Card>
  );
};

export default CheckBoxList;
