import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Items from './Items';

const Work = (props) => {

    const content = {
        'header': 'Works',
        'description': '研究とか作ったものとか',
        'image1': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        'image2': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        'items': [
            {
                image: 'hackusfc.jpeg',
                title: "Hack U SFC SFC賞",
                description: 'Yahoo!と慶應義塾大学が共同で開催したハッカソンです。「傘マップ」という作品をつくりました。傘を使用している人の位置情報を収集して、実際に雨が降っている場所を視覚化しました。チルトスイッチを活用した極めて簡易な装置で、これを可能にしたアイデアを評価されました。',
                href: 'https://hacku.yahoo.co.jp/sfc2019/',
            },
            {
                image: 'necsfcidea.jpeg',
                title: "ライフサポートメディアアイデアソン 優秀賞",
                description: 'NECと慶應義塾大学共同開催のアイデアソンです。スマートミラーの活用方法を模索し、提案しました。',
                href: 'https://lsm.sfc.keio.ac.jp/',
            },
        ],
        ...props.content
    };

    return (
        <Box py={4}>
            <Container maxWidth="sm">
                <Box textAlign="center" mb={5}>
                    <Typography variant="h4" component="h2" gutterBottom={true}>{content['header']}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">{content['description']}</Typography>
                </Box>
            </Container>
            <Container maxWidth="lg">


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

            </Container>
        </Box>
    );
}

export default Work
