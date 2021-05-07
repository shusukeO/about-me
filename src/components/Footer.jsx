import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import TwitterIcon from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        }
    },
    iconsBoxRoot: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginBottom: theme.spacing(2),
        }
    },
    copy: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            order: 12,
        }
    }
}));

const Footer = (props) => {
    const classes = useStyles();

    const content = {
        'copy': '© 2021 ShusukeO. All rights reserved.',
        'github': 'https://github.com/shusukeO',
        ...props.content
    };

    return (
        <footer className={classes.root}>
            <Container maxWidth="lg">
                <Box py={6} display="flex" flexWrap="wrap" alignItems="center">
                    <Typography color="textSecondary" component="p" gutterBottom={false} className={classes.copy}>{content['copy']}</Typography>
                    <Box ml="auto" className={classes.iconsBoxRoot}>
                        <IconButton aria-label="Twitter">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton aria-label="GitHub" href={content['github']}>
                            <GitHub />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </footer>
    );
}

export default Footer
