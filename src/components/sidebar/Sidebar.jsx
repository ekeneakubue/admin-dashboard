import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link } from 'react-router-dom';



export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to = "/">                    
                        <li className="sidebarListItem active">                        
                            <LineStyleIcon className='sidebarIcon'/>
                            Home
                        </li>
                    </Link>                    
                    <li className="sidebarListItem">                        
                        <TimelineIcon className='sidebarIcon'/>
                        Analytics                        
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className='sidebarIcon'/>
                        Sales
                    </li>                    
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to = "/userlist">
                        <li className="sidebarListItem">                        
                            <GroupIcon className='sidebarIcon'/>
                            Users                        
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <StorefrontIcon className='sidebarIcon'/>
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoneyIcon className='sidebarIcon'/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <LeaderboardIcon className='sidebarIcon'/>
                        Reports
                    </li>                    
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutlineIcon className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeedIcon className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineIcon className='sidebarIcon'/>
                        Messages
                    </li>                    
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyleIcon className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className='sidebarIcon'/>
                        Reports
                    </li>                    
                </ul>
            </div>  
        </div>
    </div>
  )
}
