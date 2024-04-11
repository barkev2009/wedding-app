import { observer } from 'mobx-react-lite'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import user from '../store/user'
import { authRoutes, publicRoutes } from '../routes'
import { AUTH_ROUTE } from '../const'

const AppRouter = observer(
    () => {
        return (
            <Routes>
                {
                    user.isAuth && authRoutes.map(
                        ({ path, Component }) => <Route key={path} path={path} Component={Component} exact />
                    )
                }
                {
                    publicRoutes.map(
                        ({ path, Component }) => <Route key={path} path={path} Component={Component} exact />
                    )
                }
                <Route exact path='*' element={<Navigate to={AUTH_ROUTE} />} />
            </Routes>
        )
    }
)

export default AppRouter