/** @jsxImportSource @emotion/react */
import { gridStyle, gridItemStyle, gridItemImageStyle } from './grid-styles';

/**
 * Grid component to display items in a flexible grid layout.
 *
 * @param {Object} props - Component props.
 * @param {Array<Object>} props.items - Array of items to display in the grid.
 * @param {number} props.columns - Number of columns in the grid.
 * @param {number} props.colSize - Minimum width of each column.
 *
 * @returns {JSX.Element} The rendered Grid component.
 */
const Grid = ({ items, columns, colSize }) => {

  return (
    <div css={gridStyle}>
      {items.map((item) => (
        <div key={item.id} css={gridItemStyle(columns, colSize)} className="grid-item">
          <img src={item.image} alt={item.title} css={gridItemImageStyle} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
