import React from "react";
import MUIDataTable from "mui-datatables-2025";

const BasicTableExample = () => {
  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "company",
      label: "Company",
    },
    {
      name: "city",
      label: "City",
    },
    {
      name: "state",
      label: "State",
    },
  ];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ["Amy Adams", "Test Corp", "Phoenix", "AZ"],
    ["Sarah Wilson", "Test Corp", "Seattle", "WA"],
  ];

  const options = {
    filterType: "dropdown",
    responsive: "standard",
    selectableRows: "none",
    download: true,
    print: true,
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Basic Table Example</h2>
      <p>
        This example demonstrates the basic usage of the mui-datatables-2025 package.
      </p>

      <MUIDataTable
        title="Employee List"
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default BasicTableExample; 