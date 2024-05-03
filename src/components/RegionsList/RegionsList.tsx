/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { data } from '../../data';
import Region from '../../types/Region';
import calculatePercentage from '../../utils/calculatePercentage';


const { getRegions } = data;
const rows = getRegions();

const { regionsTotalData } = data;
const { totalUsersAmount, totalTransactions, totalRevenue, totalConvRate } = regionsTotalData;

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

function EnhancedTableHead() {
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


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
        <Table aria-labelledby="tableTitle">
          <EnhancedTableHead />
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow
                  role="checkbox"
                  tabIndex={-1}
                  key={index}
                  sx={{
                    cursor: 'pointer',
                    '& .MuiTableCell-root': { paddingBlock: '18px' },
                  }}
                >
                  <TableCell align="left" sx={{ display: 'flex', paddingLeft: '0' }}>
                    <div className="regionlist__order-number">
                      {index}.
                    </div>

                    <div className="regionlist__country">
                      <div className={`icon icon--${row.countryName}`}></div>
                      {row.countryName}
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <div className="regionlist__users-amount">
                      {row.users}
                      <div className="regionlist__percentage">
                        ({calculatePercentage({ totalSum: totalUsersAmount, givenSum: row.users })})
                      </div>
                    </div>
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: '"Nunito Sans", sans-serif' }}
                    align="center"
                  >
                    <div className="regionlist__transactions">
                      {row.transactions}
                      <div className="regionlist__percentage">
                        ({calculatePercentage({ totalSum: totalTransactions, givenSum: row.transactions })})
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div className="regionlist__revenue">
                      {row.revenue}
                      <div className="regionlist__percentage">
                        ({calculatePercentage({ totalSum: totalRevenue, givenSum: row.revenue })})
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div className="regionlist__convRate">
                      {row.convRate}
                      <div className="regionlist__percentage">
                        ({calculatePercentage({ totalSum: totalConvRate, givenSum: row.convRate })})
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow>
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
