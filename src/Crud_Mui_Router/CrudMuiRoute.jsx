import { Grid, Paper, Table, TableBody, IconButton,TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"


const CrudMuiRoute = () => {
    // dev are think to this porstion are only for data segment...  *-*-*-*-*-*-*-*-*-*

    // Single Product Data Show logic
    const [prData, setPrData] = useState({
        title:"",
        price:"",
        description:"",
        category:"",
        image:"",
        
    })
    useEffect(() => {
        dispPrData()
    }, [])

    // Display Data
    const dispPrData = () => {
        axios.get('https://fakestoreapi.com/products/')
            .then(json => setAllPrData(json.data))
    }

    // All Product Data Show logic
    const [allPrData,setAllPrData] = useState([])


    // Edit Data
    const editPrData = (id) => {
        axios.get('https://fakestoreapi.com/products/' +id)
            .then((res) => {
                setPrData(res.data)
            })
        dispPrData()
    }


    // Handle Change EventFire
    const prHandleChange = (e) => {
        const {name , value} = e.target
        setPrData({
            ...prData,
            [name]:value
        })
    }

    const rupeeFormatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
      });
    return (
        <>
            <h3>React CRUD with MUI and Router</h3>

            <Grid container  lg={10} ml={10}>
                <TableContainer component={Paper}>
                    <Table  sx={{ Width: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{width:'100px',fontSize:'25px'}}>ID</TableCell>
                                <TableCell sx={{width:'100px',fontSize:'25px'}}>Name</TableCell>
                                <TableCell sx={{fontSize:'25px'}} align="center">Price</TableCell>
                                <TableCell sx={{fontSize:'25px',width:'500px'}} align="center">Description</TableCell>
                                <TableCell sx={{fontSize:'25px'}} align="center">Category</TableCell>
                                <TableCell sx={{fontSize:'25px'}} align="center">Image</TableCell>
                                <TableCell sx={{fontSize:'25px'}} align="right">Edit</TableCell>
                                <TableCell sx={{fontSize:'25px'}} align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {prData.map((i) => (
                                
                                <TableRow
                                    key={i.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" 
                                    sx={{fontSize:'15px',
                                    fontFamily:'inherit'}}>
                                        {i.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row" 
                                    sx={{fontSize:'15px',
                                    fontFamily:'inherit'}}>
                                        {i.title}
                                    </TableCell>
                                    <TableCell align="center">
                                    <Typography variant="h6">{rupeeFormatter.format(i.price)}</Typography>
                                       
                                    </TableCell>
                                    <TableCell align="left" ml={2}>{i.description}</TableCell>
                                    <TableCell align="center">{i.category}</TableCell>
                                    <TableCell align="center"><img src={i.image} alt="image" height={50} width={50} /></TableCell>
                                    <TableCell align="right">
                                        <IconButton 
                                        onClick={() => editPrData(i.id)}
                                        >
                                            <EditIcon  color='primary'/>
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton>
                                            <DeleteIcon  color='warning'/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    )
}

export default CrudMuiRoute
