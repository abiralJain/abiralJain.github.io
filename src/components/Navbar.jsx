import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Link as MuiLink, Hidden, IconButton } from '@material-ui/core'

const useStyles = makeStyles(({ breakpoints }) => ({
    root: {
        padding: '30px 0'
    },
    navMenu: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: '5',

        '& a': {
            fontSize: '1.2em',
            fontWeight: '500',
            textDecoration: 'none',
            color: '#ffffff'
        }
    },
    navItems: {
        display: 'flex',
        '& a': {
            paddingRight: '40px',
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: '400',
            position: 'relative'
        },
        '& a.active, a:hover': {
            fontWeight: '600',
            textDecoration: 'none',
            cursor: 'pointer'
        },
        '& a:hover': {
            color: '#FFD049'
        },

        [breakpoints.down('sm')]: {
            position: 'absolute',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            top: '0',
            left: '0',
            zIndex: '1',
            backgroundColor: '#202020',
            paddingTop: '180px',

            '& a': {
                marginBottom: '3.5em',
                paddingRight: '0'
            }
        }
    }
}))

const Navbar = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const toggleDrawer = () => setOpen(!open)
    const setOverflow = (val) => {
        document.body.style.overflow = val
    }

    const NavList = () => (
        <div className={classes.navItems}>
            <NavLink
                to={'/'}
                onClick={() => {
                    setOverflow('auto')
                    toggleDrawer()
                }}
            >
                WORK
            </NavLink>
            <NavLink
                to={'/about'}
                onClick={() => {
                    setOverflow('auto')
                    toggleDrawer()
                }}
            >
                ABOUT
            </NavLink>
            <MuiLink
                href={
                    'https://drive.google.com/file/d/1R3615fhUbeU8D3Wlj5pxV6cR7kUoR9K2/view?usp=sharing'
                }
                target={'_blank'}
                onClick={() => {
                    setOverflow('auto')
                    toggleDrawer()
                }}
            >
                RESUME
            </MuiLink>
            <MuiLink
                href={
                    'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=abiral1212.ab@gmail.com'
                }
                target={'_blank'}
                onClick={() => {
                    setOverflow('auto')
                    toggleDrawer()
                }}
            >
                EMAIL
            </MuiLink>
        </div>
    )

    return (
        <div className={classes.root}>
            <Hidden mdUp>
                <div className={classes.navMenu}>
                    <NavLink to={'/'}>Abiral</NavLink>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => {
                            toggleDrawer()
                            setOverflow(open ? 'auto' : 'hidden')
                        }}
                    >
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </div>
                {open && <NavList />}
            </Hidden>
            <Hidden smDown>
                <NavList />
            </Hidden>
        </div>
    )
}

export default Navbar
