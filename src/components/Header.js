import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import {styled,alpha} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useRef } from 'react';

const Header = (props) => {

    const input = useRef("");

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.black, 0.25),
        },
        marginLeft: "auto",
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing("auto"),
          marginRight: theme.spacing(0),
          width: '100%',
        },
      }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '35ch',
          textAlign:"center",
          [theme.breakpoints.up('sm')]: {
            width: '35ch',
            '&:focus': {
              width: '40ch',
            },
          },
        },
      }));

      function handleSubmit(e){
        e.preventDefault();
        props.setTerm(input.current)
      }

      function onChange(e){
        input.current = e.target.value
      }

    
    return ( 
        <nav>
            <div className="logo" onClick={()=>props.setTerm('')}>
              <CameraAltTwoToneIcon fontSize="large" color="red" sx={{marginLeft:2}}/>
              <h2>Photo Gallery</h2>
            </div>
            <div className="search-bar">
                <form onSubmit={handleSubmit}>
                    <Search sx={{marginLeft:"auto"}}>
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search your favorite pictures..."
                        inputProps={{ 'aria-label': 'search'}}
                        onChange={onChange}
                        />
                    </Search>
                </form>
            </div>
        </nav>
     );
}
 
export default Header;