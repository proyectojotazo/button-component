import Aside from "./components/Aside";
import Button from "./components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const icon = <FontAwesomeIcon icon={faCartPlus} />;

function App() {
  return (
    <div className="web-content">
      <section className="main-content">
        <Aside />
        <section className="main-section-content">
          <header className="header">
            <h1 className="header__title">Buttons</h1>
          </header>
          <section className="buttons-content">
            <div className="row">
              <div className="card">
                <p className="card__text">&lt;Button/&gt;</p>
                <Button />
              </div>
              <div className="card">
                <p className="card__text gray">&amp;:hover, &amp;:focus</p>
                <button className="md card__btn fixed-default ">Default</button>
              </div>
            </div>
            <div className="row">
              <div className="card">
                <p className="card__text">&lt;Button variant="outline"/&gt;</p>
                <Button variant="outline" />
              </div>
              <div className="card">
                <p className="card__text gray">&amp;:hover, &amp;:focus</p>
                <button className="md card__btn fixed-outline">Default</button>
              </div>
            </div>
            <div className="row">
              <div className="card">
                <p className="card__text">&lt;Button variant="text"/&gt;</p>
                <Button variant="text" />
              </div>
              <div className="card">
                <p className="card__text gray">&amp;:hover, &amp;:focus</p>
                <button className="md card__btn fixed-text">Default</button>
              </div>
            </div>
            <div className="row">
              <div className="card">
                <p className="card__text">&lt;Button disableShadow /&gt;</p>
                <Button disableShadow color="primary" />
              </div>
            </div>
            <div className="row">
              <div className="card">
                <p className="card__text">&lt;Button disabled/&gt;</p>
                <Button disabled text="Disabled" />
              </div>
              <div className="card">
                <p className="card__text">
                  &lt;Button variant="text" disabled/&gt;
                </p>
                <Button text="Disabled" variant="text" disabled />
              </div>
            </div>
            <div className="row">
              <div className="card">
                <p className="card__text">
                  &lt;Button startIcon="local_gorcery_store" /&gt;
                </p>
                <Button color="primary" startIcon={icon} />
              </div>
              <div className="card">
                <p className="card__text">
                  &lt;Button endIcon="local_gorcery_store" /&gt;
                </p>
                <Button color="primary" endIcon={icon} />
              </div>
            </div>
            <div className="row">
              <div className="card">
                <p className="card__text">&lt;Button size="sm" /&gt;</p>
                <Button size="sm" color="primary" />
              </div>
              <div className="card">
                <p className="card__text">&lt;Button size="md" /&gt;</p>
                <Button size="md" color="primary" />
              </div>
              <div className="card">
                <p className="card__text">&lt;Button size="lg" /&gt;</p>
                <Button size="lg" color="primary" />
              </div>
            </div>
            <div className="row">
              <div className="card">
                <p className="card__text">&lt;Button color="default" /&gt;</p>
                <Button text="Default" color="default" />
              </div>
              <div className="card">
                <p className="card__text">&lt;Button color="primary" /&gt;</p>
                <Button text="Primary" color="primary" />
              </div>
              <div className="card">
                <p className="card__text">&lt;Button color="secondary" /&gt;</p>
                <Button text="Secondary" color="secondary" />
              </div>
              <div className="card">
                <p className="card__text">&lt;Button color="danger" /&gt;</p>
                <Button text="Danger" color="danger" />
              </div>
            </div>
            <div className="row">
              <div className="card">
                <p className="card__text gray">&amp;:hover, &amp;:focus</p>
                <button className="md card__btn fixed-default">Default</button>
              </div>
              <div className="card">
                <p className="card__text hidden-text">
                  Shhhhhhht, it's a secret...
                </p>
                <button className="md card__btn fixed-primary">Primary</button>
              </div>
              <div className="card">
                <p className="card__text hidden-text">
                  Shhhhhhht, it's a secret...
                </p>
                <button className="md card__btn fixed-secondary">
                  Secondary
                </button>
              </div>
              <div className="card">
                <p className="card__text hidden-text">
                  Shhhhhhht, it's a secret...
                </p>
                <button className="md card__btn fixed-danger">Danger</button>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
