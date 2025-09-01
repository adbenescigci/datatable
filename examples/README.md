# MUI Data Table Examples

This folder contains practical examples demonstrating different use cases of the `mui-data-table` package.

## Examples Overview

### 1. Basic Table (`01-basic-table.jsx`)
A simple table implementation with basic features:
- Basic column definitions
- Simple data structure
- Basic options (filtering, download, print)
- Standard responsive behavior

**Key Features:**
- Dropdown filtering
- CSV download
- Print functionality
- Standard responsive design

### 2. Advanced Table (`02-advanced-table.jsx`)
An enhanced table with advanced functionality:
- Multi-select filtering
- Custom column rendering
- Row selection
- Custom toolbar
- Row click events
- Enhanced pagination

**Key Features:**
- Multi-select filters
- Custom salary column styling
- Interactive row selection
- Custom toolbar with information
- Row click event handling
- Vertical responsive design

### 3. Customized Table (`03-customized-table.jsx`)
A fully customized table with advanced styling:
- Custom column rendering with conditional formatting
- Department badges with color coding
- Status indicators with visual elements
- Priority-based color coding
- Formatted date display
- Enhanced visual styling

**Key Features:**
- Conditional styling based on data values
- Custom badges and indicators
- Gradient toolbar background
- Row styling based on status
- Enhanced visual hierarchy
- Professional appearance

## How to Use These Examples

### Prerequisites
Make sure you have the required dependencies installed:
```bash
npm install mui-data-table @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### Running the Examples
1. Copy the example file you want to use
2. Import it into your React component
3. Make sure you have the required dependencies
4. Customize the data and columns as needed

### Example Usage
```jsx
import React from 'react';
import BasicTableExample from './examples/01-basic-table';

function App() {
  return (
    <div>
      <h1>My Application</h1>
      <BasicTableExample />
    </div>
  );
}
```

## Customization Tips

- **Data Structure**: All examples use array-based data format
- **Column Options**: Use the `options` property for advanced column configuration
- **Styling**: Customize appearance using inline styles or CSS classes
- **Events**: Implement custom handlers for row clicks, selection changes, etc.
- **Responsiveness**: Choose appropriate responsive options for your use case

## Common Use Cases

- **Data Display**: Basic information tables
- **Admin Panels**: User management, content management
- **Reports**: Financial reports, analytics dashboards
- **CRUD Operations**: Data entry and editing interfaces
- **Data Analysis**: Filtering and sorting large datasets

## Support

For more information about available options and features, refer to the main package documentation or visit the GitHub repository.
