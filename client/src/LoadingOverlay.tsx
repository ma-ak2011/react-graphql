// eslint-disable-next-line no-use-before-define
import React, { CSSProperties } from 'react';
import { CircularProgress } from '@material-ui/core';

const classes: { [key: string]: CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    minWidth: '100vw',
    height: '100%',
    minHeight: '100vh',
    opacity: 0.7,
    backgroundColor: 'white',
    zIndex: 2000,
  },
  circular: {
    position: 'fixed',
    top: 'calc(50vh - 20px)',
    left: 'calc(50% - 20px)',
    opacity: 0.7,
    zIndex: 2001,
  },
};

const LoadingOverlay: React.FC = () => (
  <div style={classes.overlay}>
    <div>
      <CircularProgress color="primary" style={classes.circular} />
    </div>
  </div>
);

export default LoadingOverlay;
