import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Cep.css";
import imagem from "../../assets/botao.png";

export default function Cep() {

    const [resposta, setResposta] = useState([]);
    const [botao, setBotao] = useState(true);
    const [cep, setCep] = useState("");

    useEffect(()=> {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resp)=>{setResposta(resp.data)})
        .catch((erro)=>{console.log("error")})
    },[botao]);


return (
    <>
        <div id="consulta">
            <div className="linha"></div>
            <p>CONSULTAR <span>CEP</span></p>
            <div className="linha"></div>
        </div>
        <div id="input-botao">
            <input type="number" placeholder="ex: 4640000" onChange={(e)=>setCep(e.target.value)}/>
            <button onClick={()=> botao ? setBotao(false): setBotao(true)}><img src={imagem} /></button>
        </div>
        <div id="resultado">
            <h1>CEP {resposta.cep}</h1>
            <p id="localidade">{resposta.localidade} - {resposta.uf}</p>
        <div id="informacoes">
            <div id="primeiros">
                <p><span className="negrito">Logradouro:</span> {resposta.logradouro}</p>
                <p><span className="negrito">CEP:</span> {resposta.cep}</p>
                <p><span className="negrito">Bairro:</span> {resposta.bairro}</p>
            </div>
            <div id="segundos">
                <p><span className="negrito">Cidade:</span> {resposta.localidade}</p>
                <p><span className="negrito">UF:</span> {resposta.uf}</p>
                <p><span className="negrito">Código DDD:</span> {resposta.ddd}</p>
            </div>
        </div>
        </div>
    </>
)};