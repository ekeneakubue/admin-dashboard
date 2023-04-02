import './topbar.css'
import { NotificationsNone, Language, AccountBalance, Settings } from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
          <div className='topLeft'>
            <span className='logo'><AccountBalance /> CodeCity Admin</span>
          </div>
          <div className='topRight'>
            <div className='topbarIcons'>
              <div className='topbarIconContainer'>
                <NotificationsNone />
                <span className='topIconBadge'>2</span>
              </div>
            </div>
            <div className='topbarIcons'>
              <div className='topbarIconContainer'>
                <Language />
                <span className='topIconBadge'>2</span>
              </div>
            </div>
            <div className='topbarIcons'>
              <div className='topbarIconContainer'>
                <Settings/>                
              </div>              
            </div>
            <img src='https://ekene-portfolio.vercel.app/images/ekene.jpg' alt='avatar' className='topAvatar'/>
          </div>
        </div>
    </div>
  )
}
