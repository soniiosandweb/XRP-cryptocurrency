import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import SideNav from "../SideNav/SideNav";
import { FaRegUser } from "react-icons/fa6";
import Exchange from "../../Component/Exchange/Exchange";

const Header = () => {
    return(
        <div className="crypto_app h-full">
            <Container fluid className="h-100">
                <Row className="h-100 main_block_row">
                    <Col className="sidebar_column p-0">
                        <SideNav />
                    </Col>
                    <Col className="p-0 column_block">
                        <div className="top_account">
                            <p className="m-0 account_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button className="btn-main">
                                <FaRegUser /> Account
                            </button>
                        </div>

                        <Exchange />

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header