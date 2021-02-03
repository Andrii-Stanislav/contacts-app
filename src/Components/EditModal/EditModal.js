import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import styles from './EditModal.module.css';
import { CSSTransition } from 'react-transition-group';

import EdtiContactForm from '../EdtiContactForm';
import Alert from '../../Components/Alert';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TransitionsModal({ id, name, number }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 2000);
  };

  return (
    <div>
      <button className={styles.button} type="button" onClick={handleOpen}>
        Edit
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 250,
        }}
      >
        <Fade in={open}>
          <div className={styles.paper}>
            {' '}
            <EdtiContactForm
              onCloseModal={handleClose}
              id={id}
              name={name}
              number={number}
              showAlert={showAlert}
            />
            <CSSTransition
              in={alert}
              appear={true}
              timeout={250}
              classNames="fade"
              unmountOnExit
            >
              <Alert text="Contact is already exist" />
            </CSSTransition>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal;
