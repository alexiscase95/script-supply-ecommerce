/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const headerStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 2rem;
  `;

export const logoStyle = css`
    flex: 1;
    display: flex;
  `;

export const logoTextStyle = css`
    font-size: 2rem; 
    font-weight: 700; 
    color: #333; 
    letter-spacing: 1px;
    text-transform: uppercase; 
  `;

export const searchBarStyle = css`
    flex: 2;
    display: flex;
    justify-content: center;
  `;

export const iconsStyle = css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;

export const iconStyle = css`
    margin-left: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
    transition: color 0.3s ease;
    &:hover {
      color: #007bff;
    }
  `;