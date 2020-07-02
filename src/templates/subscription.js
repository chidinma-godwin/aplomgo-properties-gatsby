import React, { useState } from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"
import axios from "axios"
import FileSaver from "file-saver"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PDFDownloadLink } from "@react-pdf/renderer"
import SubscriptionForm from "../components/subscriptionForm"
import SubscriptionPdf from "../components/subscriptionPdf"

const Wrapper = styled.div`
  margin-top: ${props => (props.propertyParams ? "120px" : "")};
  margin-bottom: 3em;
`

const ChoiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3em;
`

const FormWrapper = styled(Card)`
  display: ${props => (props.show ? "block" : "none")};
  margin-bottom: 3em;
  border: ${props => (props.border ? "none" : "1px solid rgba(0,0,0,.125)")};
`

const Choice = styled.div`
  display: ${props => (props.show ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b67f2e;
  text-align: center;
  color: white;
  margin: 1em;
  width: 240px;
  height: 200px;
  font-weight: bold;
  cursor: pointer;
`

function SubscriptionPage({
  pageContext,
  successMsg,
  formValues,
  currentProperty,
}) {
  console.log(pageContext)
  const [showFill, setShowFill] = useState(true)
  const [showDownload, setShowDownload] = useState(true)

  const subscriptionProperty = pageContext && pageContext.subscriptionProperty
  const property = subscriptionProperty || currentProperty
  const propertyParams = subscriptionProperty && subscriptionProperty.shortName

  const handleFill = () => {
    setShowFill(false)
    setShowDownload(true)
  }

  const handleDownload = name => {
    setShowDownload(false)
    setShowFill(true)
    const formattedName = name.split("-").join(" ").toUpperCase()
    axios
      .post(
        "/api/downloadFile",
        { fileName: `${name}.pdf` },
        {
          responseType: "arraybuffer",
          headers: {
            Accept: "application/pdf",
          },
        }
      )
      .then(res => {
        FileSaver.saveAs(
          new Blob([res.data], { type: "application/pdf" }),
          `${formattedName} Subscription Form.pdf`
        )
      })
  }

  return (
    <Wrapper className={propertyParams ? "container" : ""} propertyParams>
      <h3 className="mb-4">{`${property.name} SUBSCRIPTION`}</h3>
      <p>
        Complete the subscription form by either downloading the form, filling
        it and sending it to info@aplom.com or Fill it here on our website
      </p>
      <ChoiceWrapper>
        <Choice onClick={handleFill} show={showFill ? 1 : undefined}>
          CLICK HERE TO FILL NOW
        </Choice>
        <Choice
          onClick={() => handleDownload(property.shortName)}
          show={showDownload ? 1 : undefined}
        >
          <span className="mb-3">
            CLICK HERE TO DOWNLOAD THE FORM AND FILL OFFLINE
          </span>
          <span>
            <FontAwesomeIcon icon={["fas", "download"]} size="2x" />
          </span>
        </Choice>
      </ChoiceWrapper>

      <FormWrapper
        show={showDownload && !(showDownload && showFill) ? 1 : undefined}
        border={successMsg}
      >
        {successMsg ? (
          <>
            <div>{successMsg}</div>
            <PDFDownloadLink
              document={
                <SubscriptionPdf formValues={formValues} property={property} />
              }
              fileName={`${property.name}.pdf`}
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  "Loading document..."
                ) : (
                  <div className="text-success mb-5">
                    Download a copy of your response!
                  </div>
                )
              }
            </PDFDownloadLink>
          </>
        ) : (
          // <div className='text-success mb-5'>`${successMsg} `</div>
          <Card.Body>
            <h5>Subscription Form</h5>
            <p>
              {" "}
              Please provide correct information, we treat all information
              provided with confidentiality.
            </p>
            <SubscriptionForm property={property} />
          </Card.Body>
        )}
      </FormWrapper>
    </Wrapper>
  )
}

export default SubscriptionPage
