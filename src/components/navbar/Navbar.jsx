import "./navbar.scss"
import profile from "../../img/profile.jpg"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InvertColorsIcon from '@mui/icons-material/InvertColors';

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="search" />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon" />English
                    </div>
                    <div className="item">
                        <ChatIcon className="icon" />
                        <div className="counter">3</div>
                    </div>
                    <div className="item">
                        <NotificationsIcon className="icon" />
                        <div className="counter">4</div>
                    </div>
                    <div className="item">
                        <InvertColorsIcon className="icon" />
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className="icon" />
                    </div>
                    <div className="item">
                        <img className="avatar" src={profile} alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Navbar