import React from "react";
import { JarvisWidget } from "../../../common/widgets";
import { Dropdown, MenuItem } from "react-bootstrap";
import Select2 from "../../../common/forms/inputs/Select2";
import SmartCKEditor from "../../../common/forms/editors/SmartCKEditor";
import UiDatepicker from "../../../common/ui/components/jquery/UiDatepicker";
import { OverlayTrigger, Tooltip, Popover } from "react-bootstrap";
const styles={
    projectForm: {
        left: '-20px',
        top: '12px',
        position: 'relative',
        fontSize:"20px"

    },
    projectForm1: {
        left: '-20px',
        top: '7px',
        position: 'relative',
        fontSize:"15px"

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
            <div className="col-md-3">
              <label style={ styles.projectForm1} className="label pull-right">Платные опции</label>
            </div>
            <div className="col-md-3">

              <OverlayTrigger
                  placement="top"
                  overlay={
                    <Popover id="popover-activated-on-hover-popover">
                      Ваш проект гарантированно заметят
                      Премиум проекты отображаются над всеми другими
                      проектами в списке в течение 2 дней — пропустить их невозможно.
                      <a href="">Смотреть инфо видео -> нажмите на <i className="fa fa-info"></i></a>

                    </Popover>
                  }
              >
                <div className="btn-group dropdown">
                  <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style={{padding:"5px"}}><i style={{color:"yellow"}} className="fa fa-star"></i>  Премиум размещение</button>
                  <ul className="dropdown-menu">
                    <li><input style={{position:"relative",left:"20px"}} type="radio" name="premium-type" />
                        <span style={{position:"relative",left:"20px"}}>   Неделя +5$</span></li>
                    <li><input style={{position:"relative",left:"20px"}} type="radio" name="premium-type" />   <span style={{position:"relative",left:"20px"}}>   2 Недели +7$</span></li>
                    <li><input style={{position:"relative",left:"20px"}} type="radio" name="premium-type" /><span style={{position:"relative",left:"20px"}}>   Месяц +10$</span></li>
                    <li classNmae="divider"></li>
                  </ul>
                  <button className="btn btn-primary " style={{width:"20px",height:"30px"}} >
                    <span className="fa fa-info" ></span></button>

                </div>
              </OverlayTrigger>



            </div>
            <div className="col-md-3">

              <OverlayTrigger
                  placement="top"
                  overlay={
                    <Popover id="popover-activated-on-hover-popover">
                      За качеством и сроками исполнения вашего проекта будут наблюдать наши специалисты.
                      Это поможит еще на ранней стадии выявить отутствие профессионализма у фрилансера
                      и заменить исполнителя не подвергая риску сроки и средства
                      <a href="">Смотреть инфо видео -> нажмите на <i className="fa fa-info"></i></a>

                    </Popover>
                  }
              >
                <div className="btn-group dropdown">
                  <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style={{padding:"5px"}}><i style={{color:"yellow"}} className="fa fa-eye"></i>  Контроль качества</button>
                  <ul className="dropdown-menu">
                    <li><input style={{position:"relative",left:"10px"}} type="radio" name="control-quality-type" />
                      <span style={{position:"relative",left:"10px"}}>   1 Специалист +5%</span></li>
                    <li><input style={{position:"relative",left:"10px"}} type="radio" name="control-quality-type" />   <span style={{position:"relative",left:"10px"}}>   2 Специалиста +10%</span></li>
                    <li><input style={{position:"relative",left:"10px"}} type="radio" name="control-quality-type" /><span style={{position:"relative",left:"10px"}}>   3 Специалиста +12%</span></li>
                    <li classNmae="divider"></li>
                  </ul>
                  <button className="btn btn-primary " style={{width:"20px",height:"30px"}} >
                    <span className="fa fa-info" ></span></button>

                </div>
              </OverlayTrigger>

            </div>

            <div className="col-md-3">

              <OverlayTrigger
                  placement="top"
                  overlay={
                    <Popover id="popover-activated-on-hover-popover">
                      Наши специалисты проводят собеседования с фрилансерами и подбирают команду для вашего проекта
                      <a href="">Смотреть инфо видео -> нажмите на <i className="fa fa-info"></i></a>

                    </Popover>
                  }
              >
                <div className="btn-group dropdown">
                  <button className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style={{padding:"5px"}}><i style={{color:"yellow"}} className="fa fa-group"></i>  Подбор команды</button>
                  <ul className="dropdown-menu">
                    <li><input style={{position:"relative",left:"10px"}} type="radio" name="team" />
                      <span style={{position:"relative",left:"10px"}}>   1 Фрилансер +5%</span></li>
                    <li><input style={{position:"relative",left:"10px"}} type="radio" name="team" />   <span style={{position:"relative",left:"10px"}}>   2 Фрилансера +10%</span></li>
                    <li><input style={{position:"relative",left:"10px"}} type="radio" name="team" /><span style={{position:"relative",left:"10px"}}>   3 Фрилансера +12%</span></li>
                    <li classNmae="divider"></li>
                  </ul>
                  <button className="btn btn-primary " style={{width:"20px",height:"30px"}} >
                    <span className="fa fa-info" ></span></button>

                </div>
              </OverlayTrigger>


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
              <div className="col-md-1">
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
              <optgroup label="Программирование">
                <option value="1С">1С</option>
                <option value="Blockchain">Blockchain</option>
                <option value="C#">C#</option>
                <option value="C/C++">C/C++</option>
                <option value="Delphi/Object Pascal">Delphi/Object Pascal</option>
                <option value="Flash/Flex">Flash/Flex</option>
                <option value="Git/Mercurial/SVN">Git/Mercurial/SVN</option>
                <option value="Go">Go</option>
                <option value="Java">Java</option>
                <option value="Javascript">Javascript</option>
                <option value="Mac OS/Objective C">Mac OS/Objective C</option>
                <option value="Node.js">Node.js</option>
                <option value="PHP">PHP</option>
                <option value="Python">Python</option>
                <option value="Ruby">Ruby</option>
                <option value="Swift">Swift</option>
                <option value="Базы данных">Базы данных</option>
                <option value="Веб программирование">Веб программирование</option>
                <option value="Защита ПО и безопасность">Защита ПО и безопасность</option>
                <option value="Машинное обучение">Машинное обучение</option>
                <option value="Парсинг данных">Парсинг данных</option>
                <option value="Прикладное программирование">Прикладное программирование</option>
                <option value="Разработка игр">Разработка игр</option>
                <option value="Разработка чат-ботов">Разработка чат-ботов</option>
                <option value="Системное программирование">Системное программирование</option>
                <option value="Тестирование и QA">Тестирование и QA</option>
              </optgroup>
              <optgroup label="Дизайн/Арт">
                <option value="3D графика">3D графика</option>
                <option value="Баннеры">Баннеры</option>
                <option value="Векторная графика">Векторная графика</option>
                <option value="Визуализация и моделирование">Визуализация и моделирование</option>
                <option value="Дизайн визиток">Дизайн визиток</option>
                <option value="Дизайн выставочных стендов">Дизайн выставочных стендов</option>
                <option value="Дизайн интерфейсов">Дизайн интерфейсов</option>
                <option value="Дизайн мобильных приложений">Дизайн мобильных приложений</option>
                <option value="Дизайн сайтов">Дизайн сайтов</option>
                <option value="Дизайн упаковки">Дизайн упаковки</option>
                <option value="Живопись и графика">Живопись и графика</option>
                <option value="Иконки и пиксельная графика">Иконки и пиксельная графика</option>
                <option value="Инфографика">Инфографика</option>
                <option value="Логотипы">Логотипы</option>
                <option value="Наружная реклама">Наружная реклама</option>
                <option value="Обработка фото">Обработка фото</option>
                <option value="Оформление страниц в социальных сетях">Оформление страниц в социальных сетях</option>
                <option value="Полиграфический дизайн">Полиграфический дизайн</option>
                <option value="Предметный дизайн">Предметный дизайн</option>
                <option value="Разработка шрифтов">Разработка шрифтов</option>
                <option value="Фирменный стиль">Фирменный стиль</option>
              </optgroup>
              <optgroup label="Услуги">
                <option value="HTML/CSS верстка">HTML/CSS верстка</option>
                <option value="Видеосъемка">Видеосъемка</option>
                <option value="Интеграция платежных систем">Интеграция платежных систем</option>
                <option value="Интернет магазины и электронная коммерция">Интернет магазины и электронная коммерция</option>
                <option value="Контент менеджмент">Контент менеджмент</option>
                <option value="Маркетинговые исследования">Маркетинговые исследования</option>
                <option value="Настройка ПО/серверов">Настройка ПО/серверов</option>
                <option value="Обработка данных">Обработка данных</option>
                <option value="Обучение">Обучение</option>
                <option value="Поиск и сбор информации">Поиск и сбор информации</option>
                <option value="Прототипирование">Прототипирование</option>
                <option value="Работа с клиентами">Работа с клиентами</option>
                <option value="Разработка презентаций">Разработка презентаций</option>
                <option value="Рукоделие/Hand made">Рукоделие/Hand made</option>
                <option value="Сопровождение сайтов">Сопровождение сайтов</option>
                <option value="Установка и настройка CMS">Установка и настройка CMS</option>
                <option value="Фотосъемка">Фотосъемка</option>
              </optgroup>
              <optgroup label="Аудио/Видео">
                <option value="Анимация">Анимация</option>
                <option value="Аудио/Видео монтаж">Аудио/Видео монтажs</option>
                <option value="Видеореклама">Видеореклама</option>
                <option value="Музыка">Музыка</option>
                <option value="Обработка аудио">Обработка аудио</option>
                <option value="Обработка видео">Обработка видео</option>
                <option value="Транскрибация">Транскрибация</option>
                <option value="Услуги диктора">Услуги диктора</option>

              </optgroup>
              <optgroup label="Продвижение">
                <option value="Email маркетинг">Email маркетинг</option>
                <option value="SEO аудит сайтов">SEO аудит сайтов</option>
                <option value="Контекстная реклама">Контекстная реклама</option>
                <option value="Поисковое продвижение (SEO)">Поисковое продвижение (SEO)</option>
                <option value="Поисковое управление репутацией (SERM)">Поисковое управление репутацией (SERM)</option>
                <option value="Продажи и генирация лидов">Продажи и генирация лидов</option>
                <option value="Продвижение в социальных сетях (SMM)">Продвижение в социальных сетях (SMM)</option>
                <option value="Реклама в социальных медиа">Реклама в социальных медиа</option>
                <option value="Тизерная реклама">Тизерная реклама</option>

              </optgroup>
              <optgroup label="Архитектура и инжениринг">
                <option value="Архитектурные проекты">Архитектурные проекты</option>
                <option value="Инжениринг">Инжениринг</option>
                <option value="Ландшафтный дизайн">Ландшафтный дизайн</option>
                <option value="Проектирование">Проектирование</option>
                <option value="Чертежи и схемы">Чертежи и схемы</option>


              </optgroup>
              <optgroup label="Мобильные приложения">
                <option value="Разработка под Android">Разработка под Android</option>
                <option value="Разработка под IOS (iPhone/iPad)">Разработка под IOS (iPhone/iPad)</option>
              </optgroup>

              <optgroup label="Администрирование">
                <option value="DevOps">DevOps</option>
                <option value="FreeBSD">FreeBSD</option>
                <option value="IP телефония/VoIp">IP телефония/VoIp</option>
                <option value="Linux/Unix">Linux/Unix</option>
                <option value="Windows">Windows</option>
                <option value="Администрирование систем">Администрирование систем</option>
                <option value="Геоинформационные системы">Геоинформационные системы</option>
                <option value="Компьютерные сети">Компьютерные сети</option>
              </optgroup>
              <optgroup label="Аутсорсинг и консалтинг">
                <option value="Бизнес консультирование">Бизнес консультирование</option>
                <option value="Бухгалтерские услуги">Бухгалтерские услуги</option>
                <option value="Консалтинг">Консалтинг</option>
                <option value="Рекрутинг">Рекрутинг</option>
                <option value="Управление клиентами/CRM">Управление клиентами/CRM</option>
                <option value="Управление проектами">Управление проектами</option>

              </optgroup>
              <optgroup label="Переводы">
                <option value="Английский язык">Английский язык</option>
                <option value="Иврит">Иврит</option>
                <option value="Испанский язык">Испанский язык</option>
                <option value="Итальянский язык">Итальянский язык</option>
                <option value="Локализация ПО/Сайтов/Игр">Локализация ПО/Сайтов/Игр</option>
                <option value="Немецкий язык">Немецкий язык</option>
                <option value="Перевод текстов">Перевод текстов</option>
                <option value="Французский язык">Французский язык</option>

              </optgroup>
              <optgroup label="Работа с текстами">
                <option value="Копирайтинг">Копирайтинг</option>
                <option value="Набор текстов">Набор текстов</option>
                <option value="Написание статей">Написание статей</option>
                <option value="Написание сценариев">Написание сценариев</option>
                <option value="Нейминг и слоганы">Нейминг и слоганы</option>
                <option value="Публикация объявлений">Публикация объявлений</option>
                <option value="Редактура и корректура текстов">Редактура и корректура текстов</option>
                <option value="Рерайтинг">Рерайтинг</option>
                <option value="Рефераты, дипломы, курсовые">Рефераты, дипломы, курсовые</option>
                <option value="Стихи, песни, проза">Стихи, песни, проза</option>
                <option value="Техническая документация">Техническая документация</option>
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
              <div className="col-md-3">
                <label style={ styles.projectForm} className="label pull-right">Тип работы</label>
              </div>
              <section className="col col-9">
                <label className="toggle">
                  <input
                      type="radio"
                      name="job-type"
                      defaultChecked
                  />
                  <i
                      data-swchon-text="ON"
                      data-swchoff-text="OFF"
                  />
                  Одноразовая проектная работа
                </label>
                <label className="toggle">
                  <input type="radio" name="job-type" />
                  <i
                      data-swchon-text="ON"
                      data-swchoff-text="OFF"
                  />
                  Долгосрочная удаленная работа
                </label>
                <label className="toggle">
                  <input type="radio" name="job-type" />
                  <i
                      data-swchon-text="ON"
                      data-swchoff-text="OFF"
                  />
                  Постоянное офисное предложение
                </label>

              </section>
            </div>
          </fieldset>
          <fieldset>
            <div className="row">
              <div className="col-md-3">
                <label style={ styles.projectForm} className="label pull-right">Актуален до</label>
              </div>
              <div className="col-md-9">
                <div className="input-group">
                  <UiDatepicker
                      name="mydate"
                      placeholder="Select a date"
                      className="form-control datepicker"
                      data-date-format="dd/mm/yy"
                  />
                  <span className="input-group-addon">
                                  <i className="fa fa-calendar" />
                                </span>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <p className="alert alert-info">
              <h3 className="text-primary">Описание проекта</h3>
            </p>
          </fieldset>
          <fieldset>

            <div className="row">


                  <div>
                    <div className="">
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
          <fieldset>
            <div className="col-md-4">

            </div>
            <a href="#/"
               style={{padding:"20px"}}
               className="btn btn-primary"
              // onClick={this.onClick}
            >
              <i className="fa fa-shopping-cart" /> Опубликовать проект
            </a>
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


