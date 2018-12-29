import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const AddProject = Loadable({
  loader: () => import("./components/AddProject"),
  loading: Loading
});

/*const Social = Loadable({
  loader: () => import("./components/Social"),
  loading: Loading
});*/

export const routes = [
  {
    path: ["/", "/projects/add_project"],
    exact: true,
    name: "AddProject",
    component: AddProject
  },
 /* {
    path: "/dashboard/social-wall",
    exact: true,
    name: "Social",
    component: Social
  }*/
];
