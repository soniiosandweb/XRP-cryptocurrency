import { Form } from "react-bootstrap";
import Balance from "./Balance";
import "./Exchange.css";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const bitcoin = `${process.env.REACT_APP_IMAGES_PATH}/currency/bitcoin.png`;
const ethereum = `${process.env.REACT_APP_IMAGES_PATH}/currency/ethereum.png`;
const bnb = `${process.env.REACT_APP_IMAGES_PATH}/currency/bnb.png`;
const usdc = `${process.env.REACT_APP_IMAGES_PATH}/currency/usdc.png`;
const tether = `${process.env.REACT_APP_IMAGES_PATH}/currency/tether.png`;
const polygon = `${process.env.REACT_APP_IMAGES_PATH}/currency/polygon.png`;

const swap = `${process.env.REACT_APP_IMAGES_PATH}/swap.png`;

const currencyList = [
    {
        icon: bitcoin,
        title: "Bitcoin",
        short: "BTC",
        color: "yellow",
        crypto: "BTC",
    },
    {
        icon: ethereum,
        title: "Ethereum",
        short: "ETH",
        color: "blue",
        crypto: "ETH",
    },
    {
        icon: bnb,
        title: "BNB",
        short: "BNB",
        color: "yellow",
        crypto: "BSC",
    },
    {
        icon: usdc,
        title: "USDC",
        short: "USDC",
        color: "blue",
        crypto: "ETH",
    },
    {
        icon: tether,
        title: "Tether",
        short: "USDT",
        color: "blue",
        crypto: "ETH",
    },
    {
        icon: polygon,
        title: "Polygon",
        short: "POL",
        color: "blue",
        crypto: "ETH",
    }
];

const Exchange = () => {

    const [sendList, setSendList] = useState(false);
    const [getList, setGetList] = useState(false);

    const getListBlock = useRef();
    const sendListBlock = useRef();

    // handle send list click
    const handleSelectList = () => {
        setSendList(prev => !prev)
    }

    // handle send list click
    const handleSelectGetList = () => {
        setGetList(true);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sendListBlock.current && !sendListBlock.current.contains(event.target)) {
                setSendList(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <div className="exchange_section">
            <Balance />

            <div className="exchange_block">
                <div className="exchange_head">
                    <h5 className="exchange_heading m-0">Exchange</h5>
                </div>
                <div className="exchange_body">
                    <div className="step1 exchange_step">
                        <h5 className="exchange_heading mb-4">Select Pair 1/4</h5>

                        <div className="exchange_currency">
                            <p className="small-p">You Send</p>

                            <div className="currency_col">
                                <img src={bitcoin} alt="Bitcoin" className="currency_icon" />
                                <div className="currency_desc">
                                    <div className="currency_short">
                                        <div className="currency_select">
                                            <h4 className="currency_short_name" onClick={() => handleSelectList()}>
                                                BTC
                                                <FaChevronDown />
                                            </h4>
                                            <ul className={`currency_list ${!sendList && "d-none"}`} ref={sendListBlock}>
                                                {currencyList.map((item, index) => (
                                                    <li
                                                        key={index}
                                                    >
                                                        <img src={item.icon} alt={item.title} className="currency_icon" />
                                                        {item.title}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <input 
                                            type="text"
                                            name="amount_send"
                                            defaultValue={0.1}
                                            className="currency_amount"
                                        />
                                    </div>
                                    <p className="currency_name">
                                        Bitcoin
                                        <span className={`currency_crypto yellow`}>BTC</span>
                                    </p>
                                </div>
                            </div>

                            <div className="swap_block">
                                <img
                                    src={swap}
                                    alt="swap"
                                    className="swap_icon"
                                />
                            </div>

                        </div>

                        <div className="exchange_currency">
                            <p className="small-p">You Get</p>

                            <div className="currency_col">
                                <img src={ethereum} alt="Ethereum" className="currency_icon" />
                                <div className="currency_desc">
                                    <div className="currency_short">
                                        <div className="currency_select">
                                            <h4 className="currency_short_name" onClick={() => handleSelectGetList()}>
                                                ETH
                                                <FaChevronDown />
                                            </h4>
                                            <ul className={`currency_list ${!getList && "d-none"}`} ref={getListBlock}>
                                                {currencyList.map((item, index) => (
                                                    <li
                                                        key={index}
                                                    >
                                                        <img src={item.icon} alt={item.title} className="currency_icon" />
                                                        {item.title}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <input 
                                            type="text"
                                            name="amount_send"
                                            defaultValue={6.78950917}
                                            className="currency_amount"
                                        />
                                    </div>
                                    <p className="currency_name">
                                        Ethereum
                                        <span className={`currency_crypto blue`}>ETH</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="fixed_rate_div">
                            <Form.Check
                                type="switch"
                                id="fixed_rate"
                                label="Fixed Rate ?"
                            />
                        </div>

                        <button className="btn-main my-5">
                            Next Step
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exchange