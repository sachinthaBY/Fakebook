import React from 'react'
import './leftPane.css'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
        <div className="leftPaneContainer">
            <div className="leftPaneMenu">
                <li className="leftPaneMenuItem">
                    <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Messages</span>
                </li>
                <li className="leftPaneMenuItem">
                    <GroupIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Groups</span>
                </li>
                <li className="leftPaneMenuItem">
                    <RssFeedIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Feed</span>
                </li>
                <li className="leftPaneMenuItem">
                    <FlagIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Pages</span>
                </li>
                <li className="leftPaneMenuItem">
                    <CalendarMonthIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Events</span>
                </li>
                <li className="leftPaneMenuItem">
                    <BuildIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Settings</span>
                </li>
                <li className="leftPaneMenuItem">
                    <SportsEsportsIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Games</span>
                </li>
                <li className="leftPaneMenuItem">
                    <NewspaperIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">News</span>
                </li>
                <li className="leftPaneMenuItem">
                    <WorkOutlineIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Jobs</span>
                </li>
                <li className="leftPaneMenuItem">
                    <AddShoppingCartIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Marketplace</span>
                </li>
                <hr/>
                <div className="pagesYouLiked">
                    <h3>Pages You Liked</h3>
                </div>
                <div className="pageList">
                <li className="pageListItem">
                    <img src="/images/goddamn.jpg" alt="" className="pagePic" />
                    <span className="pageName">Goddamn</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/food.jpg" alt="" className="pagePic" />
                    <span className="pageName">Food Art</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/wholesome.jpg" alt="" className="pagePic" />
                    <span className="pageName">Wholesome</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/racing.jpg" alt="" className="pagePic" />
                    <span className="pageName">Racing Stars</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/lambo.jpg" alt="" className="pagePic" />
                    <span className="pageName">Lamborgini</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/weeknd.jpg" alt="" className="pagePic" />
                    <span className="pageName">The Weeknd</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/porsche.jpg" alt="" className="pagePic" />
                    <span className="pageName">Porsche</span>
                </li>
                </div>
            </div>
        </div>
    </div>
  )
}
