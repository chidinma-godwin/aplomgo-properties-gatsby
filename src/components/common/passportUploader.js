import React from "react"
import { useDropzone } from "react-dropzone"
import styled from "styled-components"
import { Image } from "react-bootstrap"

const PassportWrapper = styled.div`
  position: relative;
  height: 100px;
  border: ${props => (props.showBorder ? "1px solid black" : "transparent")};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em;
`

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

const PreviewImage = styled(Image)`
  object-fit: cover;
  max-width: inherit;
  height: inherit;
`

function PassportUploader({ file, onDropAccepted, name, value }) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    accept: "image/*",
    minSize: 0,
    maxSize: 5242880,
    multiple: false,
    onDropAccepted,
  })

  console.log(fileRejections)
  const errors = []

  fileRejections.length &&
    fileRejections[0].errors.forEach(error => {
      if (error.code === "file-too-large") {
        error.message = "Upload a smaller image. Max supported size is 5mb."
      }
      if (error.code === "file-invalid-type") {
        error.message = "Unable to upload, please upload an image file."
      }
      errors.push(error.message)
    })

  console.log(errors)

  const thumbNail = file.preview && !errors.length && (
    <PreviewImage src={file.preview} thumbnail />
  )

  return (
    <PassportWrapper {...getRootProps()} showBorder={!thumbNail}>
      <input
        {...getInputProps({
          name,
        })}
      />
      {!thumbNail ? (
        <>
          {errors.length ? (
            <div className="text-danger">
              {errors.map((error, index) => (
                <p className="my-auto" key={index}>
                  {error}
                </p>
              ))}
            </div>
          ) : isDragActive && !isDragReject ? (
            <p className="my-auto">Drop your passport here!</p>
          ) : isDragReject ? (
            <p className="my-auto">This file is not an image</p>
          ) : (
            <p className="my-auto">
              Click here or drag and drop your passport!
            </p>
          )}
        </>
      ) : (
        <ImageContainer>{thumbNail}</ImageContainer>
      )}
    </PassportWrapper>
  )
}
export default PassportUploader
