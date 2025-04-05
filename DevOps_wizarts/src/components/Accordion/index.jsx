import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import RemoveCircleOutlineSharpIcon from "@mui/icons-material/RemoveCircleOutlineSharp";
import Divider from "@mui/material/Divider";

export default function AccordionComponent({ title, details }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "white",
          margin: "20px 0",
        }}
        expanded={expanded}
        onChange={handleChange}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <RemoveCircleOutlineSharpIcon sx={{ color: "white" }} />
            ) : (
              <AddCircleOutlineSharpIcon sx={{ color: "white" }} />
            )
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{details}</AccordionDetails>
      </Accordion>
      <Divider sx={{ backgroundColor: "white" }} />
    </div>
  );
}
