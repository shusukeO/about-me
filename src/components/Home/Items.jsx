import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    media: {
        height: '250px',
    },
}));

const Items = (props) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <Card>
                <Link to={props.href} style={{ textDecoration: 'none', color: 'black' }}>
                    <CardActionArea href={props.href}>
                        <CardMedia className={classes.media} image={props.image} />
                        <CardHeader title={props.title} subheader={props.description} titleTypographyProps={{ gutterBottom: true }} />
                    </CardActionArea>
                </Link>

            </Card>
        </Grid>
    )
}

export default Items
