/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * Styles for the Masthead container.
 */
export const mastheadContainerStyle = css`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

/**
 * Styles for the Masthead background image.
 */
export const mastheadImageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire container */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Place the image behind other content */
`;

/**
 * Styles for Masthead title text.
 */
export const mastheadTitleStyle = css`
  font-size: 2.5rem; 
  margin: 0;
`;

/**
 * Styles for Masthead subtitle text.
 */
export const mastheadSubtitleStyle = css`
  font-size: 1.5rem;
  margin: 0;
`;
