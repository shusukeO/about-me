import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Items from './Items';

const Work = (props) => {

    const content = {
        'header': 'Works',
        'description': '受賞歴、作ったもの、研究',
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
            {
                title: "「アート&テクノロジー東北2019」コンテスト 奨励賞",
                description: 'アートとテクノロジーを合わせた作品をつくるサークルでの活動です。ちょっと変わった七夕の短冊をつくりました。',
                href: 'http://www-cg.cis.iwate-u.ac.jp/AT2019/award2019.html',
            },
            {
                title: "学部・大学院修士4年一貫教育プログラムに参加",
                description: '4年間で、総合政策学部または環境情報学部の学士号と、大学院政策・メディア研究科の修士号の2つの学位を取得できるプログラムです。GPAを含む特別な要件を満たすことで、参加、続行、完了できます。',
                href: 'https://www.students.keio.ac.jp/sfc/pmei/procedure/4yr-integrate-pgm/index.html',
            },
        ],
        ...props.content
    };

    return (
        <Box py={4}>
            <Container maxWidth="sm">
                <Box textAlign="center" mb={5}>
                    <Typography variant="h10" component="h10" gutterBottom={true}>{content['header']}</Typography>
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
