import { createContext, useState, useContext, ReactNode, ReactElement } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

interface SnackbarContextProps {
  showSnackbar: (message: string, severity?: AlertProps['severity']) => void // eslint-disable-line no-unused-vars
}

const SnackbarContext = createContext<SnackbarContextProps>({
  showSnackbar: () => {},
})

interface SnackbarProviderProps {
  children: ReactNode
}

export const useSnackbar = (): SnackbarContextProps => {
  return useContext(SnackbarContext)
}

export const SnackbarProvider = ({ children }: SnackbarProviderProps): ReactElement => {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false)
  const [snackbarMessage, setSnackbarMessage] = useState<string>('')
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertProps['severity']>('info') //TODO: Other severity category can be added as needed

  const showSnackbar = (message: string, severity: AlertProps['severity'] = 'info') => {
    setSnackbarMessage(message)
    setSnackbarSeverity(severity)
    setSnackbarOpen(true)
  }

  const handleClose = (event?: React.SyntheticEvent<any> | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarOpen(false)
  }

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </SnackbarContext.Provider>
  )
}
