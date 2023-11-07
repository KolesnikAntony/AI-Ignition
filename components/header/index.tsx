import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box className='flex justify-center items-center py-[15px] bg-white'>
      <Typography className='text-black text-[34px]' component='h1'>AI Ignition</Typography>
    </Box>
  );
};

export default Header;
