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
import AddDepartment from "../../components/AddDepartment";
import AddEmployee from "../../components/AddEmployee";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});


const Employee = () => {
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
        { name: "DEPARTMENT NAME", options: { filterOptions: { fullWidth: true } } },
        // "DEPARTMENT NAME",
        "DEPARTMENT HEAD",
        "TOTAL EMPLOYEE",
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
        <div className="u-badge">
          <div className="u-total">Total Employee</div>
          <h1 className="u-totalNumber">2</h1>
        </div>
      </div>
      <div className="u-row">
          <CacheProvider value={muiCache}>
              <ThemeProvider theme={createTheme()}>
                  
                  <MUIDataTable
                      title={"EMPLOYEES LIST"}
                      data={data}
                      columns={columns}
                      options={options}
                  />
              </ThemeProvider>
          </CacheProvider>
      </div>
      {open && <AddEmployee setOpen={setOpen}/>}
    </div>
  )
}

export default Employee