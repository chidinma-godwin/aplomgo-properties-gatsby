import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Col } from "react-bootstrap"
import { Formik } from "formik"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import SignatureCanvas from "react-signature-canvas"
import styled from "styled-components"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import ReCAPTCHA from "react-google-recaptcha"
import PassportUploader from "./passportUploader"

const CustomAlert = styled.div`
  color: red;
`

const ClearButton = styled(Button)`
  margin-bottom: 30px;
`

function CustomForm({
  fields,
  schema,
  handleSubmit,
  buttonText,
  newsletter,
  error,
  success,
}) {
  const [file, setFile] = useState({})

  const onDrop = (acceptedFiles, setFieldValue, name) => {
    const acceptedFile = acceptedFiles[0]
    setFieldValue(name, acceptedFile)
    setFile(() => {
      const preview = URL.createObjectURL(acceptedFile)
      return { ...acceptedFile, preview }
    })
  }

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      URL.revokeObjectURL(file.preview)
    },
    [file]
  )

  const getInitialValues = fields => {
    const initialValues = {}
    fields.forEach(field => {
      if (!initialValues[field.name]) {
        if (field.type === "checkbox") {
          initialValues[field.name] = field.checked
        } else {
          initialValues[field.name] = field.value
        }
      }
    })
    return initialValues
  }

  const initialValues = getInitialValues(fields)

  const signatureCanvas = useRef({})

  const handleClear = () => signatureCanvas.current.clear()

  const handleSigChange = () =>
    signatureCanvas.current.getTrimmedCanvas().toDataURL("image/png")

  const subRecaptcha = useRef({})

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        handleSubmit(values)
        subRecaptcha.current.reset && subRecaptcha.current.reset()
        resetForm({ values: "" })
        setSubmitting(false)
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        handleBlur,
        setFieldValue,
        touched,
        errors,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            {fields.map(input => (
              <Form.Group
                as={Col}
                sm={12}
                md={input.block ? 12 : 6}
                key={input.name}
                className={input.signature ? "mb-0" : "mb-4"}
              >
                <Form.Label>
                  {input.type !== "checkbox" ? input.label : null}
                </Form.Label>
                {input.passport ? (
                  <PassportUploader
                    file={file}
                    onDrop={acceptedFiles =>
                      onDrop(acceptedFiles, setFieldValue, input.name)
                    }
                    name={input.name}
                    value={values[input.name]}
                  />
                ) : input.phoneInput ? (
                  <PhoneInput
                    inputProps={{
                      className: "form-control",
                      id: "phone",
                      required: true,
                      autoFocus: false,
                    }}
                    country={"ng"}
                    value={values[input.name]}
                    onChange={phone => setFieldValue(input.name, phone)}
                  />
                ) : input.signature ? (
                  <div>
                    <SignatureCanvas
                      ref={signatureCanvas}
                      canvasProps={{
                        width: "250px",
                        height: "100px",
                        className: "sigCanvas",
                      }}
                      clearOnResize={false}
                      onEnd={() => setFieldValue(input.name, handleSigChange())}
                    />
                    <ClearButton className="ml-3" onClick={handleClear}>
                      Clear Signature
                    </ClearButton>
                  </div>
                ) : input.as === "select" ? (
                  <Form.Control
                    type={input.type}
                    as={input.as}
                    placeholder={input.placeholder}
                    name={input.name}
                    size={input.size}
                    value={values[input.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option>--Select--</option>
                    {input.options.map(option => (
                      <option key={option}>{option}</option>
                    ))}
                  </Form.Control>
                ) : input.type === "checkbox" ? (
                  <Form.Check
                    type={input.type}
                    name={input.name}
                    label={input.label}
                    checked={values[input.name]}
                    onChange={() =>
                      setFieldValue(input.name, !values[input.name])
                    }
                    onBlur={handleBlur}
                  />
                ) : input.type === "date" ? (
                  <DatePicker
                    calenderClassName="form-control"
                    dateFormat="dd/MM/yyyy"
                    selected={values[input.name]}
                    value={values[input.name]}
                    name={input.name}
                    onChange={date => setFieldValue(input.name, date)}
                    minDate={new Date()}
                    showDisabledMonthNavigation
                  />
                ) : input.recaptcha ? (
                  <ReCAPTCHA
                    ref={subRecaptcha}
                    size="normal"
                    sitekey="6LdhgAEVAAAAADDkiICnQIw-Z8wGLUAoPuZecTrB"
                    onChange={token => setFieldValue(input.name, token)}
                  />
                ) : (
                  <Form.Control
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                    size={input.size}
                    value={values[input.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
                {touched[input.name] && errors[input.name] ? (
                  <CustomAlert>{errors[input.name]}</CustomAlert>
                ) : null}
              </Form.Group>
            ))}
          </Form.Row>
          <Button type="submit" disabled={isSubmitting && newsletter}>
            {isSubmitting && newsletter ? "Sending..." : buttonText}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default CustomForm
