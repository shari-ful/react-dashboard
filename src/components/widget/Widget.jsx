import "./widget.scss"
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Widget = ({ type }) => {
    let data;

    const amount = 500
    const diff = 25

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:(<PersonIcon className="icon"
                style={{
                    color:"crimson",
                    backgroundColor:"rgba(255, 0, 0, 0.2)"}}
                />),
            };
            break;
            case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"See all orders",
                icon:(<LocalMallIcon className="icon"
                style={{
                    color:"goldenrod",
                    backgroundColor:"rgba(218, 165, 32, 0.2)"}}
                />),
            };
            break;
            case "earning":
            data={
                title:"EARNING",
                isMoney:true,
                link:"See all earnings",
                icon:(<AttachMoneyIcon className="icon"
                style={{
                    color:"green",
                    backgroundColor:"rgba(0, 128, 0, 0.2)"}}
                />),
            };
            break;
            case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"See all balance",
                icon:(<CreditCardIcon className="icon"
                style={{
                    color:"purple",
                    backgroundColor:"rgba(128, 0, 128, 0.2)"}}
                />),
            };
            break;
            default:
                break;
    }

    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">{diff}%</div>
                {data.icon}
            </div>
        </div>       
    )   
}
export default Widget