import React, { useState } from "react"
import { string, object, number, boolean, mixed } from "yup"
import { navigate } from "gatsby"
import axios from "axios"
import { BlobProvider } from "@react-pdf/renderer"
import SubscriptionPdf from "./subscriptionPdf"
import CustomForm from "./common/customForm"
import { Alert } from "react-bootstrap"

function SubscriptionForm({ property }) {
  const [formValues, setFormValues] = useState({})
  const [post, setPost] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [count, setCount] = useState(0)

  const fields = [
    {
      label: "Surname",
      name: "surname",
      value: "",
      placeholder: "Enter Surname",
      size: "sm",
    },
    {
      label: "Other Names",
      name: "otherNames",
      value: "",
      placeholder: "Enter First Name and Middle Name(if any)",
      size: "sm",
    },
    {
      label: "Sex",
      name: "sex",
      as: "select",
      value: "",
      options: ["Male", "Female"],
      size: "sm",
    },
    {
      label: "Marital Status",
      name: "maritalStatus",
      as: "select",
      value: "",
      options: ["Single", "Married", "Divorced"],
      size: "sm",
    },
    {
      label: "Phone Num.",
      name: "phone",
      value: "",
      phoneInput: true,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      value: "",
      placeholder: "Email",
      size: "sm",
    },
    {
      label: "Postal Address",
      name: "postalAddress",
      value: "",
      placeholder: "Enter postal address",
      size: "sm",
    },
    {
      label: "Residential Address",
      name: "resAddress",
      value: "",
      placeholder: "Enter residential address",
      size: "sm",
    },
    {
      label: "Occupation",
      name: "occupation",
      placeholder: "Enter Occupation",
      value: "",
      size: "sm",
    },
    {
      label: "Employer's Name and Address",
      name: "employerDetail",
      placeholder: "Separate employers name and  address by comma",
      value: "",
      size: "sm",
    },
    {
      label: "Next of Kin Name",
      name: "kinName",
      placeholder: "Enter name of next of kin",
      value: "",
      size: "sm",
    },
    {
      label: "Next of Kin's Address",
      name: "kinAddress",
      placeholder: "Enter next of kin address",
      value: "",
      size: "sm",
    },
    {
      label: "Next of Kin's  phone number",
      phoneInput: true,
      name: "kinPhone",
      value: "",
    },
    {
      label: "Type of Plot",
      name: "plotType",
      value: "",
      as: "select",
      options: ["residential", "commercial"],
      size: "sm",
    },
    {
      label: "Number of Plot",
      name: "plotNum",
      type: "number",
      value: "",
      size: "sm",
    },
    {
      label: "Payment Option",
      name: "paymentOption",
      value: "",
      as: "select",
      options: ["Full", "6 Months", "12 Months"],
      size: "sm",
    },
    {
      label: "Referred by",
      name: "refName",
      placeholder: "Enter Referral's Name",
      value: "",
      size: "sm",
    },
    {
      label: "Referral's Phone no.",
      name: "refPhone",
      phoneInput: true,
      value: "",
      size: "sm",
    },
    {
      label: "Passport",
      name: "passport",
      value: "",
      passport: true,
    },
    {
      label: "Signature",
      signature: true,
      name: "signature",
      value: "",
    },
    {
      label:
        "I hereby affirm that all information provided as requirement for the allocation of land in " +
        `${property.name} at ${property.location} is true. Any false or inaccurate information given` +
        "by me may result in the decline of my application. I also acknowledge that I have gone through the FAQ " +
        "and that the Information Provided and Terms Herewith Is Acceptable and Consented by Me.",
      type: "checkbox",
      name: "agree",
      checked: false,
      block: true,
    },
    { name: "token", value: "", recaptcha: true },
  ]

  const schema = object().shape({
    surname: string().required("Your Surname is required"),
    otherNames: string().required("Please provide your other names"),
    sex: string().required("Please select a sex"),
    maritalStatus: string().required("Please select a marital status"),
    phone: string().required("Your phone number is required"),
    email: string()
      .email("Invalid email address")
      .required("Your email is required"),
    postalAddress: string(),
    resAddress: string().required("Your residential address is required"),
    occupation: string().required("Please occupation is required"),
    employerDetail: string().required(
      "The name and address of your employer is required"
    ),
    kinName: string().required("The name of your next of kin is required"),
    kinAddress: string().required(
      "The address of your next of kin is required"
    ),
    kinPhone: string().required(
      "The phone number of your next of kin is required"
    ),
    signature: string().required("Your signature is required"),
    plotType: string().required("Please select a plot type"),
    plotNum: number()
      .min(1, "Select one or more plots")
      .required("Please enter the number of plot(s) you want"),
    paymentOption: string().required("Please select a payment option"),
    passport: mixed().required("Please upload your passport"),
    agree: boolean()
      .oneOf([true], "Please Accept Terms & Conditions before submitting")
      .required("Please Accept Terms & Conditions before submitting"),
    refName: string(),
    refPhone: string(),
    token: string()
      .required("Please tick the recaptcha box")
      .nullable("Verifiction expired"),
  })

  const handleSubmit = async values => {
    await setFormValues(values)
    setPost(true)
  }

  return (
    <>
      {error && !success && (
        <Alert variant="danger">
          <p>{error}</p>
        </Alert>
      )}
      <CustomForm
        fields={fields}
        schema={schema}
        handleSubmit={handleSubmit}
        buttonText="Continue"
        error={error}
        success={success}
        subscription={true}
      />
      {post && count === 0 && (
        <div>
          <BlobProvider
            document={
              <SubscriptionPdf formValues={formValues} property={property} />
            }
          >
            {({ blob, url, loading, error }) => {
              if (!loading && !error) {
                const data = new FormData()
                data.append("file", blob)
                data.append("token", formValues.token)
                axios({
                  method: "post",
                  url: "/api/uploadPdf",
                  data,
                })
                  .then(async res => {
                    await setPost(false)
                    await setCount(1)
                    await setSuccess(res.data.message)
                    navigate(`/properties/${property.shortName}`, {
                      state: {
                        success: res.data.message,
                        error: null,
                        formValues,
                      },
                    })
                  })
                  .catch(err => {
                    setError(err.response.data.error)
                  })
              }
              if (error) {
                console.log(error.response)
                setError("Unexpected error. Please try again")
              }
              return null
            }}
          </BlobProvider>
        </div>
      )}
    </>
  )
}

export default SubscriptionForm
