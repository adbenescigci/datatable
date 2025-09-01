import React from "react";
import { Grow } from "@mui/material";
import { TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({ name: "MUIDataTableSearch" })((theme) => ({
  main: {
    display: "flex",
    flex: "1 0 auto",
    alignItems: "center",
    "@media print": {
      display: "none",
    },
  },
  searchIcon: {
    color: theme.palette.text.secondary,
    marginRight: "8px",
  },
  searchText: {
    flex: "0.8 0",
    "& .MuiInputBase-root": {
      borderRadius: "8px",
      backgroundColor: "#f8fafc",
      border: "1px solid #e5e7eb",
      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      "&:hover": {
        borderColor: "#d1d5db",
      },
      "&.Mui-focused": {
        borderColor: "#3b82f6",
        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
      },
    },
  },
  clearIcon: {
    "&:hover": {
      color: theme.palette.error.main,
    },
  },
}));

const TableSearch = ({ options, searchText, onSearch, onHide }) => {
  const { classes } = useStyles();

  const handleTextChange = (event) => {
    onSearch(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      onHide();
    }
  };

  const clearIconVisibility = options.searchAlwaysOpen ? "hidden" : "visible";

  return (
    <Grow appear in={true} timeout={300}>
      <div className={classes.main}>
        <SearchIcon className={classes.searchIcon} />
        <TextField
          className={classes.searchText}
          autoFocus={true}
          variant={"standard"}
          InputProps={{
            "data-test-id": options.textLabels.toolbar.search,
          }}
          inputProps={{
            "aria-label": options.textLabels.toolbar.search,
          }}
          value={searchText ?? ""}
          onKeyDown={onKeyDown}
          onChange={handleTextChange}
          fullWidth={true}
          placeholder={options.searchPlaceholder}
          {...(options.searchProps ? options.searchProps : {})}
        />
        <IconButton className={classes.clearIcon} style={{ visibility: clearIconVisibility }} onClick={onHide}>
          <ClearIcon />
        </IconButton>
      </div>
    </Grow>
  );
};

export default TableSearch;
