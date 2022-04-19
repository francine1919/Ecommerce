import React from "react";
import { Link } from "react-router-dom";
import {
  ContainerHeader,
  ContainerHeaderBottom,
  ContainerHeaderTop,
  ContainerHeaderTopTitles,
  ContainerInput,
  LogoHeaderTop,
} from "./styled";
import sempreFina from "../../Assets/images/sempre-fina.jpg";
const config = { textDecoration: "none" };

export default function Header() {
  return (
    <ContainerHeader>
      <ContainerHeaderTop>
        <Link to="/" style={config}>
          <LogoHeaderTop
            src={sempreFina}
            alt="Logo sempre fina, font is blue and background is light pink."
          />
        </Link>
        <form>
          <ContainerInput placeholder="Pesquisar" type={"text"} />
        </form>
        <ContainerHeaderTopTitles>
          <Link to="/products" style={config}>
            <p>store</p>
          </Link>
          <Link to="/login" style={config}>
            <p>account</p>
          </Link>
          <Link to="/cart" style={config}>
            <div>
              <p>basket</p>
              <img
                alt="Shopping basket"
                src="https://img.icons8.com/doodle/48/000000/shopping-basket-2--v1.png"
              />
            </div>
          </Link>
        </ContainerHeaderTopTitles>
      </ContainerHeaderTop>

      <ContainerHeaderBottom>
        <p>Men's clothing</p>
        <p>Jewelry</p>
        <p>Women's clothing</p>
      </ContainerHeaderBottom>
    </ContainerHeader>
  );
}
