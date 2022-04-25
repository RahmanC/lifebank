import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export const LinearLoader = () => {
  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    </React.Fragment>
  );
};