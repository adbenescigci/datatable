import React, { useCallback } from 'react';
import clsx from 'clsx';
import { TableCell } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ name: 'MUIDataTableBodyCell' })((theme) => ({
  root: {
    // Modern cell styling
    display: 'table-cell',
    textAlign: 'center',
    verticalAlign: 'middle',
    border: 'none',
    padding: 0,
    height: '28px',
    minHeight: '28px',
    maxHeight: '28px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: theme.typography.body2.fontSize || '14px',
    fontFamily: theme.typography.fontFamily || 'Inter, system-ui, sans-serif',
    color: theme.palette.text.primary || '#374151',
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    // Action button styling
    '& .MuiIconButton-root': {
      borderRadius: '6px',
      transition: 'background-color 0.2s ease',
      '&:hover': {
        backgroundColor: '#f1f5f9',
      },
    },
  },
  cellHide: {
    display: 'none',
  },
  simpleHeader: {
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
      fontWeight: 'bold',
      width: '100%',
      boxSizing: 'border-box',
    },
  },
  simpleCell: {
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
      width: '100%',
      boxSizing: 'border-box',
    },
  },
  stackedHeader: {
    verticalAlign: 'top',
  },
  stackedCommon: {
    [theme.breakpoints.down('md')]: {
      display: 'table-cell',
      fontSize: theme.typography.body2.fontSize || '14px',
      height: '28px',
      minHeight: '28px',
      maxHeight: '28px',
      width: 'auto',
      boxSizing: 'border-box',
      textAlign: 'center',
      verticalAlign: 'middle',
      border: 'none',
      padding: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontFamily: theme.typography.fontFamily || 'Inter, system-ui, sans-serif',
      color: theme.palette.text.primary || '#374151',
      '&:last-child': {
        borderBottom: 'none',
      },
      '&:nth-last-of-type(2)': {
        borderBottom: 'none',
      },
    },
  },
  stackedCommonAlways: {
    display: 'inline-block',
    fontSize: '16px',
    height: 'auto',
    width: 'calc(50%)',
    boxSizing: 'border-box',
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:nth-last-of-type(2)': {
      borderBottom: 'none',
    },
  },
  stackedParent: {
    [theme.breakpoints.down('md')]: {
      display: 'table-cell',
      fontSize: theme.typography.body2.fontSize || '14px',
      height: '28px',
      minHeight: '28px',
      maxHeight: '28px',
      width: 'auto',
      boxSizing: 'border-box',
      textAlign: 'center',
      verticalAlign: 'middle',
      border: 'none',
      padding: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontFamily: theme.typography.fontFamily || 'Inter, system-ui, sans-serif',
      color: theme.palette.text.primary || '#374151',
    },
  },
  stackedParentAlways: {
    display: 'table-cell',
    fontSize: theme.typography.body2.fontSize || '14px',
    height: '32px',
    minHeight: '32px',
    maxHeight: '32px',
    width: 'auto',
    boxSizing: 'border-box',
    textAlign: 'center',
    verticalAlign: 'middle',
    border: 'none',
    padding: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontFamily: theme.typography.fontFamily || 'Inter, system-ui, sans-serif',
    color: theme.palette.text.primary || '#374151',
  },
  cellStackedSmall: {
    [theme.breakpoints.down('md')]: {
      width: '50%',
      boxSizing: 'border-box',
    },
  },
  responsiveStackedSmall: {
    [theme.breakpoints.down('md')]: {
      width: '50%',
      boxSizing: 'border-box',
    },
  },
  responsiveStackedSmallParent: {
    [theme.breakpoints.down('md')]: {
      display: 'table-cell',
      fontSize: theme.typography.body2.fontSize || '14px',
      height: '28px',
      minHeight: '28px',
      maxHeight: '28px',
      width: 'auto',
      boxSizing: 'border-box',
      textAlign: 'center',
      verticalAlign: 'middle',
      border: 'none',
      padding: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontFamily: theme.typography.fontFamily || 'Inter, system-ui, sans-serif',
      color: theme.palette.text.primary || '#374151',
    },
  },
}));

function TableBodyCell(props) {
  const { classes } = useStyles();
  const { children, colIndex, columnHeader, options, dataIndex, rowIndex, className, print, tableId, ...otherProps } =
    props;
  const onCellClick = options.onCellClick;

  const handleClick = useCallback(
    (event) => {
      onCellClick(children, { colIndex, rowIndex, dataIndex, event });
    },
    [onCellClick, children, colIndex, rowIndex, dataIndex],
  );

  // Event listeners. Avoid attaching them if they're not necessary.
  let methods = {};
  if (onCellClick) {
    methods.onClick = handleClick;
  }

  let cells = [
    <div
      key={1}
      className={clsx(
        {
          lastColumn: colIndex === 2,
          [classes.root]: true,
          [classes.cellHide]: true,
          [classes.stackedHeader]: true,
          [classes.stackedCommon]:
            options.responsive === 'vertical' ||
            options.responsive === 'stacked' ||
            options.responsive === 'stackedFullWidth',
          [classes.stackedCommonAlways]: options.responsive === 'verticalAlways',
          [classes.cellStackedSmall]:
            options.responsive === 'stacked' ||
            (options.responsive === 'stackedFullWidth' &&
              (options.setTableProps().padding === 'none' || options.setTableProps().size === 'small')),
          [classes.simpleHeader]: options.responsive === 'simple',
          'datatables-noprint': !print,
        },
        className,
      )}>
      {columnHeader}
    </div>,
    <div
      key={2}
      className={clsx(
        {
          [classes.root]: true,
          [classes.stackedCommon]:
            options.responsive === 'vertical' ||
            options.responsive === 'stacked' ||
            options.responsive === 'stackedFullWidth',
          [classes.stackedCommonAlways]: options.responsive === 'verticalAlways',
          [classes.responsiveStackedSmall]:
            options.responsive === 'stacked' ||
            (options.responsive === 'stackedFullWidth' &&
              (options.setTableProps().padding === 'none' || options.setTableProps().size === 'small')),
          [classes.simpleCell]: options.responsive === 'simple',
          'datatables-noprint': !print,
        },
        className,
      )}>
      {typeof children === 'function' ? children(dataIndex, rowIndex) : children}
    </div>,
  ];

  var innerCells;
  if (
    ['standard', 'scrollMaxHeight', 'scrollFullHeight', 'scrollFullHeightFullWidth'].indexOf(options.responsive) !== -1
  ) {
    innerCells = cells.slice(1, 2);
  } else {
    innerCells = cells;
  }

  return (
    <TableCell
      {...methods}
      data-colindex={colIndex}
      data-tableid={tableId}
      className={clsx(
        {
          [classes.root]: true,
          [classes.stackedParent]:
            options.responsive === 'vertical' ||
            options.responsive === 'stacked' ||
            options.responsive === 'stackedFullWidth',
          [classes.stackedParentAlways]: options.responsive === 'verticalAlways',
          [classes.responsiveStackedSmallParent]:
            options.responsive === 'vertical' ||
            options.responsive === 'stacked' ||
            (options.responsive === 'stackedFullWidth' &&
              (options.setTableProps().padding === 'none' || options.setTableProps().size === 'small')),
          [classes.simpleCell]: options.responsive === 'simple',
          'datatables-noprint': !print,
        },
        className,
      )}
      {...otherProps}>
      {innerCells}
    </TableCell>
  );
}

export default TableBodyCell;
