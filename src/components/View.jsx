import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const View = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setRows(res.data);
        });
    }, []);

    return (
        <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: '#f5f5f5' }}>
            <Grid container spacing={3}>
                {rows && rows.map((row) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={row.id}>
                        <Card sx={{ 
                            minWidth: 275, 
                            backgroundColor: '#ffffff', 
                            boxShadow: 3,
                            borderRadius: 2,
                            '&:hover': {
                                boxShadow: 6,
                            },
                        }}>
                            <CardContent>
                                <Typography variant="h5" sx={{ fontSize: 20, fontWeight: 'bold', color: '#333' }} textAlign={'left'}>
                                    Product Name: {row.title}
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: 14, color: '#666', marginY: 1 }} textAlign={'left'}>
                                    {row.description}
                                </Typography>
                                <Typography variant="h6" sx={{ fontSize: 18, color: '#1a73e8', marginY: 1 }} textAlign={'left'}>
                                    Price: ${row.price}
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: 14, color: '#999' }} textAlign={'left'}>
                                    Category: {row.category}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" sx={{ color: '#1a73e8' }}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default View;

