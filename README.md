# mui-data-table

Enhanced MUI DataTables with modern styling and improved UX - Security Patched

A responsive datatables component built on [Material-UI](https://mui.com) with enhanced styling, improved pagination, and better user experience. This is a fork of the original `mui-datatables` package with React 19 compatibility and security updates.

## 🚀 What's New in This Version

- ✅ **React 19 Compatibility**: Updated to work with React 19
- ✅ **Security Patch**: Updated `jspdf` to version 3.0.2 to fix security vulnerabilities
- ✅ **Enhanced Print Styling**: Improved print functionality with better CSS
- ✅ **Modern Styling**: Updated design with better spacing and colors

## 📦 Installation

```bash
npm install mui-data-table --save
```

## 🔧 Dependencies

Make sure you have the required dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

## 📖 Basic Usage

```jsx
import MUIDataTable from "mui-data-table";

const columns = ["Name", "Company", "City", "State"];

const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

function App() {
  return <MUIDataTable title={"Employee List"} data={data} columns={columns} />;
}
```

## 🎨 Features

- 🎨 **Modern Styling**: Enhanced visual design with better spacing and colors
- 📱 **Responsive**: Works great on desktop, tablet, and mobile
- 🔍 **Advanced Filtering**: Multiple filter types and custom filters
- 📊 **Export Options**: CSV download and printing capabilities
- 🎯 **Customizable**: Extensive customization options for styling and behavior
- ⚡ **Performance**: Optimized for large datasets
- 🖨️ **Print Friendly**: Optimized print styling with hidden toolbar/footer

## 🔒 Security

This version includes security updates:

- Updated `jspdf` from 2.5.1 to 3.0.2 to fix known vulnerabilities
- All other dependencies updated to latest stable versions

## 📋 Compatibility

| Package Version | React | MUI | Status       |
| --------------- | ----- | --- | ------------ |
| 1.0.0           | 19.x  | 7.x | ✅ Supported |

## 🔗 Repository & Links

- **GitHub Repository**: [https://github.com/adbenescigci/datatable](https://github.com/adbenescigci/datatable)
- **NPM Package**: [mui-data-table](https://www.npmjs.com/package/mui-data-table)
- **Original Package**: [mui-datatables](https://github.com/gregnb/mui-datatables)

## 📄 License

MIT License - same as the original package.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📚 Examples

Check out the [examples folder](./examples/) for comprehensive usage examples:
- Basic table implementation
- Advanced features (filtering, sorting, pagination)
- Custom styling and conditional formatting
