import './widgetLg.css'

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }
 
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://ekene-portfolio.vercel.app/images/ekene.jpg" alt="widgetLgAvatar" className="widgetLgImg" />
              <span className="widgetLgName">Ege Ntu</span>
            </td> 
            <td className="widgetLgDate">2 June 2023</td>
            <td className="widgetLgAmount">N 20,000</td>
            <td className="widgetLgStatus"> 
            <Button type="Approved"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://ekene-portfolio.vercel.app/images/ekene.jpg" alt="widgetLgAvatar" className="widgetLgImg" />
              <span className="widgetLgName">Ege Ntu</span>
            </td> 
            <td className="widgetLgDate">2 June 2023</td>
            <td className="widgetLgAmount">N 20,000</td>
            <td className="widgetLgStatus">
              <Button type="Declined"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://ekene-portfolio.vercel.app/images/ekene.jpg" alt="widgetLgAvatar" className="widgetLgImg" />
              <span className="widgetLgName">Ege Ntu</span>
            </td> 
            <td className="widgetLgDate">2 June 2023</td>
            <td className="widgetLgAmount">N 20,000</td>
            <td className="widgetLgStatus">
              <Button type="Pending"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://ekene-portfolio.vercel.app/images/ekene.jpg" alt="widgetLgAvatar" className="widgetLgImg" />
              <span className="widgetLgName">Ege Ntu</span>
            </td> 
            <td className="widgetLgDate">2 June 2023</td>
            <td className="widgetLgAmount">N 20,000</td>
            <td className="widgetLgStatus">
              <Button type="Approved"/>
            </td>
          </tr>
        </table>
    </div>
  )
}
