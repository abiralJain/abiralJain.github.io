import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/styles'
import { Link as MuiLink, useMediaQuery } from '@material-ui/core'
import CollegeMateLogo from '../../assets/WorkPageImgs/logos/CollegeMate.png'
import UdantaLogo from '../../assets/WorkPageImgs/logos/Udanta.png'
import AmInLogo from '../../assets/WorkPageImgs/logos/AmIn.png'
import PractiseLogo from '../../assets/WorkPageImgs/logos/Practise.png'
import CollegeMateBg from '../../assets/WorkPageImgs/ProjectBg/ClgMate.png'
import UdantaBg from '../../assets/WorkPageImgs/ProjectBg/Udanta.png'
import AmInBg from '../../assets/WorkPageImgs/ProjectBg/AmIn.png'
import DesignBg from '../../assets/WorkPageImgs/ProjectBg/design.png'
import CollegeMateBgResp from '../../assets/WorkPageImgs/ProjectBgResp/CollegeMate.png'
import UdantaBgResp from '../../assets/WorkPageImgs/ProjectBgResp/Udanta.png'
import AmInBgResp from '../../assets/WorkPageImgs/ProjectBgResp/AmIn.png'
import DesignBgResp from '../../assets/WorkPageImgs/ProjectBgResp/Design.png'

const useStyles = makeStyles(({ breakpoints }) => ({
    head: {
        display: 'flex',
        justifyContent: 'center',
        padding: '80px 0',

        [breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: '40px 0'
        }
    },
    title1: {
        fontSize: '2.5em',
        width: '30%',
        textAlign: 'center',
        fontWeight: '600',

        [breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'left',
            marginBottom: '0.7em'
        },

        [breakpoints.down('xs')]: {
            fontSize: '2em'
        }
    },
    title2: {
        fontSize: '1.5em',
        fontWeight: '500',
        width: '45%',
        color: '#D0D0D0',

        [breakpoints.down('sm')]: {
            width: '100%',
            marginBottom: '1em'
        },

        [breakpoints.down('xs')]: {
            fontSize: '1.2em',
            marginBottom: '1em'
        }
    },

    cardRoot: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: '2em',
        padding: '6em 4em 3em 4em',
        display: 'flex',
        flexDirection: 'column',

        '& div img': {
            marginBottom: '10em',
            height: '1.6em'
        },

        [breakpoints.down('sm')]: {
            padding: '3em 4em 2em 2em',

            '& div img': {
                height: '1.2em',
                marginBottom: '3em'
            }
        }
    },
    cardRole: {
        fontFamily: "'Bebas Neue', cursive",
        fontSize: '1.1em',
        letterSpacing: '0.05em',
        opacity: '52%',
        marginBottom: '1.5em',

        [breakpoints.down('sm')]: {
            fontSize: '0.9em'
        }
    },
    cardTitle: {
        fontFamily: "'Teko', sans-serif",
        fontSize: '3em',
        fontWeight: '500',
        lineHeight: '100%',
        marginBottom: '0.5em',
        width: '40%',

        [breakpoints.down('sm')]: {
            width: '55%'
        },

        [breakpoints.down('xs')]: {
            fontSize: '2em',
            width: '70%'
        }
    },
    cardDescription: {
        fontSize: '1em',
        fontWeight: '600',
        marginBottom: '4em',
        lineHeight: '1.6em',
        width: '40%',

        [breakpoints.down('sm')]: {
            width: '55%'
        },

        [breakpoints.down('xs')]: {
            fontSize: '0.8em',
            width: '70%'
        }
    },
    cardBtn: {
        fontFamily: "'Teko', sans-serif",
        fontWeight: '400',
        letterSpacing: '0.1em',
        border: '2px solid #ffffff',
        width: '9em',
        textAlign: 'center',
        padding: '0.7em 0',
        fontSize: '1em',
        color: '#ffffff',
        'text-decoration': 'none',
        transition: '300ms ease',
        marginBottom: '6em',

        '&:hover': {
            'text-decoration': 'none',
            backgroundColor: '#ffffff',
            color: '#000000'
        },

        [breakpoints.down('xs')]: {
            fontSize: '0.8em',
            marginBottom: '3em'
        }
    }
}))

const Projects = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('xs'))
    return (
        <div>
            <div className={classes.head}>
                <p className={classes.title1}>Projects</p>
                <p className={classes.title2}>
                    I’ve worked with start-ups and small companies, also I’ve created some concepts
                    for my personal side projects.
                </p>
            </div>
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={classes.cardRoot}
                style={{
                    backgroundImage: `url(${
                        matches ? CollegeMateBgResp : CollegeMateBg
                    }), linear-gradient(to bottom right, #303030, #414141, #303030, #414141, #303030) `
                }}
            >
                <div>
                    <img src={CollegeMateLogo} alt={'College Mate'} />
                </div>
                <p className={classes.cardRole}>SOLO DESIGNER</p>
                <p className={classes.cardTitle}>
                    A WEBSITE THAT MAKES YOUR COLLEGE LIFE IS EASIER.
                </p>
                <p className={classes.cardDescription}>
                    I’ll be sharing my process of designing a website for college students that
                    would allow them to keep a better track of their college activities.
                </p>
                <MuiLink
                    className={classes.cardBtn}
                    href={
                        'https://uxplanet.org/collegemate-a-website-that-makes-your-college-life-easier-359435fff947'
                    }
                    target={'_blank'}
                >
                    READ CASE STUDY
                </MuiLink>
            </div>
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={classes.cardRoot}
                style={{ backgroundImage: `url(${matches ? UdantaBgResp : UdantaBg})` }}
            >
                <div>
                    <img src={UdantaLogo} alt={'Udanta'} width={'120em'} />
                </div>
                <p className={classes.cardRole}>UI/UX DESIGNER</p>
                <p className={classes.cardTitle}>DESIGNING A QUICK/EASY NEWS APP</p>
                <p className={classes.cardDescription}>
                    It is a short video news app that provides every topic of news across the globe
                    from your Local city to Global.
                </p>
                <MuiLink
                    className={classes.cardBtn}
                    href={
                        'https://bootcamp.uxdesign.cc/udanta-designing-a-quick-easy-news-app-7be0a8be5ed'
                    }
                    target={'_blank'}
                >
                    READ CASE STUDY
                </MuiLink>
            </div>
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={classes.cardRoot}
                style={{
                    backgroundImage: `url(${
                        matches ? AmInBgResp : AmInBg
                    }), linear-gradient(to bottom right, #303030, #414141, #303030, #414141, #303030)  `
                }}
            >
                <div>
                    <img src={AmInLogo} alt={'I Am In'} width={'180em'} />
                </div>
                <p className={classes.cardRole}>UI DESIGNER</p>
                <p className={classes.cardTitle}>CREATING BETTER PAYMENT EXPERIENCE FOR CHILDREN</p>
                <p className={classes.cardDescription}>
                    IAMIN-World is a EdTech firm which is on a mission to make this world
                    financially literate .I worked with UI team and also engage with strategy and
                    branding team.
                </p>
                <MuiLink
                    className={classes.cardBtn}
                    href={'https://www.behance.net/gallery/139144739/Neo-bank-Mobile-App-Concept'}
                    target={'_blank'}
                >
                    READ CASE STUDY
                </MuiLink>
            </div>
            <div
                data-aos="fade-up"
                data-aos-once="true"
                className={classes.cardRoot}
                style={{
                    backgroundImage: `url(${
                        matches ? DesignBgResp : DesignBg
                    }), linear-gradient(to bottom right, #303030, #414141, #303030, #414141, #303030) `
                }}
            >
                <div>
                    <img src={PractiseLogo} alt={'Practise'} width={'180em'} />
                </div>
                <p className={classes.cardRole}>DESIGNER</p>
                <p className={classes.cardTitle}>3D & UI DESIGN PRACTICE CHALLENGES</p>
                <p className={classes.cardDescription}>
                    In my free time I like to sharpen my muscles on new trends and design techniques
                    and also in prototyping.
                </p>
                <Link className={classes.cardBtn} to={'/design'}>
                    VIEW MORE
                </Link>
            </div>
        </div>
    )
}

export default Projects
