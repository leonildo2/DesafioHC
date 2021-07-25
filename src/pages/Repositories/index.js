import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
import Cart from '../../assets/cart.png'
import Moon from '../../assets/White Moon.png'

export default function Repositories() {
  const [ nome, setNome ] = useState('');
  const [ categoria, setCategoria ] = useState('');
  const [ preco, setPreco ] = useState('');
  

  function handleCadastro() {
  
        localStorage.setItem('nome', JSON.stringify(nome));
        localStorage.setItem('categoria', JSON.stringify(categoria));
        localStorage.setItem('preco', JSON.stringify(preco));
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
      
      <S.Title>Cadastre um produto</S.Title>
      <S.Content>
        <S.Div><S.Input className="nomeInput" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} /></S.Div>
      </S.Content>
      <S.Content><S.Input className="categoriaInput" placeholder="Categoria" value={categoria} onChange={e => setCategoria(e.target.value)} /></S.Content>
      <S.Content><S.Div><S.Input className="precoInput" placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} /></S.Div></S.Content>
      <S.Content><S.Button type="button" onClick={handleCadastro} >Cadastrar</S.Button></S.Content>
      
  
      <S.LinkHome to="/">Voltar</S.LinkHome>
      
    </S.HomeContainer>

    </S.Container>
    
   
    
  );
}