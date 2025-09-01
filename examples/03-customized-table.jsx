import React, { useState } from "react";
import MUIDataTable from "mui-table-2025";

const CustomizedTableExample = () => {
  const [data] = useState([
    ["John Doe", "Engineering", "Active", "High", "2024-01-15", "$95,000"],
    ["Jane Smith", "Marketing", "Active", "Medium", "2024-02-01", "$85,000"],
    ["Mike Johnson", "Sales", "Inactive", "Low", "2024-01-20", "$75,000"],
    ["Sarah Wilson", "Engineering", "Active", "High", "2024-02-10", "$100,000"],
    ["David Brown", "HR", "Active", "Medium", "2024-01-25", "$80,000"],
    ["Lisa Davis", "Finance", "Active", "High", "2024-02-05", "$90,000"],
    ["Tom Wilson", "Sales", "Inactive", "Low", "2024-01-30", "$70,000"],
    ["Emma Taylor", "Engineering", "Active", "High", "2024-02-15", "$105,000"],
  ]);

  const columns = [
    {
      name: "name",
      label: "Employee Name",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          return (
            <span
              style={{
                fontWeight: "bold",
                color: "#1976d2",
                fontSize: "14px",
              }}
            >
              {value}
            </span>
          );
        },
      },
    },
    {
      name: "department",
      label: "Department",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          const colors = {
            Engineering: "#4caf50",
            Marketing: "#ff9800",
            Sales: "#f44336",
            HR: "#9c27b0",
            Finance: "#2196f3",
          };
          return (
            <span
              style={{
                backgroundColor: colors[value] || "#757575",
                color: "white",
                padding: "4px 8px",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              {value}
            </span>
          );
        },
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          const isActive = value === "Active";
          return (
            <span
              style={{
                color: isActive ? "#2e7d32" : "#d32f2f",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: isActive ? "#2e7d32" : "#d32f2f",
                }}
              ></span>
              {value}
            </span>
          );
        },
      },
    },
    {
      name: "priority",
      label: "Priority",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          const priorityColors = {
            High: "#d32f2f",
            Medium: "#f57c00",
            Low: "#388e3c",
          };
          return (
            <span
              style={{
                color: priorityColors[value] || "#757575",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              {value}
            </span>
          );
        },
      },
    },
    {
      name: "startDate",
      label: "Start Date",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          const date = new Date(value);
          return (
            <span style={{ color: "#666", fontSize: "13px" }}>
              {date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          );
        },
      },
    },
    {
      name: "salary",
      label: "Annual Salary",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          return (
            <span
              style={{
                backgroundColor: "#e8f5e8",
                color: "#2e7d32",
                padding: "6px 10px",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "14px",
                border: "1px solid #c8e6c9",
              }}
            >
              {value}
            </span>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "dropdown",
    responsive: "standard",
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
            padding: "15px",
            backgroundColor:
              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            borderRadius: "8px",
            margin: "15px 0",
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>
            🎨 Customized Table Features
          </h3>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Custom styling, conditional formatting, and enhanced visual elements
          </p>
        </div>
      );
    },
    onRowClick: (rowData, rowMeta) => {
      console.log("Row clicked:", rowData);
      alert(
        `Employee: ${rowData[0]} - Department: ${rowData[1]} - Status: ${rowData[2]}`
      );
    },
    setRowProps: (row, dataIndex, rowIndex) => {
      const status = row[2];
      return {
        style: {
          backgroundColor: status === "Inactive" ? "#fafafa" : "white",
          borderLeft:
            status === "Active" ? "4px solid #4caf50" : "4px solid #f5f5f5",
        },
      };
    },
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fafafa",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            color: "#1976d2",
            marginBottom: "10px",
            fontSize: "28px",
          }}
        >
          Customized Table Example
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          This example showcases advanced customization features including:
        </p>
        <ul
          style={{
            color: "#555",
            fontSize: "15px",
            lineHeight: "1.8",
            paddingLeft: "20px",
          }}
        >
          <li>Custom column rendering with conditional styling</li>
          <li>Department badges with color coding</li>
          <li>Status indicators with visual elements</li>
          <li>Priority-based color coding</li>
          <li>Formatted date display</li>
          <li>Enhanced salary display with background styling</li>
          <li>Custom toolbar with gradient background</li>
          <li>Row styling based on data values</li>
        </ul>
      </div>

      <MUIDataTable
        title="Employee Management System"
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default CustomizedTableExample;
