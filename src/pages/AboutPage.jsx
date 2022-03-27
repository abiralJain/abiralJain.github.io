import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ProfileImg from '../assets/AboutPageImgs/Profile.png'
import { Hidden, Link as MuiLink } from '@material-ui/core'

const useStyles = makeStyles(({ breakpoints }) => ({
    aboutHeader: {
        margin: '40px 0',
        display: 'flex',
        justifyContent: 'space-between',
        [breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    },
    aboutHeaderLeft: {
        width: '40%',

        [breakpoints.down('md')]: {
            width: '100%'
        }
    },
    aboutHeaderRight: {
        width: '35%',
        '& img': {
            width: '100%',

            [breakpoints.between('md', 'md')]: {
                width: '80%'
            }
        },

        [breakpoints.down('md')]: {
            width: '100%',
            marginBottom: '2em'
        }
    },
    heading1: {
        fontSize: '1.5em',
        fontWeight: '500',
        marginBottom: '0.7em',

        [breakpoints.down('sm')]: {
            fontSize: '1.2em'
        },

        [breakpoints.down('xs')]: {
            fontSize: '1em'
        }
    },
    heading2: {
        fontSize: '2.8em',
        fontWeight: '300',
        marginBottom: '1.2em',
        '& span': {
            fontWeight: '600'
        },

        [breakpoints.down('sm')]: {
            fontSize: '1.8em'
        }
    },
    heading3: {
        fontSize: '1.1em',
        fontWeight: '500',
        marginBottom: '1.4em',
        lineHeight: '1.6em',

        [breakpoints.down('sm')]: {
            fontSize: '1em'
        }
    },
    cont: {
        marginBottom: '5em'
    },
    contTitle: {
        fontSize: '1.56em',
        fontWeight: '600',
        marginBottom: '1.4em'
    },
    contDesc: {
        fontSize: '1.12em',
        fontWeight: '500',
        marginBottom: '1em',
        lineHeight: '1.4em',
        '& > span': {
            display: 'block',
            '& > a': {
                display: 'inline',
                color: '#FFD049',
                textDecoration: 'none'
            },
            '& > a:hover': {
                textDecoration: 'none'
            }
        },

        [breakpoints.down('sm')]: {
            fontSize: '1em'
        }
    }
}))

const AboutPage = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.aboutHeader}>
                <div className={classes.aboutHeaderLeft}>
                    <p className={classes.heading1}>HI, AGAIN!</p>
                    <p className={classes.heading2}>
                        I’m <span>Abiral Jain ✌</span>
                    </p>
                    <Hidden lgUp>
                        <div className={classes.aboutHeaderRight}>
                            <img src={ProfileImg} alt={'Abiral Jain'} />
                        </div>
                    </Hidden>
                    <p className={classes.heading3}>
                        I am an Engineer turned into a self-taught Product Designer. Currently
                        pursuing opportunities with teams that value open idea sharing and
                        meaningful design.
                    </p>
                    <p className={classes.heading3}>
                        I'm passionate about improving the lives of others through design. I always
                        try to understand the "why" behind everything that I do, both in design and
                        in life. I'm constantly learning new things every day and love meeting
                        people.
                    </p>
                </div>
                <Hidden mdDown>
                    <div className={classes.aboutHeaderRight}>
                        <img src={ProfileImg} alt={'Abiral Jain'} />
                    </div>
                </Hidden>
            </div>
            <div className={classes.cont}>
                <p className={classes.contTitle}>MY JOURNEY</p>
                <p className={classes.contDesc}>
                    I started exploring the field of UX/UI design about 2 years ago when I started
                    learning front-end development, at first I start copying different types of
                    websites, I take inspiration from awwwards to make a stand-out websites.
                </p>
                <p className={classes.contDesc}>
                    As I go deeper I got interested and start reading blogs to know more about
                    design and the decisions we made. I have learned a lot of the processes,
                    concepts, and theories of UX/UI and product design through youtube videos,
                    reading blogs, and applying these to projects.
                </p>
                <p className={classes.contDesc}>
                    Since then, I have been practicing digital design skills. I aspire to become a
                    designer who can master both problem-solving skills and delicate visual design.
                </p>
            </div>
            <div className={classes.cont}>
                <p className={classes.contTitle}>APART FROM DESIGN</p>
                <p className={classes.contDesc}>
                    I love watching story-based movies or anime. Apart from that I also watch
                    historical dramas, recently I watch Chandragupta Maurya and Mahabharata.
                </p>
                <p className={classes.contDesc}>
                    Naruto is my favorite character from Naruto-Shippuuden. Dattebayo! 😂
                </p>
                <p className={classes.contDesc}>
                    I also read self-help books. Recently I finished “Steal Like An Artist”🕵️‍♀️ by
                    Austin Kleon. Apart from that I also like to read the business case studies,
                    brand case studies to get better clarity about the product and its
                    implementation.
                </p>
                <p className={classes.contDesc}>
                    Badminton🏸 is my favorite sport. Daily I find half an hour for badminton.
                </p>
            </div>
            <div className={classes.cont}>
                <p className={classes.contDesc}>Currently, I'm open to new job opportunities.</p>
                <p className={classes.contDesc}>
                    To know more about my work or to discuss Naruto,
                    <span>
                        Connect with me{' '}
                        <MuiLink
                            href={'https://www.linkedin.com/in/abiral-jain/'}
                            target={'_blank'}
                        >
                            👉 LinkedIn
                        </MuiLink>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default AboutPage
