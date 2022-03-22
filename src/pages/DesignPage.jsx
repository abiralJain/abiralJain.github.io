import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Img1 from '../assets/DesignPageImgs/headers/uiDesigns.png'
import Img2 from '../assets/DesignPageImgs/headers/3dDesigns.png'
import UI1 from '../assets/DesignPageImgs/ui-designs/u1.png'
import UI2 from '../assets/DesignPageImgs/ui-designs/u2.png'
import UI3 from '../assets/DesignPageImgs/ui-designs/u3.png'
import UI4 from '../assets/DesignPageImgs/ui-designs/u4.png'
import UI5 from '../assets/DesignPageImgs/ui-designs/u5.png'
import TD1 from '../assets/DesignPageImgs/3d-designs/i1.png'
import TD2 from '../assets/DesignPageImgs/3d-designs/I2.gif'
import TD3 from '../assets/DesignPageImgs/3d-designs/I3.gif'
import TD4 from '../assets/DesignPageImgs/3d-designs/i4.png'
import TD5 from '../assets/DesignPageImgs/3d-designs/i5.png'

const useStyles = makeStyles(({ breakpoints }) => ({
    cont: {
        padding: '50px 0'
    },
    titleImg: {
        display: 'block',
        margin: '30px auto',
        height: '2.8em',

        [breakpoints.down('xs')]: {
            height: '2em'
        }
    },

    titleText: {
        margin: '60px 0 60px 100px',
        width: '40%',
        lineHeight: '1.6em',
        opacity: '72%',

        [breakpoints.down('sm')]: {
            margin: '30px 0 60px 0',
            width: '100%',
            textAlign: 'center'
        }
    },
    imgCont1: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '80px',
        '& div': {
            gridColumnStart: '1',
            gridColumnEnd: '4',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '100px'
        },
        '& img': {
            width: '100%'
        },

        [breakpoints.down('sm')]: {
            display: 'block',
            textAlign: 'center',
            '& div': {
                display: 'block'
            },
            '& img': {
                marginBottom: '3em'
            }
        }
    },
    imgCont2: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr) 1.125fr',
        gridGap: '80px',
        '& img': {
            width: '100%'
        },

        [breakpoints.down('sm')]: {
            display: 'block',
            textAlign: 'center',
            '& img': {
                marginBottom: '3em'
            }
        }
    }
}))

const DesignPage = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.cont}>
                <img className={classes.titleImg} src={Img1} alt={'UI Design'} />
                <p className={classes.titleText}>
                    As a designer, I've been practicing to sharpen my skills and shape some fun
                    stories. Each of these designs contains a unique style and according to that, I
                    try to design UI.
                </p>
                <div className={classes.imgCont1}>
                    <img src={UI1} alt={'Design 1'} />
                    <img src={UI2} alt={'Design 2'} />
                    <img src={UI3} alt={'Design 3'} />
                    <div>
                        <img src={UI4} alt={'Design 4'} />
                        <img src={UI5} alt={'Design 5'} />
                    </div>
                </div>
            </div>
            <div className={classes.cont}>
                <img className={classes.titleImg} src={Img2} alt={'3d Design'} />
                <p className={classes.titleText}>
                    Created some 3d designs on Cinema 4d just to know how 3d designs are made and
                    how we can play with the animation.
                </p>
                <div className={classes.imgCont2}>
                    <img src={TD1} alt={'3D 1'} />
                    <img src={TD2} alt={'3D 2'} />
                    <img src={TD3} alt={'3D 3'} />
                    <img src={TD4} alt={'3D 4'} />
                    <img src={TD5} alt={'3D 5'} />
                </div>
            </div>
        </div>
    )
}

export default DesignPage
