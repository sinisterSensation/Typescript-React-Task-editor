import AddTask from "./components/AddTask"
import EditTask from "./components/EditTask"
import { PathConsts } from "./routes/routes"

export const routes = [
    { path: PathConsts.EDIT, element: <EditTask /> },
    { path: PathConsts.CREATE, element: <AddTask /> },
]

