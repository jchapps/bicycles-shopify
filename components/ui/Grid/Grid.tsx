import {FC, ReactNode } from 'react';

const Grid:FC = ({children}) => {
  return (
    <div className='root-grid'>
      {children}
    </div>
  );
}

export default Grid;
