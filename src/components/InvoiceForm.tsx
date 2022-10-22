import styled from "styled-components";
import StyledMaterialInput from "./StyledMaterialInput";
import {
  Button,
  CardActions,
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
import { Dayjs } from "dayjs";
import React from "react";
import { IInvoiceItem, IInvoiceForm } from "../types";
import { useFieldArray, useForm } from "react-hook-form";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { defaultInvoice } from "../constants";
import DeleteIcon from "@mui/icons-material/Delete";

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
    id: 1,
    name: "first item",
    price: 200,
    quantity: 15,
  },
  {
    id: 2,
    name: "second item",
    price: 400,
    quantity: 10,
  },
  {
    id: 3,
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
    control,
    setValue,
    handleSubmit,

    formState: { errors },
  } = useForm<IInvoiceForm>({
    defaultValues: defaultInvoice,
    reValidateMode: "onBlur",
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "items", // unique name for your Field Array
    }
  );

  const defaultBgColor = theme.palette.background.default;

  const handleChange = (newValue: Dayjs | null) => {
    console.log("hello world");
  };

  // console.log("errors", errors);

  const submit = (values: any) => {
    console.log("alksjd");
  };

  const calculateTotal = (quantity: number, price: number): number => {
    console.log("first", quantity);
    console.log("second", price);

    return quantity * price;
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(submit)}
      className="form"
      color={theme.palette.primary.main}
    >
      <div className="form-section">
        <div className="form-section__title">Bill Form</div>
        <Grid container columnSpacing={2}>
          <Grid item xs={12}>
            <StyledMaterialInput
              controlName="billFrom.streetAddress"
              EName="billFrom.streetAddress"
              control={control}
              rules={{
                required: "Street Address is required",
              }}
              inputProps={{
                title: "Street Address",
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledMaterialInput
              controlName="billFrom.city"
              EName="billFrom.city"
              control={control}
              rules={{
                required: "City is required",
              }}
              inputProps={{
                title: "City",
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledMaterialInput
              controlName="billFrom.postCode"
              EName="billFrom.postCode"
              control={control}
              rules={{
                required: "Post Code is required",
              }}
              inputProps={{
                title: "Post Code",
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledMaterialInput
              controlName="billFrom.country"
              EName="billFrom.country"
              control={control}
              rules={{
                required: "Country is required",
              }}
              inputProps={{
                title: "Country",
              }}
            />
          </Grid>
        </Grid>
      </div>
      <div className="form-section">
        <div className="form-section__title">Bill To</div>
        <Grid container columnSpacing={2}>
          <Grid item xs={12}>
            <StyledMaterialInput
              controlName="billTo.clientName"
              EName="billTo.clientName"
              control={control}
              rules={{
                required: "Client's Name is required",
              }}
              inputProps={{
                title: "Client's Name",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledMaterialInput
              controlName="billTo.clientEmail"
              EName="billTo.clientEmail"
              control={control}
              rules={{
                required: "Client's Email is required",
              }}
              inputProps={{
                title: "Client's Email",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledMaterialInput
              controlName="billTo.streetAddress"
              EName="billTo.streetAddress"
              control={control}
              rules={{
                required: "Street Address is required",
              }}
              inputProps={{
                title: "Street Address",
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledMaterialInput
              controlName="billTo.city"
              EName="billTo.city"
              control={control}
              rules={{
                required: "City is required",
              }}
              inputProps={{
                title: "City",
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledMaterialInput
              controlName="billTo.postCode"
              EName="billTo.postCode"
              control={control}
              rules={{
                required: "Post Code is required",
              }}
              inputProps={{
                title: "Post Code",
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledMaterialInput
              controlName="billTo.country"
              EName="billTo.country"
              control={control}
              rules={{
                required: "Country is required",
              }}
              inputProps={{
                title: "Country",
              }}
            />
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
            <StyledMaterialInput
              controlName="projectDescription"
              EName="projectDescription"
              control={control}
              rules={{
                required: "Client's Email is required",
              }}
              inputProps={{
                title: "Client's Email",
              }}
            />
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
          {fields.map((item, index) => (
            <li key={item.id}>
              <p>{item.quantity} asd lksajdfl kajsdlkf j</p>
              <Grid container columnSpacing={1.25}>
                <Grid item xs={12} md={4}>
                  <StyledMaterialInput
                    controlName={`items.${index}.itemName.value`}
                    EName={`items.${index}.itemName.value`}
                    control={control}
                    rules={{
                      required: "Item Name is required",
                    }}
                    inputProps={{
                      title: "Item Name",
                      value: "",
                    }}
                  />
                </Grid>
                <Grid item xs={3} md={2}>
                  <StyledMaterialInput
                    controlName={`items.${index}.quantity.value`}
                    EName={`items.${index}.quantity.value`}
                    control={control}
                    rules={{
                      required: "Qty is required",
                    }}
                    inputProps={{
                      title: "Qty",
                      value: item.quantity,
                    }}
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <StyledMaterialInput
                    controlName={`items.${index}.price.value`}
                    EName={`items.${index}.price.value`}
                    control={control}
                    rules={{
                      required: "Price is required",
                    }}
                    inputProps={{
                      title: "Price",
                      value: item.price,
                    }}
                  />
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
                  <label htmlFor={`total${item.id}`}>Total</label>
                  <div
                    className="form-section__total"
                    id={`total${item.id}`}
                    style={{ padding: "1rem 0" }}
                  >
                    {calculateTotal(item.quantity, item.quantity)}
                  </div>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    alignSelf: "flex-start",
                    marginTop: "2.3rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="delete item"
                    className="form-section__delete-item-button"
                    onClick={() => remove(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </li>
          ))}
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
          onClick={() =>
            append({
              id: Math.random(),
              name: "alsdkj",
              price: 25,
              quantity: 25,
            })
          }
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
          type="submit"
          color="primary"
          onClick={handleSaveClicked}
        >
          Save Changes
        </Button>
      </CardActions>
    </StyledForm>
  );
};

export default InvoiceForm;
