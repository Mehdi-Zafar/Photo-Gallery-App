import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { saveAs } from 'file-saver'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '70%',
  maxHeight:'90%',
  bgcolor: 'background.paper',
  borderRadius:'10px',
  boxShadow: 24,
};

export default function MediaCard(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="card">
      <Card sx={{ maxWidth: 500 }} elevation={4}>
        <CardMedia
          className="img"
          component="img"
          height="400"
          image={props.image.webformatURL}
          alt="picture"
        />
        <CardContent >
          <Typography variant="body2" color="text.secondary" className="blockText">
          Tags: {props.image.tags}
          </Typography>
          <div className="flexContent">
            <div>
              <Typography variant="body2" color="text.secondary" className="iconText">
              <CommentOutlinedIcon fontSize="small"/>&nbsp;Comments: {props.image.comments}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="iconText">
              <FileDownloadOutlinedIcon fontSize="small"/>&nbsp;Downloads: {props.image.downloads}
              </Typography>
            </div>
            <div>
              <Typography variant="body2" color="text.secondary" className="iconText">
              <ThumbUpOutlinedIcon fontSize="small"/>&nbsp;Likes: {props.image.likes}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="iconText">
              <VisibilityOutlinedIcon fontSize="small"/>&nbsp;Views: {props.image.views}
              </Typography>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <div className="button">
          <Button size="medium" color="success" variant="outlined" sx={{margin:"3px"}} onClick={()=>saveAs(props.image.largeImageURL, 'image.jpg')}>
            Download&nbsp;<DownloadOutlinedIcon sx={{verticalAlign:"middle"}}/>
          </Button>
          <Button size="medium" color="success" variant="outlined" sx={{margin:"3px"}} onClick={handleOpen}>
            Preview&nbsp;<ImageSearchIcon sx={{verticalAlign:"middle"}}/>
            </Button>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box 
            component="img"
            sx={style}
            src={props.image.largeImageURL}
            alt="image">
            </Box>
          </Modal>
        </CardActions>
      </Card>
    </div>
  );
}


