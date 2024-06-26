import { Container, Row } from 'reactstrap'
import AccountSection from './HeaderPartitions/AccountSection';
import TabSelector from './HeaderPartitions/TabSelector';
import SystemInfo from './HeaderPartitions/SystemInfo';
const Header = () => {
    //Creating a Nav Header, based on Xbox UI Header Menu
    return (
        <>
            <header className='p-5'>
                <Container fluid className='white-text'>
                    <Row className=' justify-content-between w-100 '>
                        <AccountSection  showCompleteName showScore smallSize/>
                        <TabSelector />
                        <SystemInfo />
                    </Row>
                </Container>
            </header>
        </>
    )
}
export default Header;
