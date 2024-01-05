import { ChevronLeftOutlined, SearchRounded } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { MenuData } from "../MenuData";
import { UploadButton } from "@bytescale/upload-widget-react";

const ModalContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const ModalContent = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const ModalClose = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModalSearchContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 5px;
`;

const ModalSearchField = styled.input`
  &:focus {
    outline: none;
  }
  border: none;
  border-radius: 5px;
`;

const ModalMainContent = styled.main``;

const ModalTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ModalTitle = styled.h2`
  padding: 10px;
  color: lightgray;
`;

const ModalSubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ModalSubTitle = styled.h1`
  color: lightgray;
  padding-left: 2px;
  padding-right: 2px;
`;

const ModalContentData = styled.div``;

const options = {
  apiKey: "free", // Get API keys from: www.bytescale.com
  maxFileCount: 10,
};

export default function MenuDetails({ isModalOpen, modalContent, onClose }) {
  if (isModalOpen !== true) {
    return null;
  }

  const uploadData = [];

  const renderContent = (item) => {
    if (item?.name === "upload") {
      return (
        <div>
          {" "}
          <UploadButton
            options={options}
            onComplete={(files) =>
              uploadData.push(files.map((x) => x.fileUrl).join("\n"))
            }
          >
            {({ onClick }) => (
              <button onClick={onClick}>Upload a file...</button>
            )}
          </UploadButton>
          <div>
            {uploadData.map((item, itemIndex) => {
              return <img src={item} height={100} width={100} id={itemIndex} />;
            })}
          </div>
        </div>
      );
    } else {
      return item?.content;
    }
  };

  console.log("data", MenuData);
  return (
    <ModalContainer>
      {MenuData.map((item, itemIndex) => {
        if (modalContent === item.name)
          return (
            <ModalContent id={itemIndex}>
              <ModalSearchContainer>
                <SearchRounded sx={{ justifyContent: "center" }} />
                <ModalSearchField placeholder={`${item.searchAlt}`} />
              </ModalSearchContainer>
              <ModalMainContent className="modal-mainContents">
                <ModalTitleContainer>
                  {item.title?.map((index, itemIndex) => {
                    return <ModalTitle id={itemIndex}> {index} </ModalTitle>;
                  })}
                </ModalTitleContainer>
                <hr />
                <ModalSubTitleContainer>
                  {item.subTitle?.map((index, itemIndex) => {
                    return (
                      <ModalSubTitle id={itemIndex}> {index} </ModalSubTitle>
                    );
                  })}
                </ModalSubTitleContainer>
                <ModalContentData>{renderContent(item)}</ModalContentData>
              </ModalMainContent>
            </ModalContent>
          );
      })}
      <ModalClose>
        <ChevronLeftOutlined onClick={onClose} />
      </ModalClose>
    </ModalContainer>
  );
}
