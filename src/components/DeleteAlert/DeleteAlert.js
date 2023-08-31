import Grid from '@mui/material/Grid';
import './DeleteAlert.css'

function DeleteAlert({ name, onConfirmDelete, onCancelDelete }) {
  return (
    <Grid container justifyContent='center' alignItems='center' className='delete-alert-container'>
      <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

        <h2 style={{ textAlign: 'center' }}>Remove {name.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}?</h2>
        <Grid className='button-container'>
          <button className='green-button' onClick={onConfirmDelete}>Yes</button>
          <button className='red-button' onClick={onCancelDelete}>No</button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DeleteAlert;
