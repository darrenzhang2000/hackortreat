import { Button, TableContainer } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { fade, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, {useEffect, useState} from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios'
import "./styles.css"

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    search: {
        margin: '20px',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        // marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        display: 'flex',
        flexDirection: 'row',
    },
    searchIcon: {
        paddingTop: '15px',
        paddingRight: '15px'
        // padding: theme.spacing(0, 2),
        // height: '100%',
        // position: 'absolute',
        // pointerEvents: 'none',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))


export default function Inventory() {
    const classes = useStyles()
    const [data, setData] = useState([])


    useEffect(() => {
        const URI = 'https://hackathons.azurewebsites.net/api/getinventory?fbclid=IwAR0NZMwNRDjOQ_zt5zlBMx2E_G0Lba-eTRrdH8x4-w4TyKc0wnSqJg2RfdU'
        axios.get(URI).then(res => setData(res.data.data))
    }, [])

    return (
        <div className="root">
            <div>
                <Button>Filter</Button>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </div>
            <div style={{margin: '20px'}}>
            <TableContainer component={Paper}>
                <TableHead>
                    <TableRow>
                        <TableCell>Item Name</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Sold</TableCell>
                        <TableCell align="right">Donated</TableCell>
                        <TableCell align="right">Backorder</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.category}</TableCell>
                            <TableCell align="right">{row.sold}</TableCell>
                            <TableCell align="right">{row.donated}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>
        </div>
        </div>
    )
}
