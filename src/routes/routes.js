import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Register } from '../container/Register/index'
import BasicTable from '../container/users/index'
import { EditUser } from '../container/EditUser/index'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Register} path="/Register" />
                <Route component={EditUser} path="/Edit" />
                <Route component={BasicTable} path="/" />

            </Switch>
        </Router>
    )
}
export default Routes