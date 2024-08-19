/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const containerStyle = css`
display: flex;
flex-direction: column;
width: 100%;
`;

export const inputStyle = (roundedCorners) => css`
padding: 0.5rem;
border: 1px solid #ddd;
border-radius: ${roundedCorners ? '20px' : '0px'};
width: 100%;
box-sizing: border-box;
font-size: 1rem;
outline: none;
transition: border-color 0.3s ease;
&:focus {
  border-color: #007bff;
}
`;

export const buttonStyle = (roundedCorners) => css`
padding: 0.5rem;
border: none;
background-color: #007bff;
color: white;
border-radius: ${roundedCorners ? '20px' : '0px'};
cursor: pointer;
font-size: 1rem;
margin-top: 0.5rem;
transition: background-color 0.3s ease;
&:hover {
  background-color: #0056b3;
}
`;

export const dropdownStyle = (roundedCorners) => css`
margin-top: 0.5rem;
border: 1px solid #ddd;
border-radius: ${roundedCorners ? '20px' : '0px'};
max-height: 150px;
overflow-y: auto;
background-color: white;
position: absolute;
width: 100%;
box-sizing: border-box;
z-index: 1;
`;

export const dropdownItemStyle = css`
padding: 0.5rem;
cursor: pointer;
&:hover {
  background-color: #f1f1f1;
}
`;