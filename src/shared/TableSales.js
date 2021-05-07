import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        width: '100%',
    },
});

const createSaleHistoryData = (event, price, owner, buyer, date) => ({
    event,
    price,
    owner,
    buyer,
    date,
});
const createPriceHistoryData = (price, date) => ({ price, date });

const rows = [
    // createData(12, 'Pioter', 'Janek', '22-04-2022 13:44'),
];

const setSaleHistoryRows = (array) => array.map((row) => rows.push(
    createSaleHistoryData(
        row.event,
        row.price,
        row.owner,
        row.buyer,
        row.date,
    ),
));
// eslint-disable-next-line max-len
const setPriceHistoryRows = (array) => array.map((row) => rows.push(createPriceHistoryData(row.price, row.date)));

// eslint-disable-next-line react/prop-types
export default function TableSales({ saleHistory, priceHistory, rowsArray }) {
    if (saleHistory) {
        setSaleHistoryRows(rowsArray);
    }
    if (priceHistory) {
        setPriceHistoryRows(rowsArray);
    }
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        {saleHistory ? (
                            <>
                                <TableCell align='right'>Akcja</TableCell>
                                <TableCell align='right'>Cena (ETH)</TableCell>
                                <TableCell align='right'>Sprzedający</TableCell>
                                <TableCell align='right'>Kupujący</TableCell>
                                <TableCell align='right'>Data</TableCell>
                            </>
                        ) : (
                            <>
                                <TableCell align='right'>Cena (ETH)</TableCell>
                                <TableCell align='right'>Data</TableCell>
                            </>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.date}>
                            {saleHistory ? (
                                <>
                                    <TableCell align='right'>
                                        {row.event}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.price}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.owner}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.buyer}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.date}
                                    </TableCell>
                                </>
                            ) : (
                                <>
                                    <TableCell align='right'>
                                        {row.price}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.date}
                                    </TableCell>
                                </>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
