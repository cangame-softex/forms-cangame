import React, { useState } from "react";
import "../App.css";
import { IoHome } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa6";
import { AiOutlineControl } from "react-icons/ai";
import LogoMarca from './img/logoCangame.png';

const Formulario = () =>{
    const [logoTipo, setLogoTipo] = useState(null);
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [telefone, setTelefone]= useState('');
    const [email, setEmail] = useState('');
    const [quantidadeLicencas, setQuantidadeLicencas] = useState('');
    
    const handleLogoTipoChange =(e) => {
        const file = e.target.file[0];
        setLogoTipo(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            logoTipo,
            nome,
            cnpj,
            endereco,
            bairro,
            cidade,
            uf,
            cep,
            telefone,
            email,
            quantidadeLicencas,
        })
    }

    return(
        <div className="formulario-container">
            <header className="header">
                <img src={LogoMarca} alt="Logo" className="logo" />
                <h1>Cadastro de Contrato</h1>
            </header>

            <div className="main-content">
                <aside className="sidebar">
                    <button><IoHome /> Home</button>
                    <button><FaRegPenToSquare /> Cadastro de Contrato</button>
                    <button><FaRegAddressBook /> Cadastro de Licenças</button>
                    <button><AiOutlineControl />Controle de Licenças</button>
                </aside>

                <form className="form" onSubmit={handleSubmit}>
                    <label>Logo:</label>
                    <input type="file" onChange={handleLogoTipoChange}/>

                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <label>CNPJ:</label>
                    <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />

                    <label>Endereço:</label>
                    <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />

                    <label>Bairro:</label>
                    <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />

                    <label>Cidade:</label>
                    <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}/>

                    <label>UF:</label>
                    <input type="text" value={uf} onChange={(e) => setUf(e.target.value)}/>

                    <label>CEP:</label>
                    <input type="text" value={cep} onChange={(e) => setCep(e.target.value)}/>

                    <label>Telefone:</label>
                    <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>

                    <label>E-mail:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <label>Quantidade de Licenças:</label>
                    <input type="number" value={quantidadeLicencas} onChange={(e) => setQuantidadeLicencas(e.target.value)}/>     

                    <button type="submit">Enviar</button>

                </form>

            </div>

            <footer className="footer">
                <p> Copyright 2023 - Softex - Cangame</p>
            </footer>

        </div>

    );
}

export default Formulario;


