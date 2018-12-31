import Loadable from "react-loadable";
import {Loading} from "../../common/navigation";

const MyProjects = Loadable({
    loader: () => import("./components/MyProjects"),
    loading: Loading
});

const PubProject = Loadable({
    loader: () => import("./components/PubProject"),
    loading: Loading
});

export const routes = [
    {
        path: "/projects/all_my_projects",
        exact: true,
        component: MyProjects,
        name: "MyProjects",
    },
    {
        path: "/projects/add_project",
        exact: true,
        component: PubProject,
        name: "PubProject",
    }
];
