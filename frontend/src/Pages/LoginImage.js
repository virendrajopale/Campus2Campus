import React from 'react'
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select
  } from "@mui/material";
  import { Controller, useForm } from "react-hook-form";
  
  const FCWidth = {
    width: "20rem"
  };
  
const LoginImage = () => {
    const { control, handleSubmit } = useForm();
    const formSubmitHandler = (formData) => {
      console.log(formData);
    };
  
    const ages = ["10", "20", "30"];
  
    return (
      <div className="App">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Controller
            name="age"
            control={control}
            type="text"
            defaultValue={[]}
            render={({ field }) => (
              <FormControl sx={FCWidth}>
                <InputLabel id="age">Age</InputLabel>
                <Select
                  {...field}
                  labelId="age"
                  label="age"
                  multiple
                  defaultValue={[]}
                >
                  {ages.map((age) => (
                    <MenuItem value={age} key={age}>
                      {age}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
          <FormControl sx={FCWidth}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: ".75rem", fontWeight: "bold" }}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
  

export default LoginImage