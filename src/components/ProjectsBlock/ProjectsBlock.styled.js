import styled from "styled-components";
import { Grid } from "@mui/material";
import Image from "next/image";

export const ProjectContainer = styled(Grid)`
  position: relative;
  height: 300px;
  width: 200px;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;
