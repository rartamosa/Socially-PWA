import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PrimaryButton = styled(Button)(() => ({
  width: "56px",
  minWidth: "56px",
  height: "56px",
  backgroundColor: "#000",
  borderRadius: "23px",
  transform: "rotate(-45deg)",
  boxShadow: "0px 4px 12px rgb(0 0 0 / 25%)",
  color: "#fff",
  alignSelf: "center",
  "&:hover": {
    backgroundColor: "#000",
  },
  "& span": {
    transform: "rotate(45deg)",
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontSize: "12.8px",
    lineHeight: "19px",
  },
}));

export const SecondaryButton = styled(Button)(() => ({
  padding: "0",
  color: "#000",
  minWidth: "fit-content",
}));
