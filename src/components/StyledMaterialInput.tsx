import { Input, InputLabel, InputProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Control, useController } from "react-hook-form";

const TextInput = styled(Input)<InputProps>(({ theme }) => ({
  width: "100%",
  color: "white",
  backgroundColor: theme.palette.background.default,
  padding: "1rem",
  borderRadius: "3px",
  marginBottom: "1.25rem",
  fontWeight: "bold",
}));

interface Props {
  props?: InputProps;
  control: Control<FormData, any>;
  controlName: string;
}

type FormData = {
  firstName: string;
  lastName: string;
};

const StyledMaterialInput = ({ props, control, controlName }: Props) => {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields, errors },
  } = useController({
    name: "firstName",
    control,
    rules: { required: true },

    defaultValue: "",
  });

  console.log("error", error);

  console.log("errors", errors);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
      }}
    >
      <InputLabel sx={{ color: "white" }}>{props?.title}</InputLabel>
      <TextInput
        // {...props}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={controlName}
        inputRef={ref}
        error={error?.message != undefined}
      />
      {error && error.message && <h2>hello world</h2>}
      {isDirty && <h2></h2>}
      {/* {error && } */}
    </div>
  );
};

export default StyledMaterialInput;
