import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Projects from './Projects'

const useStyles = makeStyles(({ breakpoints }) => ({
    head: {
        padding: '100px 0 70px 0',
        [breakpoints.down('sm')]: {
            padding: '70px 0'
        }
    },
    title1: {
        fontSize: '1.5em',
        fontWeight: '500',
        marginBottom: '1em',
        [breakpoints.down('sm')]: {
            fontSize: '1.2em'
        },

        [breakpoints.down('xs')]: {
            fontSize: '1em'
        }
    },
    title2: {
        fontSize: '2.8em',
        fontWeight: '300',
        marginBottom: '1em',
        '& span': {
            fontWeight: '600'
        },
        [breakpoints.down('sm')]: {
            marginBottom: '0.8em',
            fontSize: '2.5em'
        },

        [breakpoints.down('xs')]: {
            fontSize: '1.8em'
        }
    },
    title3: {
        fontSize: '1.5em',
        fontWeight: '500',
        lineHeight: '1.4em',
        marginBottom: '3em',
        [breakpoints.down('sm')]: {
            // fontSize: '1.2em',
            marginBottom: '0.1em'
        },

        [breakpoints.down('xs')]: {
            fontSize: '1.2em'
        }
    }
}))

const WorkPage = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.head}>
                <p className={classes.title1}>HEY, I’M ABIRAL 👋🏻</p>
                <p className={classes.title2}>
                    I’m a <span>Product Designer</span>{' '}
                </p>
                <p className={classes.title3}>
                    I’m passionate about solving problems and working with companies around the
                    world to design large-scale projects that lots of people will use for a very
                    long time.
                </p>
            </div>
            <Projects />
        </div>
    )
}

export default WorkPage
