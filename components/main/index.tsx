import React, { FC, ReactNode } from "react";
import { Container } from "@mui/material";

type Props  = {
  children: ReactNode
}
const Main:FC<Props> = ({children}) => {
  return (
    <Container className='flex justify-center py-12'>
      {children}
    </Container>
  );
};

export default Main;
