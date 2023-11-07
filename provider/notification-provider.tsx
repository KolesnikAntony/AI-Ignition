'use client';
import React, {createContext, FC, ReactNode, useContext} from 'react';
import {Alert, Snackbar} from '@mui/material';

type Props = {
  children: ReactNode;
};

const Context = createContext<{showError: (message: string) => void}>({
  showError: (message: string): void => {},
});

export const useNotification = () => useContext(Context);
const NotificationProvider: FC<Props> = ({children}) => {
  const [open, setOpen] = React.useState<string | null>(null);

  const showError = (message: string) => {
    setOpen(message);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(null);
  };

  return (
    <>
      <Context.Provider value={{showError}}>
        <Snackbar
          open={!!open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
          <Alert onClose={handleClose} severity='error' sx={{width: '100%'}}>
            {open}
          </Alert>
        </Snackbar>
        {children}
      </Context.Provider>
    </>
  );
};

export default NotificationProvider;
