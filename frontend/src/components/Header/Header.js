import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import StringContent from '../Tippy/Tippy';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header>
            <div className={cx('container', 'headerBox')}>
                <div className={cx('logo')}>Shoe</div>
                <nav>
                    <StringContent title={'Home'}>
                        <NavLink to="/" className={(isActive) => cx('item', { active: isActive.isActive })}>
                            HOME
                        </NavLink>
                    </StringContent>

                    <StringContent title={'product'}>
                        <NavLink to="/products" className={(isActive) => cx('item', { active: isActive.isActive })}>
                            PRODUCT
                        </NavLink>
                    </StringContent>
                    <StringContent title={'NEW'}>
                        <NavLink to="/newspay" className={(isActive) => cx('item', { active: isActive.isActive })}>
                            NEW
                        </NavLink>
                    </StringContent>
                    <StringContent title={'LIEN HE'}>
                        <NavLink to="/contact" className={(isActive) => cx('item', { active: isActive.isActive })}>
                            LIEN HE
                        </NavLink>
                    </StringContent>
                </nav>
                <div className={cx('boxIcons')}>
                    <Tippy
                        trigger="click"
                        hideOnClick={true}
                        interactive={true}
                        placement= 'bottom-start'
                        render={(attrs) => (
                            <div className={cx('boxSearch')} tabIndex="-1" {...attrs}>
                                <div className={cx('boxs')}>
                                    <div className={cx('search')}>
                                        <input type="text" placeholder="Search here ..." />
                                        <i className="bi bi-search"></i>
                                    </div>
                                    
                                </div>
                            </div>
                        )}
                    >
                        <div className={cx('boxIc')}>
                            <i className="bi bi-search"></i>
                        </div>
                    </Tippy>

                    <div className={cx('boxIc')}>
                        <i className="bi bi-bag-plus"></i>
                    </div>
                    <div className={cx('boxIc')}>
                        <i className="bi bi-person"></i>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
