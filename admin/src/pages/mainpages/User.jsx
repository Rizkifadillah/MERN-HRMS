// import React from 'react'
import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import AddUser from "../../components/AddUser";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});


const User = () => {
  const[open, setOpen] = useState(false);

  const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("400px");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [searchBtn, setSearchBtn] = useState(true);
    const [downloadBtn, setDownloadBtn] = useState(true);
    const [printBtn, setPrintBtn] = useState(true);
    const [viewColumnBtn, setViewColumnBtn] = useState(true);
    const [filterBtn, setFilterBtn] = useState(true);

    const columns = [
        { name: "CLIENT NAME", options: { filterOptions: { fullWidth: true } } },
        "NAME",
        "CREATED DATE",
        "ROLE",
        "ROLE TYPE"
    ];

    const options = {
        search: searchBtn,
        download: downloadBtn,
        print: printBtn,
        viewColumns: viewColumnBtn,
        filter: filterBtn,
        filterType: "dropdown",
        responsive,
        tableBodyHeight,
        tableBodyMaxHeight,
        onTableChange: (action, state) => {
        console.log(action);
        console.dir(state);
        }
    };

    const data = [
        ["Gabby George", "Business Analyst", "Minneapolis"],
        [
        "Aiden Lloyd",
        "Business Consultant for an International Company and CEO of Tony's Burger Palace",
        "Dallas"
        ],
        ["Jaden Collins", "Attorney", "Santa Ana"],
        ["Franky Rees", "Business Analyst", "St. Petersburg"],
        ["Aaren Rose", null, "Toledo"],
        ["Johnny Jones", "Business Analyst", "St. Petersburg"],
        ["Jimmy Johns", "Business Analyst", "Baltimore"],
        ["Jack Jackson", "Business Analyst", "El Paso"],
        ["Joe Jones", "Computer Programmer", "El Paso"],
        ["Jacky Jackson", "Business Consultant", "Baltimore"],
        ["Jo Jo", "Software Developer", "Washington DC"],
        ["Donna Marie", "Business Manager", "Annapolis"]
    ];

  return (
    <div className='u-container'>
      <div className="u-row">
        <h3 className="u-title"></h3>
        <button className="u-btn" onClick={()=>setOpen(true)}>Add New</button>
      </div>
      <div className="u-row">
          <CacheProvider value={muiCache}>
              <ThemeProvider theme={createTheme()}>
                  
                  <MUIDataTable
                      title={"USERS LIST"}
                      data={data}
                      columns={columns}
                      options={options}
                  />
              </ThemeProvider>
          </CacheProvider>
      </div>
      {open && <AddUser setOpen={setOpen}/>}
    </div>
  )
}

export default User