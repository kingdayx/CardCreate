import React from "react";
import styled from "styled-components";
import { Type, UploadCloud } from "react-feather";
import {
  FolderOpenOutlined,
  WidgetsOutlined,
  BrushOutlined,
  CloudUploadOutlined,
  TitleOutlined,
} from "@mui/icons-material";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #084678;
  height: 100%;
`;

const MenuIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.5rem;
  padding-top: 2rem;
  align-items: center;
`;

const MenuIconTitle = styled.div`
  color: lightgrey;
  font-family: sans-serif;
  padding-top: 5px;
`;

export default function Menu() {
  return (
    <MenuContainer>
      <MenuIconContainer>
        <BrushOutlined
          sx={{
            background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
            borderRadius: "6px",
            padding: "2px",
            fontSize: "2rem",
            boxShadow: "rgba(0, 0, 0, 0.3) 0 1px 3px",
            color: "white",
          }}
        />
        <MenuIconTitle>Design</MenuIconTitle>
      </MenuIconContainer>
      <MenuIconContainer>
        <WidgetsOutlined
          sx={{
            background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
            borderRadius: "6px",
            padding: "2px",
            fontSize: "2rem",
            boxShadow: "rgba(0, 0, 0, 0.3) 0 1px 3px",
            color: "white",
          }}
        />
        <MenuIconTitle>Elements</MenuIconTitle>
      </MenuIconContainer>
      <MenuIconContainer>
        <TitleOutlined
          sx={{
            background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
            borderRadius: "6px",
            padding: "2px",
            fontSize: "2rem",
            boxShadow: "rgba(0, 0, 0, 0.3) 0 1px 3px",
            color: "white",
          }}
        />
        <MenuIconTitle>Text</MenuIconTitle>
      </MenuIconContainer>
      <MenuIconContainer>
        <CloudUploadOutlined
          sx={{
            background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
            borderRadius: "6px",
            padding: "2px",
            fontSize: "2rem",
            boxShadow: "rgba(0, 0, 0, 0.3) 0 1px 3px",
            color: "white",
          }}
        />
        <MenuIconTitle>Upload</MenuIconTitle>
      </MenuIconContainer>
      <MenuIconContainer>
        <FolderOpenOutlined
          sx={{
            background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
            borderRadius: "6px",
            padding: "2px",
            fontSize: "2rem",
            boxShadow: "rgba(0, 0, 0, 0.3) 0 1px 3px",
            color: "white",
          }}
        />
        <MenuIconTitle>Projects</MenuIconTitle>
      </MenuIconContainer>
    </MenuContainer>
  );
}
