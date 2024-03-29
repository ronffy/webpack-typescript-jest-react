import React, { SFC, ReactNode } from 'react';
import Toggleable from '../Toggleable';

export type Props = {
  title: string | ReactNode
}

const Panel: SFC<Props> = ({ title, children }) => (
  <Toggleable>
    {({ show, toggle }) => (
      <div style={{ border: '1px solid #ccc' }}>
        <h3 onClick={toggle} style={{ padding: '5px', background: '#eee' }}>{title}</h3>
        {
          show
            ? children
            : null
        }
      </div>
    )}
  </Toggleable>
)
export default Panel;
