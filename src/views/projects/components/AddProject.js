import React from "react";

import { WidgetGrid } from "../../../common/widgets/components";
import { Stats } from "../../../common/layout/components";
import { BigBreadcrumbs } from "../../../common/navigation";
import { AddProjectBody } from "../../../common/projects/components/index";


export default class AddProject extends React.Component {
  render() {
    return (
      <div id="content" className="animated fadeInUp">
        <div className="row">
          <BigBreadcrumbs
            items={["Projects", "AddProject"]}
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        <WidgetGrid>
          <div className="row">
            <article className="col-sm-12">
            </article>
          </div>

          <div className="row">
            <article className="col-sm-12 col-md-12 col-lg-6">
              <AddProjectBody />
            </article>

            <article className="col-sm-12 col-md-12 col-lg-6">

            </article>
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
