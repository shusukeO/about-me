import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';



const useStyles = makeStyles((theme) => ({
    media: {
        height: '256px',
        [theme.breakpoints.up('lg')]: {
            height: '512px',
        }
    },
}));

const Items = (props) => {

    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardActionArea href={props.href} target="_blank">
                        {props.image == null ?
                            <CardMedia className={classes.media} image="myicon.png" /> :
                            <CardMedia className={classes.media} image={props.image} />
                        }
                        <CardHeader title={props.title} subheader={props.description} titleTypographyProps={{ gutterBottom: true }} />
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    )
}

export default Items
