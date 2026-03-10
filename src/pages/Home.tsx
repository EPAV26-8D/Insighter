import almocoDiaaDia from "../assets/almoco-dia-a-dia-img.jpg"
import almocoEspecial from "../assets/almoco-especial-img.jpg"
import jantarDiaaDia from "../assets/jantar-dia-a-dia-img.avif"
import jantarEspecial from "../assets/jantar-especial-img.webp"
import churrasco from "../assets/churrasco-img.webp"
import styles from"./Home.module.css"
import coelho from "../assets/coelho-pascoa-img.png"

export function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Páscoa</h1>
        <p><strong>Ocasião Especial:</strong> Mar/Abr</p>
        <a href="/especial">Ver detalhes</a>
        <img src={coelho} />
      </section>

      <section className="content">
        <article className="card-container">
          <h2>Bem-vindo(a)!</h2>
          <p>Comece escolhendo uma ocasião:</p>
          <ul className="card-carousel">
            <li>
              <a href="/churrasco" className="card">
                <img src={churrasco} />
                <div className="card-text">
                  <h6>Churrasco</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/almoco-dia-a-dia" className="card">
                <img src={almocoDiaaDia} />
                <div className="card-text">
                  <h6>Almoço do Dia a Dia</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/almoco-especial" className="card">
                <img src={almocoEspecial} />
                <div className="card-text">
                  <h6>Almoço Especial</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/jantar-dia-a-dia" className="card">
                <img src={jantarDiaaDia} />
                <div className="card-text">
                  <h6>Jantar do Dia a Dia</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/jantar-especial" className="card">
                <img src={jantarEspecial} />
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
              <a href="/churrasco" className="card">
                <img src={churrasco} />
                <div className="card-text">
                  <h6>Churrasco</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/almoco-dia-a-dia" className="card">
                <img src={almocoDiaaDia} />
                <div className="card-text">
                  <h6>Almoço do Dia a Dia</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/almoco-especial" className="card">
                <img src={almocoEspecial} />
                <div className="card-text">
                  <h6>Almoço Especial</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/jantar-dia-a-dia" className="card">
                <img src={jantarDiaaDia} />
                <div className="card-text">
                  <h6>Jantar do Dia a Dia</h6>
                  <p>Ver detalhes</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/jantar-especial" className="card">
                <img src={jantarEspecial} />
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
