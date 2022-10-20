import styled from "styled-components";
import StyledMaterialInput from "./StyledMaterialInput";
import {
  DesktopDatePicker,
  DesktopDatePickerProps,
} from "@mui/x-date-pickers/DesktopDatePicker";
import { styled as materialStyled } from "@mui/material/styles";
import {
  Button,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Dayjs } from "dayjs";
import React from "react";
import { IInvoiceItem, IInvoiceForm } from "../types";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const StyledDialog = materialStyled(DesktopDatePicker)<
  DesktopDatePickerProps<number, string>
>(({ theme }) => ({
  "& .MuiPickersDay-root": {
    color: "white",
  },

  // "& .MuiDialog-container": {
  //   justifyContent: "flex-start",
  //   padding: "115px 0 0 0",
  //   [theme.breakpoints.up("lg")]: {
  //     padding: "0 0 0 115px",
  //   },
  //   "& .MuiDialog-paper": {
  //     margin: 0,
  //     minHeight: "100%",
  //     padding: "3rem 2rem 1.5rem",
  //     width: "100%",
  //     [theme.breakpoints.up("lg")]: {
  //       width: "calc(50vw - 115px)",
  //     },
  //     backgroundColor: theme.palette.background.paper,
  //     maxWidth: "100vw",
  //   },
  //   "& .dialog-header": {
  //     color: "white",
  //     fontSize: "1.5rem",
  //     marginBottom: "3rem",
  //   },
  // },
}));

const StyledForm = styled.form`
  .form-section {
    margin-bottom: 2rem;

    &__title {
      margin-bottom: 1.5rem;
      color: ${(props) => props.color};
    }

    &__delete-item-button {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__total {
      color: white;
    }
  }
`;

interface Props {
  invoice: IInvoiceForm;
  handleCancelClicked: () => void;
  handleSaveClicked: () => void;
}

const items: IInvoiceItem[] = [
  {
    name: "first item",
    price: 200,
    quantity: 15,
  },
  {
    name: "second item",
    price: 400,
    quantity: 10,
  },
  {
    name: "third item",
    price: 500,
    quantity: 5,
  },
];

type FormData = {
  firstName: string;
  lastName: string;
};

const InvoiceForm: React.FC<Props> = ({
  invoice,
  handleCancelClicked,
  handleSaveClicked,
}: Props) => {
  const theme = useTheme();

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    reValidateMode: "onBlur",
  });

  const defaultBgColor = theme.palette.background.default;

  const handleChange = (newValue: Dayjs | null) => {
    console.log("hello world");
  };

  console.log("errors", errors);

  return (
    <StyledForm className="form" color={theme.palette.primary.main}>
      <StyledMaterialInput controlName="firstName" control={control} />
      {errors.firstName && <h2>alsdjlasd</h2>}
      {/* <div className="form-section">
        <div className="form-section__title">Bill Form</div>
        <Grid container columnSpacing={2}>
          <Grid item xs={12}>
            <Controller
              control={control}
              name="firstName"
              rules={{
                required: true,
                min: 4,
              }}
              render={({
                field: { onChange, onBlur, value, ref, name, ...field },
                fieldState: { error },
                formState: { errors },
              }) => (
                <>
                  <StyledMaterialInput
                    onChange={onChange}
                    onBlur={onBlur}
                    title="first name"
                    name={name}
                    inputRef={ref}
                    error={true}
                  />
                  <h2>{errors.firstName?.message}</h2>
                  <h2>{error?.message}</h2>
                </>
              )}
            />
            {errors.firstName && "errors"}
            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ message }) => <p>{message} is required</p>}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledMaterialInput
              title="City"
              controlName="lastName"
              control={control}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledMaterialInput title="Postal Code" />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledMaterialInput title="Address" />
          </Grid>
        </Grid>
      </div>
      <div className="form-section">
        <div className="form-section__title">Bill To</div>
        <Grid container columnSpacing={2}>
          <Grid item xs={12}>
            <StyledMaterialInput title="Clients's Name" />
          </Grid>
          <Grid item xs={12}>
            <StyledMaterialInput title="Clients's Email" />
          </Grid>
          <Grid item xs={12}>
            <StyledMaterialInput title="Street Address" />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledMaterialInput title="City" />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledMaterialInput title="Post Code" />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledMaterialInput title="Country" />
          </Grid>
          <Grid item xs={12} md={6}>
            <DesktopDatePicker
              disabled
              inputFormat="MM/DD/YYYY"
              renderInput={(params) => <TextField {...params} fullWidth />}
              onChange={handleChange}
              value={undefined}
              PopperProps={{
                sx: {
                  "& .MuiPickersDay-root": {
                    color: "white",
                  },
                  "& .MuiDayPicker-weekDayLabel": {
                    color: "white",
                  },
                  "&. MuiPickersCalendarHeader-label": {
                    color: "white",
                    ":hover": {
                      color: "red",
                    },
                  },
                },
              }}
              InputProps={{
                sx: {
                  // color: "white",
                  "& :disabled": {
                    color: "white",
                    WebkitTextFillColor: "white",
                    opacity: 0.5,
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "white",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              fullWidth
              sx={{ display: "flex", flexDirection: "column" }}
            >
              asf
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={undefined}
                onChange={() => {}}
                sx={{
                  backgroundColor: defaultBgColor,
                  color: "white",
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <StyledMaterialInput title="Project Description" />
          </Grid>
        </Grid>
      </div>
      <div className="form-section">
        <Typography
          variant="h5"
          component="h3"
          sx={{ marginBottom: "1.5rem", color: "white" }}
        >
          Item List
        </Typography>
        <ul>
          <li>
            <Grid container columnSpacing={1.25}>
              <Grid item xs={12} md={4}>
                <StyledMaterialInput title="Item Name" />
              </Grid>
              <Grid item xs={3} md={2}>
                <StyledMaterialInput title="Qty" />
              </Grid>
              <Grid item xs={4} md={3}>
                <StyledMaterialInput title="Price" />
              </Grid>
              <Grid
                item
                xs={4}
                md={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  color: "white",
                }}
              >
                <label htmlFor="total">Total</label>
                <div
                  className="form-section__total"
                  id="total"
                  style={{ padding: "1rem 0" }}
                >
                  25
                </div>
              </Grid>
              <Grid
                item
                xs={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // marginBottom: "1rem",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="delete item"
                  className="form-section__delete-item-button"
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </li>
          <li>
            <Grid container columnSpacing={1.25}>
              <Grid item xs={12} md={4}>
                <StyledMaterialInput title="Item Name" />
              </Grid>
              <Grid item xs={3} md={2}>
                <StyledMaterialInput title="Qty" />
              </Grid>
              <Grid item xs={4} md={3}>
                <StyledMaterialInput title="Price" />
              </Grid>
              <Grid
                item
                xs={4}
                md={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  color: "white",
                }}
              >
                <label htmlFor="total">Total</label>
                <div
                  className="form-section__total"
                  id="total"
                  style={{ padding: "1rem 0" }}
                >
                  25
                </div>
              </Grid>
              <Grid
                item
                xs={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // marginBottom: "1rem",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="delete item"
                  className="form-section__delete-item-button"
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </li>
        </ul>
        <Button
          fullWidth
          variant="contained"
          sx={{
            borderRadius: "1000px",
            color: "white",
            padding: "1rem",
            textTransform: "none",
            backgroundColor: theme.palette.background.default,
          }}
        >
          + Add New Item
        </Button>
      </div>
      <CardActions
        sx={{ padding: "0", justifyContent: "flex-end", marginTop: "3rem" }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: "1000px",
            color: "white",
            padding: "0.875rem 1.75rem",
            textTransform: "none",
            backgroundColor: theme.palette.background.default,
          }}
          onClick={handleCancelClicked}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "1000px",
            color: "white",
            padding: "0.875rem 1.75rem",
            textTransform: "none",
          }}
          color="primary"
          onClick={handleSaveClicked}
        >
          Save Changes
        </Button>
      </CardActions> */}
    </StyledForm>
  );
};

export default InvoiceForm;
