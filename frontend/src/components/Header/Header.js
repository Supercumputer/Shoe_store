import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import StringContent from '../Tippy/Tippy';
import Tippy from '@tippyjs/react/headless';
import debounce from '../debounced/Debounce'
import {apiGetProducs} from '../../api/service'
import BoxSearch from '../BoxSearch/BoxSearch';
import { useEffect, useState, useRef } from 'react';
import { setProduct } from '../../redux/searchFilter';
import {useDispatch} from 'react-redux'

import { v4 as uuidv4 } from 'uuid';

const cx = classNames.bind(styles);

function Header() {
    const [search, setSearch] = useState('');
    const [list, setList] = useState([])
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const tooltipRef = useRef();
  
    let se = debounce(search, 500)
    
    useEffect(()=> {
        if(se.trim() === ''){
            setList([])
        }else{
            handlerCallSearch(`q=${se}`)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [se])
    
    const handlerCallSearch = async (data) => {
        try{
            let res = await apiGetProducs(data)
            if(res && res.status === 200){
                setList(res.data.data)
                setData(res.data)
            }
        }catch(error){
            console.log(error)
        }
    }
    
    const handlerSearch = () => {
        if(se){
            dispatch(setProduct(data))
            tooltipRef.current._tippy.hide();
        }
    };
    
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
                        ref={tooltipRef}
                        trigger="click"
                        hideOnClick={true}
                        interactive={true}
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className={cx('boxSearch')} tabIndex="-1" {...attrs}>
                                <div className={cx('boxs')}>
                                    <div className={cx('search')}>
                                        <input
                                            type="text"
                                            placeholder="Search here ..."
                                            value={search}
                                            onChange={e => setSearch(e.target.value)}
                                        />
                                        <i className="bi bi-search" onClick={handlerSearch}></i>
                                    </div>
                                    {list.map(item => {
                                        return <BoxSearch key={uuidv4()} img={item.img} title={item.name} price={item.price}/>
                                    })}
                                    
                                    
                                </div>
                            </div>
                        )}
                    >
                        <div className={cx('boxIc')} onClick={() => navigate('/products')}>
                            <i className="bi bi-search"></i>
                        </div>
                    </Tippy>

                    <div className={cx('boxIc')} onClick={() => navigate('/cart')}>
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
