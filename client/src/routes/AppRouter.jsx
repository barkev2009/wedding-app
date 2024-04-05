import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import user from '../store/user'
import { authRoutes, publicRoutes } from '../routes'
import { AUTH_ROUTE } from '../const'
import axios from 'axios'
import { $host } from '../api'

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