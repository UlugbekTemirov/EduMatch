import React from "react";
import { useNavigate } from "react-router-dom";

// layout
import Container from "layout/container.layout";

// mui
import { Button } from "@mui/material";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Container>
    </div>
  );
};

export default Index;
