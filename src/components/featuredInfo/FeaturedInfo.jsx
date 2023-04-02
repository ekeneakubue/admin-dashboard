import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <div className="featuredMoney">$2,415</div>
                <span className="featuredMoneyRate">
                    -11.4 <ArrowDownwardIcon/>
                </span>
            </div>   
            <div className="featuredSub">Compared to last month</div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <div className="featuredMoney">$3,415</div>
                <span className="featuredMoneyRate">
                    -1.3 <ArrowDownwardIcon/>
                </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <div className="featuredMoney">$2,415</div>
                <span className="featuredMoneyRate">
                    11.4 <ArrowUpwardIcon/>
                </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>
    </div>
  )
}
