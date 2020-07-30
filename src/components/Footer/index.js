import React from 'react';
import { FooterBase } from './styles';
import Alura from '../../assets/img/Alura.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Alura" src={Alura} alt="AluraFlix logo" style={{ width: "100px" }}/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
