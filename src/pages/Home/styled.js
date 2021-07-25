import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 70%;
  margin: auto;

  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:#ddd;

    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 100%;
  margin: auto;
  
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`
export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Div = styled.div`
  width: 15vw;
  height: 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Div2 = styled.div`
  width: 15vw;
  height: 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 .5rem;
  border-radius: 1.25rem 0 0 1.25rem;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 1.5rem;
  border: 1px solid #333;
  background: #444;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;
export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #333;
  padding: .5rem 0;
  color: #fff;
  text-decoration: none;
`;