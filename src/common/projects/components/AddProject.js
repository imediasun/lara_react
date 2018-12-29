import React from "react";
import { JarvisWidget } from "../../../common/widgets";
import { Dropdown, MenuItem } from "react-bootstrap";
import Select2 from "../../../common/forms/inputs/Select2";
import SmartCKEditor from "../../../common/forms/editors/SmartCKEditor";
const styles={
    projectForm: {
        left: '-20px',
        top: '12px',
        position: 'relative',
        fontSize:"20px"

    },


};

export default function AddProject() {


  return (
    <JarvisWidget
      editbutton={false}
      fullscreenbutton={false}
      color="blueDark"
      id="chat-widget"
    >
      <header>
        <span className="widget-icon">
          <i className="fa fa-comments txt-color-white" />
        </span>
        <h2> Добавить проект </h2>

        <div className="widget-toolbar">
          <Dropdown id="dropdown-custom-1">
            <Dropdown.Toggle className="btn-xs btn-success">
              Status
            </Dropdown.Toggle>
            <Dropdown.Menu className="pull-right js-status-update">
              <MenuItem eventKey="1">
                <i className="fa fa-circle txt-color-green" /> Online
              </MenuItem>
              <MenuItem eventKey="2">
                <i className="fa fa-circle txt-color-red" /> Busy
              </MenuItem>
              <MenuItem eventKey="3">
                <i className="fa fa-circle txt-color-orange" /> Away
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">
                <i className="fa fa-power-off" /> Log Off
              </MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>

      {/* widget div*/}
      <div>
        <div className="widget-body no-padding">
        <form className="smart-form">

          <fieldset>
            <div className="col-md-4">
            <div className="btn-group dropdown">
              <button className="btn btn-primary" style={{padding:"10px"}}><i style={{color:"yellow"}} className="fa fa-star"></i>  Премиум размещение</button>
              <button className="btn btn-primary dropdown-toggle" style={{height:"40px"}} data-toggle="dropdown" aria-expanded="false">
                <span className="caret" ></span></button>
              <ul className="dropdown-menu">
                <li><a href="#/">Неделя +5$</a></li>
                <li><a href="#/">2 Недели +7$</a></li>
                <li><a href="#/">Месяц +10$</a></li>
                <li classNmae="divider"></li>
              </ul>
            </div>
            </div>
            <div className="col-md-4">
            <div className="btn-group dropdown">
              <button className="btn btn-primary" style={{padding:"10px"}}><i style={{color:"yellow"}} className="fa fa-eye"></i>  Контроль качества</button>
              <button className="btn btn-primary dropdown-toggle" style={{height:"40px"}} data-toggle="dropdown" aria-expanded="false">
                <span className="caret" ></span></button>
              <ul className="dropdown-menu">
                <li><a href="#/">1 Специалист +5%</a></li>
                <li><a href="#/">2 Специалиста +10%</a></li>
                <li classNmae="divider"></li>
              </ul>
            </div>
            </div>

            <div className="col-md-4">
              <div className="btn-group dropdown">
                <button className="btn btn-primary" style={{padding:"10px"}}><i style={{color:"yellow"}} className="fa fa-group"></i>  Требуется команда</button>
                <button className="btn btn-primary dropdown-toggle" style={{height:"40px"}} data-toggle="dropdown" aria-expanded="false">
                  <span className="caret" ></span></button>
                <ul className="dropdown-menu">
                  <li><a href="#/">2 Специалиста </a></li>
                  <li><a href="#/">3 Специалиста </a></li>
                  <li><a href="#/">4 Специалиста </a></li>
                  <li><a href="#/">Более 4 Специалистов </a></li>
                  <li classNmae="divider"></li>
                </ul>
              </div>
            </div>

          </fieldset>
        <fieldset>

          <section>
            <div className="col-md-3">
              <label style={ styles.projectForm} className="label pull-right"><b>Название проекта</b></label>
            </div>
            <div className="col-md-9">
            <label className="input">
              <input type="text" className="input-lg" />
            </label>
            </div>
          </section>
        </fieldset>
          <fieldset>

            <section>
              <div className="col-md-3">
                <label style={ styles.projectForm} className="label pull-right">Бюджет проекта</label>
              </div>
              <div className="col-md-3">
                <label className="input">
                  <input type="text" className="input-lg" />
                </label>
              </div>
              <div className="col-md-3">
                <label class="select"><select class="input-lg">
                  <option value="0">&#8372;</option>
                  <option value="1">$</option>
                  <option value="2">&euro;</option>

                </select><i></i></label>
              </div>
            </section>
          </fieldset>

          <fieldset>
            <div className="col-md-3">
              <label style={ styles.projectForm} className="label pull-right">Категории</label>
            </div>
            <div className="col-md-9">
            <Select2
                multiple={true}
                style={{ width: "100%",padding:"10px" }}
                className="select2"
                defaultValue={["NV", "MT", "MI"]}
            >
              <optgroup label="Alaskan/Hawaiian Time Zone">
                <option value="AK">Alaska</option>
                <option value="HI">Hawaii</option>
              </optgroup>
              <optgroup label="Pacific Time Zone">
                <option value="CA">California</option>
                <option value="NV">Nevada</option>
                <option value="OR">Oregon</option>
                <option value="WA">Washington</option>
              </optgroup>
              <optgroup label="Mountain Time Zone">
                <option value="AZ">Arizona</option>
                <option value="CO">Colorado</option>
                <option value="ID">Idaho</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NM">New Mexico</option>
                <option value="ND">North Dakota</option>
                <option value="UT">Utah</option>
                <option value="WY">Wyoming</option>
              </optgroup>
              <optgroup label="Central Time Zone">
                <option value="AL">Alabama</option>
                <option value="AR">Arkansas</option>
                <option value="IL">Illinois</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="OK">Oklahoma</option>
                <option value="SD">South Dakota</option>
                <option value="TX">Texas</option>
                <option value="TN">Tennessee</option>
                <option value="WI">Wisconsin</option>
              </optgroup>
              <optgroup label="Eastern Time Zone">
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="IN">Indiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="OH">Ohio</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WV">West Virginia</option>
              </optgroup>
            </Select2>
            </div>

          </fieldset>

          <fieldset>
            <div className="row">
              <div className="col-md-3">
                <label style={ styles.projectForm} className="label pull-right">Оплата</label>
              </div>
              <section className="col col-9">
               <label className="toggle">
                  <input
                      type="radio"
                      name="radio-toggle"
                      defaultChecked
                  />
                  <i
                      data-swchon-text="ON"
                      data-swchoff-text="OFF"
                  />
                 Безопасная работа через Бизнес Сейф для юридических лиц
                </label>
                <label className="toggle">
                  <input type="radio" name="radio-toggle" />
                  <i
                      data-swchon-text="ON"
                      data-swchoff-text="OFF"
                  />
                  Безопасная работа через Сейф (комиссию оплачиваю я)
                </label>
                <label className="toggle">
                  <input type="radio" name="radio-toggle" />
                  <i
                      data-swchon-text="ON"
                      data-swchoff-text="OFF"
                  />
                  Безопасная работа через Сейф (комиссия делится пополам)
                </label>
                <label className="toggle">
                  <input type="radio" name="radio-toggle" />
                  <i
                      data-swchon-text="ON"
                      data-swchoff-text="OFF"
                  />
                  Безопасная работа через Сейф (комиссию оплачивает фрилансер)
                </label>
                <label className="toggle">
                  <input type="radio" name="radio-toggle" />
                  <i
                      data-swchon-text="ON"
                      data-swchoff-text="OFF"
                  />
                  Прямой расчет с исполнителем на свой страх и риск
                </label>
              </section>
            </div>
          </fieldset>
          <fieldset>

            <div className="row">


                  <div>
                    <div className="widget-body no-padding">
                      <SmartCKEditor
                          container="editable"
                          options={{
                              height: "380px",
                              startupFocus: true
                          }}
                          defaultValue={demoHtml}
                      />
                    </div>
                  </div>


            </div>
          </fieldset>
          </form>
        </div>
      </div>
      {/* end widget div */}
    </JarvisWidget>
  );
}

let demoHtml = `<h1><img alt="Saturn V carrying Apollo 11" class="right" src="http://c.cksource.com/a/1/img/sample.jpg" /> Apollo 11</h1>

<p><strong>Apollo 11</strong> was the spaceflight that landed the first humans, Americans <a href="http://en.wikipedia.org/wiki/Neil_Armstrong">Neil Armstrong</a> and <a href="http://en.wikipedia.org/wiki/Buzz_Aldrin">Buzz Aldrin</a>, on the Moon on July 20, 1969, at 20:18 UTC. Armstrong became the first to step onto the lunar surface 6 hours later on July 21 at 02:56 UTC.</p>

<p>Armstrong spent about <s>three and a half</s> two and a half hours outside the spacecraft, Aldrin slightly less; and together they collected 47.5 pounds (21.5&nbsp;kg) of lunar material for return to Earth. A third member of the mission, <a href="http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)">Michael Collins</a>, piloted the <a href="http://en.wikipedia.org/wiki/Apollo_Command/Service_Module">command</a> spacecraft alone in lunar orbit until Armstrong and Aldrin returned to it for the trip back to Earth.</p>

<h2>Broadcasting and <em>quotes</em> <a id="quotes" name="quotes"></a></h2>

<p>Broadcast on live TV to a world-wide audience, Armstrong stepped onto the lunar surface and described the event as:</p>

<blockquote>
    <p>One small step for [a] man, one giant leap for mankind.</p>
</blockquote>

<p>Apollo 11 effectively ended the <a href="http://en.wikipedia.org/wiki/Space_Race">Space Race</a> and fulfilled a national goal proposed in 1961 by the late U.S. President <a href="http://en.wikipedia.org/wiki/John_F._Kennedy">John F. Kennedy</a> in a speech before the United States Congress:</p>

<blockquote>
    <p>[...] before this decade is out, of landing a man on the Moon and returning him safely to the Earth.</p>
</blockquote>

<h2>Technical details <a id="tech-details" name="tech-details"></a></h2>

<table align="right" border="1" bordercolor="#ccc" cellpadding="5" cellspacing="0" style="border-collapse:collapse">
    <caption><strong>Mission crew</strong></caption>
    <thead>
    <tr>
        <th scope="col">Position</th>
        <th scope="col">Astronaut</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Commander</td>
        <td>Neil A. Armstrong</td>
    </tr>
    <tr>
        <td>Command Module Pilot</td>
        <td>Michael Collins</td>
    </tr>
    <tr>
        <td>Lunar Module Pilot</td>
        <td>Edwin &quot;Buzz&quot; E. Aldrin, Jr.</td>
    </tr>
    </tbody>
</table>

<p>Launched by a <strong>Saturn V</strong> rocket from <a href="http://en.wikipedia.org/wiki/Kennedy_Space_Center">Kennedy Space Center</a> in Merritt Island, Florida on July 16, Apollo 11 was the fifth manned mission of <a href="http://en.wikipedia.org/wiki/NASA">NASA</a>&#39;s Apollo program. The Apollo spacecraft had three parts:</p>

<ol>
    <li><strong>Command Module</strong> with a cabin for the three astronauts which was the only part which landed back on Earth</li>
    <li><strong>Service Module</strong> which supported the Command Module with propulsion, electrical power, oxygen and water</li>
    <li><strong>Lunar Module</strong> for landing on the Moon.</li>
</ol>

<p>After being sent to the Moon by the Saturn V&#39;s upper stage, the astronauts separated the spacecraft from it and travelled for three days until they entered into lunar orbit. Armstrong and Aldrin then moved into the Lunar Module and landed in the <a href="http://en.wikipedia.org/wiki/Mare_Tranquillitatis">Sea of Tranquility</a>. They stayed a total of about 21 and a half hours on the lunar surface. After lifting off in the upper part of the Lunar Module and rejoining Collins in the Command Module, they returned to Earth and landed in the <a href="http://en.wikipedia.org/wiki/Pacific_Ocean">Pacific Ocean</a> on July 24.</p>

<hr />
<p><small>Source: <a href="http://en.wikipedia.org/wiki/Apollo_11">Wikipedia.org</a></small></p>`;


