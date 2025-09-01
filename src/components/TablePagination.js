import React from 'react';
import PropTypes from 'prop-types';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableRow from '@mui/material/TableRow';
import MuiTableFooter from '@mui/material/TableFooter';
import MuiTablePagination from '@mui/material/TablePagination';
import JumpToPage from './JumpToPage';
import { makeStyles } from 'tss-react/mui';
import { getPageValue } from '../utils';

const useStyles = makeStyles({ name: 'MUIDataTablePagination' })((theme) => ({
  root: {},
  tableCellContainer: {
    padding: '6px 12px',
    backgroundColor: theme.palette.background.paper || '#ffffff',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  selectRoot: {
    backgroundColor: '#f8fafc',
    borderRadius: theme.shape.borderRadius || '4px',
    border: `1px solid ${theme.palette.divider || '#e5e7eb'}`,
    '& .MuiSelect-select': {
      padding: '0px 2px',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '20px',
    },
    '& .MuiSelect-icon': {
      color: theme.palette.text.secondary || '#6b7280',
      backgroundColor: '#f8fafc',
      marginRight: '2px',
    },
    '&:hover': {
      borderColor: theme.palette.primary.main || '#3b82f6',
    },
    '&.Mui-focused': {
      borderColor: theme.palette.primary.main || '#3b82f6',
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}20`,
    },
  },
  '@media screen and (max-width: 400px)': {
    toolbar: {
      '& span:nth-of-type(2)': {
        display: 'none',
      },
    },
    selectRoot: {
      marginRight: '8px',
    },
  },
}));

function TablePagination(props) {
  const { classes } = useStyles();

  const handleRowChange = (event) => {
    props.changeRowsPerPage(event.target.value);
  };

  const handlePageChange = (_, page) => {
    props.changePage(page);
  };

  const { count, options, rowsPerPage, page } = props;
  const textLabels = options.textLabels.pagination;

  return (
    <MuiTableFooter>
      <MuiTableRow>
        <MuiTableCell colSpan="1000" className={classes.tableCellContainer}>
          <div className={classes.navContainer}>
            {options.jumpToPage ? (
              <JumpToPage
                count={count}
                page={page}
                rowsPerPage={rowsPerPage}
                textLabels={options.textLabels}
                changePage={props.changePage}
                changeRowsPerPage={props.changeRowsPerPage}
              />
            ) : null}
            <MuiTablePagination
              component="div"
              className={classes.root}
              classes={{
                caption: classes.caption,
                toolbar: classes.toolbar,
                selectRoot: classes.selectRoot,
              }}
              count={count}
              rowsPerPage={rowsPerPage}
              page={getPageValue(count, rowsPerPage, page)}
              labelRowsPerPage={textLabels.rowsPerPage}
              labelDisplayedRows={({ from, to, count }) => `${from}-${to} ${textLabels.displayRows} ${count}`}
              backIconButtonProps={{
                id: 'pagination-back',
                'data-testid': 'pagination-back',
                'aria-label': textLabels.previous,
                title: textLabels.previous || '',
              }}
              nextIconButtonProps={{
                id: 'pagination-next',
                'data-testid': 'pagination-next',
                'aria-label': textLabels.next,
                title: textLabels.next || '',
              }}
              SelectProps={{
                id: 'pagination-input',
                variant: 'standard',
                SelectDisplayProps: { id: 'pagination-rows', 'data-testid': 'pagination-rows' },
                MenuProps: {
                  id: 'pagination-menu',
                  'data-testid': 'pagination-menu',
                  MenuListProps: { id: 'pagination-menu-list', 'data-testid': 'pagination-menu-list' },
                },
              }}
              rowsPerPageOptions={options.rowsPerPageOptions}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowChange}
            />
          </div>
        </MuiTableCell>
      </MuiTableRow>
    </MuiTableFooter>
  );
}

TablePagination.propTypes = {
  /** Total number of table rows */
  count: PropTypes.number.isRequired,
  /** Options used to describe table */
  options: PropTypes.object.isRequired,
  /** Current page index */
  page: PropTypes.number.isRequired,
  /** Total number allowed of rows per page */
  rowsPerPage: PropTypes.number.isRequired,
  /** Callback to trigger rows per page change */
  changeRowsPerPage: PropTypes.func.isRequired,
};

export default TablePagination;
