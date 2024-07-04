import React from 'react'
import { Navigate, Route, useNavigation } from 'react-router-dom'
import { useAuth } from '../Componentss/Context/AuthContext'


function ProtectedRoute({ component: Component, ...rest }) {
    const { loggedIn } = useAuth();
    const navigate = useNavigation()
    return (
        <Route
            {...rest}
            render={(props) => {
                if (loggedIn) {
                    return <Component {...props} />
                }
                // return <Redirect to={{ pathname: "/" }} />
                return navigate("/")
            }}
        />

    )
}

export default ProtectedRoute