/** @jsxImportSource @emotion/react */
import { mastheadContainerStyle, mastheadImageStyle } from './masthead-styles';

/**
 * Masthead component with a large background image and overlay content.
 *
 * @param {Object} props - Component props.
 * @param {string} props.imageUrl - URL of the background image.
 *
 * @returns {JSX.Element} The rendered Masthead component.
 */
const Masthead = ({ imageUrl="https://via.placeholder.com/1200x400?text=Masthead+Image" }) => {
  return (
    <div id={"masthead"} css={mastheadContainerStyle}>
      <img src={imageUrl} alt="Masthead Background" css={mastheadImageStyle} />
    </div>
  );
};

export default Masthead;
