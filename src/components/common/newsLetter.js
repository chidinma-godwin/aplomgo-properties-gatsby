import React, { useState } from "react"
import { string, object } from "yup"
import axios from "axios"
import { Alert } from "react-bootstrap"
import CustomForm from "./customForm"

function NewsLetter() {
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [show, setShow] = useState(true)

  const fields = [
    {
      label: "Email",
      type: "email",
      name: "email",
      value: "",
      placeholder: "Email",
      size: "sm",
    },
  ]

  const schema = object().shape({
    email: string()
      .email("Invalid email address")
      .required("Your email is required"),
  })

  const handleSubmit = async values => {
    await axios({
      method: "post",
      url: "/info/newsletter",
      data: { email: values.email },
    })
      .then(res => {
        setSuccess(res.data.message)
        setError("")
      })
      .catch(err => {
        setError(err.response.data.error)
      })
  }

  return (
    <>
      {success && show ? (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <p>{success}</p>
        </Alert>
      ) : error && !success && show ? (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <p>{error}</p>
        </Alert>
      ) : null}
      <CustomForm
        fields={fields}
        schema={schema}
        handleSubmit={handleSubmit}
        buttonText="Subscribe"
        newsletter
        error={error}
        success={success}
      />
    </>
  )
}

export default NewsLetter
