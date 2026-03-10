import lunchEverydayImage from '../assets/everyday-lunch-img.jpg'
import lunchSpecialImage from '../assets/special-lunch-img.jpg'
import dinnerEverydayImage from '../assets/everyday-dinner-img.avif'
import dinnerSpecialImage from '../assets/special-dinner-img.webp'
import barbecueImage from '../assets/barbecue-img.webp'
import easterImage from '../assets/easter-rabbit-img.png'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Páscoa</h1>
        <p>
          <strong>Ocasião Especial:</strong> Mar/Abr
        </p>
        <a href="/easter">Ver detalhes</a>
        <img src={easterImage} />
      </section>

      <section className="content">
        <article className="card-container">
          <h2>Bem-vindo(a)!</h2>
          <p>Comece escolhendo uma ocasião:</p>
          <ul className="card-carousel">
            <li>
              <a href="/barbecue" className="card">
                <img src={barbecueImage} />
                <div className="card-text">
                  <h6>Churrasco</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/everyday-lunch" className="card">
                <img src={lunchEverydayImage} />
                <div className="card-text">
                  <h6>Almoço do Dia a Dia</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/special-lunch" className="card">
                <img src={lunchSpecialImage} />
                <div className="card-text">
                  <h6>Almoço Especial</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/everyday-dinner" className="card">
                <img src={dinnerEverydayImage} />
                <div className="card-text">
                  <h6>Jantar do Dia a Dia</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/special-dinner" className="card">
                <img src={dinnerSpecialImage} />
                <div className="card-text">
                  <h6>Jantar Especial</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
          </ul>
        </article>

        <article>
          <h2>Ferramentas</h2>
          <ul className="card-carousel">
            <li>
              <a href="/barbecue" className="card">
                <img src={barbecueImage} />
                <div className="card-text">
                  <h6>Churrasco</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/everyday-lunch" className="card">
                <img src={lunchEverydayImage} />
                <div className="card-text">
                  <h6>Almoço do Dia a Dia</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/special-lunch" className="card">
                <img src={lunchSpecialImage} />
                <div className="card-text">
                  <h6>Almoço Especial</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/everyday-dinner" className="card">
                <img src={dinnerEverydayImage} />
                <div className="card-text">
                  <h6>Jantar do Dia a Dia</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/special-dinner" className="card">
                <img src={dinnerSpecialImage} />
                <div className="card-text">
                  <h6>Jantar Especial</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
          </ul>
        </article>
      </section>
    </>
  )
}
