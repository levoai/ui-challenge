import React, { useState } from 'react';

type CollapsibleProps = {
  header: React.ReactNode;
};

const Collapsible: React.FC<CollapsibleProps> = ({ children, header }) => {
  const [show, setShow] = useState(true);

  const toggle = () => setShow((currentValue) => !currentValue);
  return (
    <div>
      <header
        tabIndex={0}
        role="switch"
        aria-checked={show}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === 'ENTER') {
            toggle();
          }
        }}
      >
        {show ? '< ' : '> '}
        {header}
      </header>
      {show && children}
    </div>
  );
};

export default Collapsible;
