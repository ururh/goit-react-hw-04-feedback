import s from 'styled-components'

export const Buttons = s.div`
display: 'flex';
justifyContent: 'center';
`
export const ButtonOption = s.button`
margin: 5px;
padding: 10px 20px;
border: none;
border-radius: 5px;
background-color: #333;
color: #fff;
cursor: pointer;
font-size: 16px,
font-weight: bold;
text-transform: uppercase;
transition: background-color 0.3s, color 0.3s;

&:hover,
&:focus {
    color: white;
    background-color: black;
    cursor: pointer;
    `