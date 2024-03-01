import { IconType } from 'react-icons';
import { Link, Location, useLocation } from 'react-router-dom';
import {
    RiDashboardFill,
    RiShoppingBag3Fill,
    RiCoupon3Fill,
} from 'react-icons/ri';
import { AiFillFileText } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { FaChartBar, FaChartPie, FaChartLine } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';

const AdminSidebar = () => {
    const location = useLocation();

    const [showModal, setShowModal] = useState<boolean>(false);
    const [phoneScreenActive, setPhoneScreenActive] = useState<boolean>(
        window.innerWidth < 1100
    );

    const resizeHandler = () => {
        setPhoneScreenActive(window.innerWidth < 1100);
    };
    useEffect(() => {
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <>
            {phoneScreenActive ? (
                <button id="hamburger" onClick={() => setShowModal(true)}>
                    <HiMenuAlt4 />
                </button>
            ) : null}

            <aside
                style={
                    phoneScreenActive
                        ? {
                              width: '20rem',
                              height: '100vh',
                              position: 'fixed',
                              top: 0,
                              left: showModal ? '0' : '-20rem',
                              transition: 'all 0.5s',
                          }
                        : {}
                }>
                <h2>LOGO.</h2>
                <div>
                    <h5>Dashboard</h5>
                    <ul>
                        <Li
                            url="/admin/dashboard"
                            text="Dashboard"
                            Icon={RiDashboardFill}
                            location={location}
                        />
                        <Li
                            url="/admin/product"
                            text="Product"
                            Icon={RiShoppingBag3Fill}
                            location={location}
                        />
                        <Li
                            url="/admin/customer"
                            text="Customer"
                            Icon={IoIosPeople}
                            location={location}
                        />
                        <Li
                            url="/admin/transaction"
                            text="Transaction"
                            Icon={AiFillFileText}
                            location={location}
                        />
                    </ul>
                    <h5>Charts</h5>
                    <ul>
                        <Li
                            url="/admin/chart/bar"
                            text="Bar"
                            Icon={FaChartBar}
                            location={location}
                        />
                        <Li
                            url="/admin/chart/pie"
                            text="Pie"
                            Icon={FaChartPie}
                            location={location}
                        />
                        <Li
                            url="/admin/chart/line"
                            text="Line"
                            Icon={FaChartLine}
                            location={location}
                        />
                    </ul>
                    <h5>Apps</h5>
                    <ul>
                        <Li
                            url="/admin/app/Coupon"
                            text="Coupon"
                            Icon={RiCoupon3Fill}
                            location={location}
                        />
                    </ul>
                </div>
                {phoneScreenActive ? (
                    <button
                        id="close-sidebar"
                        onClick={() => setShowModal(false)}>
                        Close
                    </button>
                ) : null}
            </aside>
        </>
    );
};

interface LiProps {
    url: string;
    text: string;
    location: Location;
    Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => (
    <li
        style={{
            backgroundColor: location.pathname.includes(url)
                ? 'rgba(5, 118, 240, 0.3)'
                : '',
        }}>
        <Link
            to={url}
            style={{
                color: location.pathname.includes(url) ? 'rgb(2, 76, 156)' : '',
            }}>
            <Icon /> {text}
        </Link>
    </li>
);

export default AdminSidebar;
