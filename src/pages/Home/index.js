import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
import Cart from '../../assets/cart.png'
import Moon from '../../assets/White Moon.png'

function App(props) {

  const [ nome, setNome ] = useState('');
  const [ sobrenome, setSobrenome ] = useState('');
  const [ endereco, setEndereco ] = useState('');
  

  function handleCadastro() {
  
        localStorage.setItem('nome', JSON.stringify(nome));
        localStorage.setItem('sobrenome', JSON.stringify(sobrenome));
        localStorage.setItem('endereco', JSON.stringify(endereco));
  }

  return (
    <S.Container>
      <div className="nav">
              <div>
                <img src={Moon} alt="vtex" width="200px" height="auto" />
              </div>
              <div className="cart">
                <img src={Cart} alt="shopcart" width="50px" height="auto" />
                
              </div>
            </div>
    
    <S.HomeContainer>
      
      <S.Title>Cadastre-se Na White Moon</S.Title>
      <S.Content>
        <S.Div><S.Input className="nomeInput" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} /></S.Div>
      </S.Content>
      <S.Content><S.Input className="sobrenomeInput" placeholder="Sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)} /></S.Content>
      <S.Content><S.Div><S.Input className="enderecoInput" placeholder="Endereço" value={endereco} onChange={e => setEndereco(e.target.value)} /></S.Div></S.Content>
      <S.Content><S.Button type="button" onClick={handleCadastro}>Cadastrar</S.Button></S.Content>
      
      <S.Title>Cadastre um produto</S.Title>
      <S.LinkHome to="/repositories">Produtos</S.LinkHome>
      
    </S.HomeContainer>
    
    </S.Container>
    
  );
}

export default App;