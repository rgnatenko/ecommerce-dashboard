/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { data } from '../../data';
import Region from '../../types/Region';
import calculatePercentage from '../../utils/calculatePercentage';


const { getRegions } = data;
const rows = getRegions();

const { regionsTotalData } = data;
const { totalUsersAmount, totalTransactions, totalRevenue, totalConvRate } = regionsTotalData;

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Region;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'countryName',
    numeric: false,
    disablePadding: false,
    label: 'Country',
  },
  {
    id: 'users',
    numeric: false,
    disablePadding: false,
    label: 'Users',
  },
  {
    id: 'transactions',
    numeric: false,
    disablePadding: false,
    label: 'Transactions',
  },
  {
    id: 'revenue',
    numeric: true,
    disablePadding: false,
    label: 'Revenue',
  },
  {
    id: 'convRate',
    numeric: true,
    disablePadding: false,
    label: 'Conv. Rate',
  }
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Region) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            className="table-top__item"
            sx={{ ':first-child': { paddingLeft: '0' } }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

type Props = {
  classToAdd?: string,
};

const RegionsList: React.FC<Props> = ({ classToAdd }) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Region>('countryName');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Region,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n, i) => i);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Paper
      sx={{
        width: '100%',
        height: 'fit-content',
        borderRadius: '8px',
        boxShadow: '0',
        backgroundColor: 'transparent'
      }}
      className={classToAdd}
    >
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(index);

              return (
                <TableRow
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={index}
                  selected={isItemSelected}
                  sx={{
                    cursor: 'pointer',
                    '& .MuiTableCell-root': { paddingBlock: '18px' },
                  }}
                >
                  <TableCell align="left" sx={{ display: 'flex', paddingLeft: '0' }}>
                    <div className="region__order-number">
                      {index}.
                    </div>

                    <div className="region__country">
                      <div className={`icon icon--${row.countryName}`}></div>
                      {row.countryName}
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <div className="region__users-amount">
                      {row.users}
                      <div className="region__percentage">
                        ({calculatePercentage({ totalSum: totalUsersAmount, givenSum: row.users })})
                      </div>
                    </div>
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: '"Nunito Sans", sans-serif' }}
                    align="center"
                  >
                    <div className="region__transactions">
                      {row.transactions}
                      <div className="region__percentage">
                        ({calculatePercentage({ totalSum: totalTransactions, givenSum: row.transactions })})
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div className="region__revenue">
                      {row.revenue}
                      <div className="region__percentage">
                        ({calculatePercentage({ totalSum: totalRevenue, givenSum: row.revenue })})
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div className="region__convRate">
                      {row.convRate}
                      <div className="region__percentage">
                        ({calculatePercentage({ totalSum: totalConvRate, givenSum: row.convRate })})
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ '& .MuiTablePagination-spacer': { WebkitFlex: '0' } }}
        rowsPerPageOptions={[5]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        align='right'
      />
    </Paper>
  );
};

export default RegionsList;
