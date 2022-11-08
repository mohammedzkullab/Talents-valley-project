import { useRef, useState, useEffect } from "react";
import {
  StyledUploadFile,
  FileUploader,
  StyledUploadFileWithFile,
} from "./style";
import { ReactComponent as UploadIcon } from "../../assets/icons/icon_upload.svg";
import { Hint } from "../../designsystem/typography";
import ErrorStatment from "../error/ErrorStatment";
const UploadFile = ({
  onFileSuccess = (f) => f,
  onFileFail = (f) => f,
  acceptedTypes = [],
  hintMessage = "",
}) => {
  const [isFile, setIsFile] = useState(false);
  const [file, setFile] = useState();
  const [fileError, setFileError] = useState();
  const hiddenFileInput = useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  useEffect(() => {
    if (file) {
      if (file && file.size <= 2097152) {
        if (
          (file && file.name.endsWith("jpg")) ||
          (file && file.name.endsWith("png")) ||
          (file && file.name.endsWith("pdf"))
        ) {
          onFileSuccess(file);
          setFileError(null);
        } else {
          setFileError("file format is not supported");
        }
      } else {
        setFileError("file is big");
      }
    }
  }, [file, isFile, onFileSuccess]);
  const handleFileInput = (e) => {
    setIsFile(true);
    setFile(e.target.files[0]);
  };
  const cancelFile = () => {
    setFile(null);
    setIsFile(false);
    setFileError(null);
  };
  return (
    <FileUploader>
      {!isFile && (
        <StyledUploadFile type="button" onClick={handleClick}>
          <UploadIcon />
          Upload a File
        </StyledUploadFile>
      )}
      {isFile && (
        <>
          <StyledUploadFileWithFile fileError={fileError}>
            <UploadIcon />

            <div className="details">
              <p>
                {file.name}
                <span>{+file.size / 1000000} Mb size</span>
              </p>
              <div onClick={cancelFile} className="cancel">
                X
              </div>
            </div>
          </StyledUploadFileWithFile>
          {fileError && <ErrorStatment>{fileError}</ErrorStatment>}
        </>
      )}
      {!fileError && <Hint>{hintMessage}</Hint>}
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleFileInput}
        style={{ display: "none" }}
      />
    </FileUploader>
  );
};

export default UploadFile;
