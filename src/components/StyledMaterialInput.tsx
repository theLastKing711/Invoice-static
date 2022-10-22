import {
  ErrorMessage,
  FieldValuesFromFieldErrors,
} from "@hookform/error-message";
import { Input, InputLabel, InputProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Control,
  DeepRequired,
  FieldErrorsImpl,
  FieldName,
  FieldValues,
  Path,
  RegisterOptions,
  useController,
} from "react-hook-form";

const TextInput = styled(Input)<InputProps>(({ theme }) => ({
  width: "100%",
  color: "white",
  backgroundColor: theme.palette.background.default,
  padding: "1rem",
  borderRadius: "3px",
  marginBottom: "0.25 rem",
  fontWeight: "bold",
}));

interface Props<TFormValues extends FieldValues> {
  inputProps?: InputProps;
  control: Control<any, any>;
  controlName: Path<TFormValues>;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  EName: FieldName<
    FieldValuesFromFieldErrors<
      Partial<FieldErrorsImpl<DeepRequired<TFormValues>>>
    >
  >;
}

const StyledMaterialInput = <TFormValues extends FieldValues>({
  inputProps,
  control,
  controlName,
  rules,
  EName,
}: Props<TFormValues>) => {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields, errors },
  } = useController({
    name: controlName,
    control,
    rules,
    defaultValue: inputProps?.value as any,
  });

  console.log("value", value);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
        marginBottom: "1.25rem",
      }}
    >
      <InputLabel sx={{ color: "white" }}>{inputProps?.title}</InputLabel>
      <TextInput
        // {...inputProps}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={controlName}
        inputRef={ref}
        error={error?.message != undefined}
      />
      <p>{value}</p>
      <ErrorMessage
        errors={errors}
        name={EName}
        render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
      />
    </div>
  );
};

export default StyledMaterialInput;
