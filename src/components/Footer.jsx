import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link } from '@material-ui/core'

const useStyles = makeStyles(({ breakpoints }) => ({
    foot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '100px 0',
        width: '80%',
        margin: '0 auto',
        '& a': {
            flex: '0 0 calc(10.66%)',
            textAlign: 'center',
            margin: '20px 10px',
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: '400'
        },
        '& a:hover': {
            fontWeight: '600',
            'text-decoration': 'none',
            cursor: 'pointer',
            color: '#FFD049'
        },
        [breakpoints.down('sm')]: {
            width: '100%'
        }
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.foot}>
            <Link href={'https://www.linkedin.com/in/abiral-jain/'} target={'_blank'}>
                LinkedIn
            </Link>
            <Link href={'https://www.instagram.com/a__ne_/'} target={'_blank'}>
                Instagram
            </Link>
            <Link
                href={
                    'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=abiral1212.ab@gmail.com'
                }
                target={'_blank'}
            >
                Email
            </Link>
            <Link href={'https://dribbble.com/AbiralJain'} target={'_blank'}>
                Dribbble
            </Link>
            <Link href={'https://abiraljain.medium.com/'} target={'_blank'}>
                Medium
            </Link>
            <Link href={'https://www.behance.net/abiraljain'} target={'_blank'}>
                Behance
            </Link>
            <Link href={'https://github.com/abiralJain'} target={'_blank'}>
                Github
            </Link>
        </div>
    )
}

export default Footer
