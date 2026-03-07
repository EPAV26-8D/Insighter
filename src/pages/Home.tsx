import almocoDiaaDia from "../assets/almoco-dia-a-dia-img.jpg"
import almocoEspecial from "../assets/almoco-especial-img.jpg"
import jantarDiaaDia from "../assets/jantar-dia-a-dia-img.avif"
import jantarEspecial from "../assets/jantar-especial-img.webp"
import churrasco from "../assets/churrasco-img.webp"

export function Home() {
  return (
    <>
      <div className="card special">
        <h1>Bem-vindo(a)!</h1>
        <p>Comece escolhendo alguma ocasião:</p>
        <ul className="card-options">
        <li>
            <div className="card-option">
              <img src={churrasco} />
              <div className="card-text">
                <h5>Churrasco</h5>
                <p>Ver detalhes</p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-option">
              <img src={almocoDiaaDia} />
              <div className="card-text">
                <h5>Almoço do Dia a Dia</h5>
                <p>Ver detalhes</p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-option">
              <img src={almocoEspecial} />
              <div className="card-text">
                <h5>Almoço Especial</h5>
                <p>Ver detalhes</p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-option">
              <img src={jantarDiaaDia} />
              <div className="card-text">
                <h5>Jantar do Dia a Dia</h5>
                <p>Ver detalhes</p>
              </div>
            </div>
          </li>
          <li>
            <div className="card-option">
              <img src={jantarEspecial} />
              <div className="card-text">
                <h5>Jantar Especial</h5>
                <p>Ver detalhes</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="card">
        <h1>Bem-vindo(a)!</h1>
        <p>Comece escolhendo alguma categoria ou ocasião:</p>
      </div>
    </>
  )
}
