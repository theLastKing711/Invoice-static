import styled from "styled-components";
import StyledMaterialInput from "./StyledMaterialInput";
import {
  Button,
  CardActions,
  FormControl,
  Grid,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Dayjs } from "dayjs";
import React from "react";
import { IInvoiceForm, IPaymentTermOption } from "../types";
import { useFieldArray, useForm, useWatch, Controller } from "react-hook-form";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { paymentTermOptions } from "../constants";
import DeleteIcon from "@mui/icons-material/Delete";
import { NativeSelect } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
  paymentOptions: IPaymentTermOption[];
  isEdit?: boolean;
  handleCancelClicked: () => void;
  handleSaveClicked: (invoce: IInvoiceForm) => void;
}

const InvoiceForm: React.FC<Props> = ({
  invoice,
  paymentOptions,
  isEdit = false,
  handleCancelClicked,
  handleSaveClicked,
}: Props) => {
  const theme = useTheme();

  const primaryColor = theme.palette.primary.main;

  const { control, handleSubmit, setValue } = useForm<IInvoiceForm>({
    defaultValues: invoice,
    reValidateMode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "items", // unique name for your Field Array
  });

  const defaultBgColor = theme.palette.background.default;

  console.log("invoice", invoice);

  const handleDateChange = (newValue: Dayjs | null): void => {
    if (newValue == null) {
      return;
    }

    const dateAsString = constructDateFromDayJs(newValue);

    console.log("date as string", dateAsString);

    setValue("date", dateAsString);
  };

  const constructDateFromDayJs = (value: Dayjs): string => {
    console.log("value", value.year());

    return `${value.month() + 1}/${value.date()}/${value.year()}`;
  };

  const submit = (values: IInvoiceForm) => {
    console.log("values", values);
    const randomId: string = getRandomIntWithOffset(1000, 3000).toString();

    const updateValues: IInvoiceForm = {
      ...values,
      id: isEditMode(isEdit) ? invoice.id : randomId,
    };

    handleSaveClicked(updateValues);
  };

  const calculateTotal = (quantity: number, price: number): number => {
    return quantity * price;
  };

  const watchFieldArray = useWatch({
    control,
    name: "items",
  });

  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  function getRandomIntWithOffset(max: number, offset: number) {
    const randomNumber = Math.floor(Math.random() * max) + offset;

    return randomNumber;
  }

  const isEditMode = (status: boolean): boolean => {
    return status === true;
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
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
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
          <Grid item container flexDirection="column" xs={12} md={6}>
            <label
              htmlFor="dueDate"
              style={{
                color: "white",
                marginBottom: "0.5rem",
              }}
            >
              Due Date
            </label>
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <DesktopDatePicker
                  disabled={isEditMode(isEdit)}
                  inputFormat="MM/DD/YYYY"
                  renderInput={(params) => (
                    <TextField
                      id="dueDate"
                      {...params}
                      fullWidth
                      ref={ref}
                      // onChange={onChange}
                      value={value}
                    />
                  )}
                  onChange={handleDateChange}
                  value={value}
                  PopperProps={{
                    sx: {
                      // "& .MuiPickersDay-root": {
                      //   color: "white",
                      // },
                      // "& .MuiDayPicker-weekDayLabel": {
                      //   color: "white",
                      // },
                      // "&. MuiPickersCalendarHeader-label": {
                      //   color: "white",
                      //   ":hover": {
                      //     color: "red",
                      //   },
                      // },
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
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1.25rem",
              }}
            >
              <label
                htmlFor="select"
                style={{ marginBottom: "0.5rem", color: "white" }}
              >
                Payment Terms
              </label>
              <Controller
                control={control}
                name="paymentTerms"
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                  <NativeSelect
                    id="select"
                    name={name}
                    disabled={isEditMode(isEdit)}
                    sx={{
                      marginTop: "0 !important",
                      backgroundColor: defaultBgColor,
                      "& .MuiNativeSelect-select": {
                        padding: "1.05rem",
                        color: "white",
                      },
                      "& .MuiSvgIcon-root": {
                        color: primaryColor,
                      },
                    }}
                    IconComponent={KeyboardArrowDownIcon}
                    onChange={onChange}
                    value={value}
                    ref={ref}
                  >
                    {paymentOptions.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.value}
                      </option>
                    ))}
                  </NativeSelect>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <StyledMaterialInput
              controlName="projectDescription"
              EName="projectDescription"
              control={control}
              rules={{
                required: "Project Description is required",
              }}
              inputProps={{
                title: "Project Description",
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
          {controlledFields.map((item, index) => (
            <li key={item.id}>
              <Grid container columnSpacing={1.25}>
                <Grid item xs={12} md={4}>
                  <StyledMaterialInput
                    controlName={`items.${index}.name`}
                    EName={`items.${index}.name`}
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
                    controlName={`items.${index}.quantity`}
                    EName={`items.${index}.quantity`}
                    control={control}
                    rules={{
                      required: "Qty is required",
                      pattern: {
                        value: /^\d+$/,
                        message: "only positive numbers are valid",
                      },
                    }}
                    inputProps={{
                      title: "Qty",
                      value: item.quantity,
                    }}
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <StyledMaterialInput
                    controlName={`items.${index}.price`}
                    EName={`items.${index}.price`}
                    control={control}
                    rules={{
                      required: "Price is required",
                      pattern: {
                        value: /^\d+$/,
                        message: "only positive numbers are valid",
                      },
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
                    {calculateTotal(item.quantity, item.price)}
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
              name: "",
              price: 0,
              quantity: 0,
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
        >
          Save Changes
        </Button>
      </CardActions>
    </StyledForm>
  );
};

export default InvoiceForm;
