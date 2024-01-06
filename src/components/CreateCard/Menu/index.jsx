import React, { useState } from "react";
import styled from "styled-components";

import {
  FolderOpenOutlined,
  WidgetsOutlined,
  BrushOutlined,
  CloudUploadOutlined,
  TitleOutlined,
} from "@mui/icons-material";
import MenuDetails from "./MenuDetails";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const MenuIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.5rem;
  padding-top: 2rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    #iconTitle {
      transition-duration: 1s;
      color: black;
    }

    #icon {
      transition-duration: 1s;
      color: #084678;
    }
  }
`;

const MenuIcons = styled.div`
  background-color: #084678;
  background-color: linear-gradient(
    90deg,
    rgba(37, 38, 39, 0.7) 0%,
    60%,
    transparent
  );
`;

const MenuModal = styled.div`
  margin-left: 0.1px;
  background-color: #084678;
  background-color: linear-gradient(
    90deg,
    rgba(37, 38, 39, 0.7) 0%,
    60%,
    transparent
  );
`;

const MenuIconTitle = styled.div`
  color: lightgrey;
  font-family: sans-serif;
  padding-top: 5px;
`;

export default function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalContent, setModalContent] = useState("design");
  const [uploadData, setUploadData] = useState([]);

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <MenuContainer>
      <MenuIcons>
        <MenuIconContainer onClick={() => openModal("design")}>
          <BrushOutlined
            id="icon"
            sx={{
              background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
              borderRadius: "6px",
              padding: "2px",
              fontSize: "2rem",
              boxShadow: "rgba(0, 0, 0, 0.3) 0 1px 3px",
              color: "white",
            }}
          />
          <MenuIconTitle id="iconTitle">Design</MenuIconTitle>
        </MenuIconContainer>
        <MenuIconContainer onClick={() => openModal("elements")}>
          <WidgetsOutlined
            id="icon"
            sx={{
              background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
              borderRadius: "6px",
              padding: "2px",
              fontSize: "2rem",
              boxShadow: "rgba(0, 0, 0, 0.3) 0 1px 3px",
              color: "white",
            }}
          />
          <MenuIconTitle id="iconTitle">Elements</MenuIconTitle>
        </MenuIconContainer>
        <MenuIconContainer onClick={() => openModal("text")}>
          <TitleOutlined
            id="icon"
            sx={{
              background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
              borderRadius: "6px",
              padding: "2px",
              fontSize: "2rem",
              boxShadow: "rgba(0, 0, 0, 0.3) 0 1px 3px",
              color: "white",
            }}
          />
          <MenuIconTitle id="iconTitle">Text</MenuIconTitle>
        </MenuIconContainer>
        <MenuIconContainer onClick={() => openModal("upload")}>
          <CloudUploadOutlined
            id="icon"
            sx={{
              background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
              borderRadius: "6px",
              padding: "2px",
              fontSize: "2rem",
              boxShadow: "rgba(0, 0, 0, 0.3) 0 1px 3px",
              color: "white",
            }}
          />
          <MenuIconTitle id="iconTitle">Upload</MenuIconTitle>
        </MenuIconContainer>
        <MenuIconContainer onClick={() => openModal("projects")}>
          <FolderOpenOutlined
            id="icon"
            sx={{
              background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
              borderRadius: "6px",
              padding: "2px",
              fontSize: "2rem",
              boxShadow: "rgba(0, 0, 0, 0.3) 0 1px 3px",
              color: "white",
            }}
          />
          <MenuIconTitle id="iconTitle">Projects</MenuIconTitle>
        </MenuIconContainer>
      </MenuIcons>
      <MenuModal>
        <MenuDetails
          isModalOpen={isModalOpen}
          modalContent={modalContent}
          onClose={closeModal}
          uploadData={uploadData}
          setUploadData={setUploadData}
        />
      </MenuModal>
    </MenuContainer>
  );
}
