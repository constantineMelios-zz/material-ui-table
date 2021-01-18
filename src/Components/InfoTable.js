import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

import './InfoTable.css'

function createData(id, partner, offerName, startDate, endDate, couponsNumber) {
  return { partner, offerName, startDate, endDate, couponsNumber };
}

const rows = [
  createData(1, 'Kotsovolos', "50% σε κλιματιστικά", "17/7/2021", "24/7/2021", 500),
  createData(2, 'Nespresso', "Αποκλειστικές συνταγές καφέ", "31/8/2021", "24/10/2021", 2000),
  createData(3, 'Travel', "ΝΥ ταξίδι", "01/9/2021", "05/9/2021", 3),
  createData(1, 'Kotsovolos', "50% σε κλιματιστικά", "17/7/2021", "24/7/2021", 500),
  createData(2, 'Nespresso', "Αποκλειστικές συνταγές καφέ", "31/8/2021", "24/10/2021", 2000),
  createData(3, 'Travel', "ΝΥ ταξίδι", "01/9/2021", "05/9/2021", 3),
  createData(1, 'Kotsovolos', "50% σε κλιματιστικά", "17/7/2021", "24/7/2021", 500),
  createData(2, 'Nespresso', "Αποκλειστικές συνταγές καφέ", "31/8/2021", "24/10/2021", 2000),
  createData(3, 'Travel', "ΝΥ ταξίδι", "01/9/2021", "05/9/2021", 3),
  createData(1, 'Kotsovolos', "50% σε κλιματιστικά", "17/7/2021", "24/7/2021", 500),
  createData(2, 'Nespresso', "Αποκλειστικές συνταγές καφέ", "31/8/2021", "24/10/2021", 2000),
  createData(3, 'Travel', "ΝΥ ταξίδι", "01/9/2021", "05/9/2021", 3),
  createData(1, 'Kotsovolos', "50% σε κλιματιστικά", "17/7/2021", "24/7/2021", 500),
  createData(2, 'Nespresso', "Αποκλειστικές συνταγές καφέ", "31/8/2021", "24/10/2021", 2000),
  createData(3, 'Travel', "ΝΥ ταξίδι", "01/9/2021", "05/9/2021", 3),
  createData(1, 'Kotsovolos', "50% σε κλιματιστικά", "17/7/2021", "24/7/2021", 500),
  createData(2, 'Nespresso', "Αποκλειστικές συνταγές καφέ", "31/8/2021", "24/10/2021", 2000),
  createData(3, 'Travel', "ΝΥ ταξίδι", "01/9/2021", "05/9/2021", 3),
  createData(1, 'Kotsovolos', "50% σε κλιματιστικά", "17/7/2021", "24/7/2021", 500),
  createData(2, 'Nespresso', "Αποκλειστικές συνταγές καφέ", "31/8/2021", "24/10/2021", 2000),
  createData(3, 'Travel', "ΝΥ ταξίδι", "01/9/2021", "05/9/2021", 3),
  createData(1, 'Kotsovolos', "50% σε κλιματιστικά", "17/7/2021", "24/7/2021", 500),
  createData(2, 'Nespresso', "Αποκλειστικές συνταγές καφέ", "31/8/2021", "24/10/2021", 2000),
  createData(3, 'Travel', "ΝΥ ταξίδι", "01/9/2021", "05/9/2021", 3),
  createData(1, 'Kotsovolos', "50% σε κλιματιστικά", "17/7/2021", "24/7/2021", 500),
  createData(2, 'Nespresso', "Αποκλειστικές συνταγές καφέ", "31/8/2021", "24/10/2021", 2000),
  createData(3, 'Travel', "ΝΥ ταξίδι", "01/9/2021", "05/9/2021", 3),
  createData(1, 'Kotsovolos', "50% σε κλιματιστικά", "17/7/2021", "24/7/2021", 500),
  createData(2, 'Nespresso', "Αποκλειστικές συνταγές καφέ", "31/8/2021", "24/10/2021", 2000),
  createData(3, 'Travel', "ΝΥ ταξίδι", "01/9/2021", "05/9/2021", 3),
  createData(1, 'Kotsovolos', "50% σε κλιματιστικά", "17/7/2021", "24/7/2021", 500),
  createData(2, 'Nespresso', "Αποκλειστικές συνταγές καφέ", "31/8/2021", "24/10/2021", 2000),
  createData(3, 'Travel', "ΝΥ ταξίδι", "01/9/2021", "05/9/2021", 3)
];

function InfoTable() {
  const classes = { styles };
  console.log(classes)
  return(
    <>
      <TableContainer className="table-container" component={Paper}>
        <Table className="table" stickyHeader >
          <TableHead className="table-head">
            <TableRow className="table-row">
              <TableCell className="table-cell" align="center">Συνεργάτης</TableCell>
              <TableCell className="table-cell" align="center">Όνομα Προσφοράς</TableCell>
              <TableCell className="table-cell" align="center">Ημερομηνία Έναρξης</TableCell>
              <TableCell className="table-cell" align="center">Ημερομηνία Λήξης</TableCell>
              <TableCell className="table-cell" align="center">Αριθμός Κουπονιών</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow className="table-row" key={row.id} >
                <TableCell className="table-cell" align="center">{row.partner}</TableCell>
                <TableCell className="table-cell" align="center">{row.offerName}</TableCell>
                <TableCell className="table-cell" align="center">{row.startDate}</TableCell>
                <TableCell className="table-cell" align="center">{row.endDate}</TableCell>
                <TableCell className="table-cell" align="center">{row.couponsNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default InfoTable;