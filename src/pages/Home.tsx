import almocoDiaaDia from "../assets/almoco-dia-a-dia-img.jpg"

export function Home() {
  return (
    <>
      <div className="card special">
        <h1>Bem-vindo(a)!</h1>
        <p>Comece escolhendo alguma categoria ou ocasião:</p>
        <ul className="card-options">
          <li>
            <div className="card-option">
              <img src={almocoDiaaDia} />
              <div className="card-text">
                <h5>Almoço do Dia a Dia</h5>
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
