import React from "react";
import { Typography, Container } from "@mui/material";
import AccordionComponent from "../Accordion";
import { faqList } from "./data.js";

const FAQ = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: "100px" }}>
      <Typography variant="h5" align="right" color="blue">
        Everything you need to know about our services
      </Typography>
      <Typography variant="h2" align="right" color="white">
        Frequently Asked Questions
      </Typography>
      {faqList.map((faq, index) => (
        <AccordionComponent
          key={index}
          title={faq.title}
          details={faq.details}
        />
      ))}
    </Container>
  );
};

export default FAQ;
