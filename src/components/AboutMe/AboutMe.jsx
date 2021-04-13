import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import AccessibilityTwoToneIcon from '@material-ui/icons/AccessibilityTwoTone';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import clsx from 'clsx';
import StepConnector from '@material-ui/core/StepConnector';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#a2cf6e',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '47%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const ColorlibConnector = withStyles({
    line: {
        margin: 12,
        width: 2,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();

    const icons = {
        1: <AccessibilityTwoToneIcon />,
        2: <SchoolTwoToneIcon />,
        3: <SchoolTwoToneIcon />,
        4: <SchoolTwoToneIcon />,
    };

    return (
        <div
            className={clsx(classes.root)}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(2)
    },
}));


const AboutMe = (props) => {

    const classes = useStyles();


    const content = {
        'header': 'About Me',
        'description': '自己紹介',
        '01_image': 'myicon.png',
        '01_name': '沖原周佑',
        '01_job': 'University Student',
        '01_description': '慶應SFCで主にコンピュータサイエンスを勉強しています。中澤・大越研究室に所属し、センシングに関する研究を行っています。',
        'careers': [
            { label: '1999年 千葉県柏市生まれ' },
            { label: '2018年 千葉県立東葛飾高等学校卒業' },
            { label: '2019年 Skagit Valley College中退' },
            { label: '2019年〜 慶應義塾大学総合政策学部在籍' },
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
                <Container maxWidth="sm">
                    <Card className={classes.root} variant="outlined">
                        <CardContent>

                            <Avatar alt="" src={content['01_image']} className={classes.avatar} />
                            <Box mb={2}>
                                <Typography variant="h6" component="h4" gutterBottom={true}>{content['01_name']}</Typography>
                                <Typography variant="body1" color="primary" component="span">{content['01_job']}</Typography>
                            </Box>
                            <Typography variant="body2" paragraph={true}>{content['01_description']}</Typography>
                        </CardContent>

                    </Card>

                </Container>
                <Container maxWidth="sm">
                    <Box textAlign="center" mb={5}>
                        <Stepper activeStep={content['careers'].length} connector={<ColorlibConnector />} orientation="vertical">
                            {content['careers'].map((career) => (
                                <Step key={career.label}>
                                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                                        <Typography align="center" variant="subtitle1" color="textSecondary">{career.label}</Typography>

                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </Container>

            </Box>
        </section >
    );
}

export default AboutMe
