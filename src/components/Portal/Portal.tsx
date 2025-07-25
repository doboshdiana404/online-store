import React from 'react';

import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './Portal.module.css';

export type PortalProps = {
  isOpen: boolean;
  placeContent: 'center' | 'right';
  onClickOutside?: () => void;
};

const Portal = ({
  isOpen,
  placeContent,
  onClickOutside,
  children,
}: React.PropsWithChildren<PortalProps>) => {
  const nodeRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isOpen]);

  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    if (target === nodeRef.current && onClickOutside) onClickOutside();
    else return;
  };

  const wrapperClName = clsx(styles.wrapper, {
    [styles['content-center']]: placeContent === 'center',
    [styles['content-right']]: placeContent === 'right',
  });

  return (
    <>
      {createPortal(
        <CSSTransition
          in={isOpen}
          nodeRef={nodeRef}
          timeout={300}
          classNames={{
            enter: styles['portal-enter'],
            enterActive: styles['portal-enter-active'],
            exit: styles['portal-exit'],
            exitActive: styles['portal-exit-active'],
          }}
          unmountOnExit
        >
          <div
            ref={nodeRef}
            className={wrapperClName}
            onMouseDown={handleCloseModal}
          >
            {children}
          </div>
        </CSSTransition>,
        document.body
      )}
    </>
  );
};

export default Portal;
