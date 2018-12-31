import Loadable from "react-loadable";
import {Loading} from "../../common/navigation";

const AddProject = Loadable({
    loader: () => import("./components/AddProject"),
    loading: Loading
});

export const routes = [
    {
        path: "/add_project",
        exact: true,
        component: AddProject,
        name: "AddProject",
    }
];
