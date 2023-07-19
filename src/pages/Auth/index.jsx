import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../layout/container";
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
