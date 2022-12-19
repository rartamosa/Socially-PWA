import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          padding: "0px 45px 20px 45px;",
          "& .MuiButtonBase-root": {
            minWidth: "57px",
          },
          "& .MuiButtonBase-root:nth-of-type(3)": {
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "23px",
            position: "relative",
            transform: "rotate(45deg)",
            bottom: "15px",
            "& .MuiSvgIcon-root": {
              transform: "rotate(-45deg)",
            },
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            backgroundColor: "#fff",
            boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.1)",
          },
          input: {
            "&::placeholder": {
              color: "#656565",
            },
          },
        },
      },
      defaultProps: {
        disableUnderline: true,
      },
    },
  },
});

export default theme;
