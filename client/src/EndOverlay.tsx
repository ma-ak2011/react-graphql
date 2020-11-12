// eslint-disable-next-line no-use-before-define
import React, { CSSProperties, FC } from 'react';

const classes: { [key: string]: CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    minWidth: '100vw',
    height: '100%',
    minHeight: '100vh',
    backgroundColor: 'white',
    zIndex: 2000,
    textAlign: 'center',
  },
};

const EndOverlay: FC = () => (
  <div style={classes.overlay}>
    ご注文ありがとうございました。 正常に処理が行われました。
  </div>
);

export default EndOverlay;
