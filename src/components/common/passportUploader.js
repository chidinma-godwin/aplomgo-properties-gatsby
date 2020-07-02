import React from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const PassportWrapper = styled.div`
  position: relative;
  height: 100px;
  border: ${props => (props.showBorder ? '1px solid black' : 'transparent')};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const PreviewImage = styled(Image)`
  object-fit: cover;
  max-width: inherit;
  height: inherit;
`;

function PassportUploader({ file, onDrop, name, value }) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles } = useDropzone({
    accept: 'image/*',
    minSize: 0,
    maxSize: 5242880,
    multiple: false,
    onDrop,
  });

  const isFileTooLarge =
    rejectedFiles && rejectedFiles.length > 0 && rejectedFiles[0].size > 10485760;

  const thumbNail = file.preview && <PreviewImage src={file.preview} thumbnail />;

  return (
    <PassportWrapper {...getRootProps()} showBorder={!thumbNail}>
      <input
        {...getInputProps({
          name,
        })}
      />
      {!thumbNail ? (
        <>
          {isDragActive && !isDragReject && <p>Drop your passport here!</p>}
          {!isDragActive && <p>Click here or drag and drop your passport!</p>}
          {isDragReject && <p>Unable to upload, please upload either a png or jpg file.</p>}
          {isFileTooLarge && (
            <div className='text-danger mt-2'>File is too large. Max supported size is 10mb.</div>
          )}{' '}
        </>
      ) : (
        <ImageContainer>{thumbNail}</ImageContainer>
      )}
    </PassportWrapper>
  );
}
export default PassportUploader;
