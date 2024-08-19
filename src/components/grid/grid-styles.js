/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const gridItemStyle = (columns, colSize) =>css`
  padding: 1rem;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 10px; 
  overflow: hidden;
  position: relative; 
  aspect-ratio: 1;
  flex-basis: calc(${100 / columns}% - 1rem); /* Adjust basis to fit the number of columns */
  max-width: calc(${100 / columns}% - 1rem);
  min-width: ${colSize}px;
`;

export const gridItemImageStyle = css`
  width: 100%; 
  height: 100%; 
  object-fit: contain; 
  position: absolute; 
  top: 0;
  left: 0;
`;

export const gridStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;