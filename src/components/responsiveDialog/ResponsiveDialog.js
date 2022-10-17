import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { SnackbarProvider, useSnackbar } from 'notistack';



export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
//   const handleClick = () => {
//     setOpen(true);
//   };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function MyApp() {
    const { enqueueSnackbar } = useSnackbar();
  
    const handleClick = () => {
    //   enqueueSnackbar('I love snacks.');
    };
  
    const handleClickVariant = (variant) => () => {
      // variant could be success, error, warning, info, or default
      enqueueSnackbar('Workflow triggered succesfully!', { variant });
            // setOpen(false);
        if (variant==='success')
        {
            return(
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={6000} onClose={handleClose1}>
                <Alert onClose={handleClose1} severity="success">
                  Workflow executed! 
                </Alert>
              </Snackbar>);
              setOpen(false);
        }
    };
    const handleClose = () => {
        setOpen(false);
      };
    return (
      <React.Fragment>
        <Button onClick={handleClose}>DISAGREE</Button>
        <Button onClick={handleClickVariant('success')}>AGREE</Button>
      </React.Fragment>
    );
  }
  function IntegrationNotistack() {
    return (
      <SnackbarProvider maxSnack={3}>
        <MyApp />
      </SnackbarProvider>
    );
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  function alertAction() {
   return(
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={6000} onClose={handleClose1}>
    <Alert onClose={handleClose1} severity="success">
      Workflow executed! 
    </Alert>
  </Snackbar>);
}


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose1} color="primary">
            Disagree
          </Button> */}
          {/* <Button onClick={() => {
         
          IntegrationNotistack();
           }} color="primary" autoFocus>
            Agree
          </Button> */}
          <IntegrationNotistack></IntegrationNotistack>
          {/* <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={6000} onClose={handleClose1}>
    <Alert onClose={handleClose1} severity="success">
      Workflow executed! 
    </Alert>
  </Snackbar> */}
        </DialogActions>
      </Dialog>
      
    </div>
  );
}
