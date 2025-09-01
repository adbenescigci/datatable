import React, { useState } from "react";
import MUIDataTable from "mui-data-table";

const AdvancedTableExample = () => {
  const [data] = useState([
    [
      "Joe James",
      "Test Corp",
      "Yonkers",
      "NY",
      "Software Engineer",
      "5 years",
      "$85,000",
    ],
    [
      "John Walsh",
      "Test Corp",
      "Hartford",
      "CT",
      "Product Manager",
      "3 years",
      "$95,000",
    ],
    [
      "Bob Herm",
      "Test Corp",
      "Tampa",
      "FL",
      "Data Scientist",
      "7 years",
      "$110,000",
    ],
    [
      "James Houston",
      "Test Corp",
      "Dallas",
      "TX",
      "UX Designer",
      "4 years",
      "$90,000",
    ],
    [
      "Amy Adams",
      "Test Corp",
      "Phoenix",
      "AZ",
      "Frontend Developer",
      "2 years",
      "$75,000",
    ],
    [
      "Sarah Wilson",
      "Test Corp",
      "Seattle",
      "WA",
      "Backend Developer",
      "6 years",
      "$100,000",
    ],
    [
      "Mike Johnson",
      "Tech Solutions",
      "Boston",
      "MA",
      "DevOps Engineer",
      "8 years",
      "$120,000",
    ],
    [
      "Lisa Brown",
      "Tech Solutions",
      "Denver",
      "CO",
      "QA Engineer",
      "5 years",
      "$80,000",
    ],
    [
      "David Lee",
      "Tech Solutions",
      "Austin",
      "TX",
      "Full Stack Developer",
      "9 years",
      "$130,000",
    ],
    [
      "Emma Davis",
      "Tech Solutions",
      "Portland",
      "OR",
      "UI Designer",
      "4 years",
      "$85,000",
    ],
  ]);

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "position",
      label: "Position",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "experience",
      label: "Experience",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "salary",
      label: "Salary",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          return (
            <span style={{ color: "#2e7d32", fontWeight: "bold" }}>
              {value}
            </span>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "multiselect",
    responsive: "vertical",
    selectableRows: "multiple",
    download: true,
    print: true,
    search: true,
    pagination: true,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 25],
    sortOrder: {
      name: "name",
      direction: "asc",
    },
    customToolbar: () => {
      return (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#f5f5f5",
            borderRadius: "4px",
            margin: "10px 0",
          }}
        >
          <strong>Advanced Features:</strong> Multi-filtering, sorting,
          pagination, search
        </div>
      );
    },
    onRowClick: (rowData, rowMeta) => {
      console.log("Clicked row:", rowData);
      alert(`Selected employee: ${rowData[0]} - ${rowData[4]}`);
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Advanced Table Example</h2>
      <p>
        This example demonstrates the advanced features of the mui-data-table
        package:
      </p>
      <ul>
        <li>Multi-filtering</li>
        <li>Sorting</li>
        <li>Pagination</li>
        <li>Search</li>
        <li>Row selection</li>
        <li>Custom toolbar</li>
        <li>Row click events</li>
      </ul>

      <MUIDataTable
        title="Detailed Employee List"
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default AdvancedTableExample;
