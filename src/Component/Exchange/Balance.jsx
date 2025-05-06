import { LuWallet } from "react-icons/lu";

const Balance = () => {
    return(
        <div className="balance_block d-flex align-items-center justify-content-between">
            <div className="balance_div">
                <p className="balance_heading">My Balance</p>
                <h3 className="balance_amount">$187.22INR</h3>
            </div>
            <button className="btn-main btn-border">
                <LuWallet /> Wallet
            </button>
        </div>
    )
}

export default Balance