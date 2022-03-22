import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'

const WorkPage = lazy(() => import('./pages/WorkPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const DesignPage = lazy(() => import('./pages/DesignPage'))

const useStyles = makeStyles(() => ({
    app: {
        padding: '0 1.5em',
        'background-color': '#202020',
        color: '#ffffff'
    }
}))

function App() {
    const classes = useStyles()
    return (
        <div className={classes.app}>
            <Navbar />
            <ScrollToTop>
                <Routes>
                    <Route
                        path={'/'}
                        element={
                            <Suspense fallback={<Loader />}>
                                <WorkPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path={'/about'}
                        element={
                            <Suspense fallback={<Loader />}>
                                <AboutPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path={'/design'}
                        element={
                            <Suspense fallback={<Loader />}>
                                <DesignPage />
                            </Suspense>
                        }
                    />
                </Routes>
            </ScrollToTop>
            <Footer />
        </div>
    )
}

export default App
