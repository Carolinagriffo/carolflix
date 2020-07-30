import styled from 'styled-components';

const Button = styled.button`
    color: #ec90cb;
    border: 1px solid #ec90cb;
    background: black;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .6;
        color: #b53a89;
        border-color: #b53a89;
    }
`;

export default Button;