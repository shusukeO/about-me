import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Items from './Items';



const Home = (props) => {

    const content = {
        'header': 'Shusuke Okihara',
        'description': '@Keio SFC',
        'items': [
            {
                image: 'myicon.png',
                title: "About Me",
                description: '経歴や所属',
                href: '/AboutMe',
            },
            {
                image: 'works.jpeg',
                title: "Works",
                description: 'いろいろ',
                href: '/Work',
            },
        ],
        ...props.content
    };

    return (
        <section>
            <Box pt={8} pb={10}>
                <Container maxWidth="sm">
                    <Box textAlign="center" mb={5}>
                        <Typography variant="h4" component="h2" gutterBottom={true}>{content['header']}</Typography>
                        <Typography variant="subtitle1" color="textSecondary">{content['description']}</Typography>
                    </Box>
                </Container>
                <Container maxWidth="md">
                    <Box textAlign="center">
                        <Grid container spacing={4}>
                            {content['items'].map((item) =>
                                <Items
                                    key={item.title}
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    href={item.href}
                                />
                            )}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </section>
    );
}

export default Home
