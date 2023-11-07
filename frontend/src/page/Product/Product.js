import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '../../components/Button/Button';
import BoxProduct from '../../components/BoxProduct/BoxProduct';
import { useSelector, useDispatch } from 'react-redux';
import { listProduct, count } from '../../redux/selecter';
import { useEffect } from 'react';
import { setProduct, setFilterPrice, setFilterColor, setFilterSize } from '../../redux/searchFilter';
import { apiGetProducs } from '../../api/service';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CheckExample from '../../components/CheckFilter/CheckFilter';

const cx = classNames.bind(styles);

const listBtn = ['Nike', 'Addidas', 'Puma', 'Jordan', 'Mlb'];
const listSize = ['S', 'L', 'M', 'Xl', 'XXL'];
const listColor = ['Red', 'Blue', 'White', 'Yellow'];
const ListPrice = [
    {
        title: 'All',
        price: '',
    },
    {
        title: '100-200',
        price: { start: 100, stop: 200 },
    },
    {
        title: '200-300',
        price: { start: 200, stop: 300 },
    },
    {
        title: '300-400',
        price: { start: 300, stop: 400 },
    },
    {
        title: '400-500',
        price: { start: 400, stop: 500 },
    },
    {
        title: 'Trên 500',
        price: 500,
    },
];

function Product() {
    const dispatch = useDispatch();
    const lisProduct = useSelector(listProduct);
    const pageCount = useSelector(count);
    const [lis, setList] = useState([]);
    const [size, setSize] = useState([]);
    const [color, setColor] = useState([]);
    const [price, setPrice] = useState('All');
    const [checks, setChecks] = useState(true);
    const [checkc, setCheckc] = useState(true);

    useEffect(() => {
        callApiLisproduct(
            `q=${lis.join('&q=')}&page=1&size=${size.join('&size=')}&color=${color.join('&color=')}&price=${price}`,
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lis, size, color, price]);

    const handlerSort = async (e) => {
        try {
            let res = await apiGetProducs(
                `q=${lis.join('&q=')}&fill=price&order=${e.target.value}&size=${size.join('&size=')}&color=${color.join(
                    '&color=',
                )}&price=${price}`,
            );
            if (res && res.status === 200) {
                dispatch(setProduct(res.data));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const callApiLisproduct = async (data) => {
        try {
            let res = await apiGetProducs(data);
            if (res && res.status === 200) {
                dispatch(setProduct(res.data));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handlePageClick = (e) => {
        let page = e.selected + 1;
        callApiLisproduct(
            `q=${lis.join('&q=')}&page=${page}&size=${size.join('&size=')}&color=${color.join(
                '&color=',
            )}&price=${price}`,
        );
    };

    const handlerClick = (action) => {
        setList((state) => {
            let click = lis.includes(action);
            if (click) {
                return lis.filter((item) => item !== action);
            } else {
                return [...state, action];
            }
        });
    };

    const handlerFilter = (item, action) => {
        // eslint-disable-next-line default-case
        switch (action) {
            case 'size':
                setSize((state) => {
                    let li = size.includes(item);
                    let data = [];

                    if (li) {
                        data = size.filter((items) => items !== item);
                    } else {
                        data = [...state, item];
                    }
                    if (data.length >= 5 || data.length === 0) {
                        setChecks(true);
                    } else {
                        setChecks(false);
                    }
                    dispatch(setFilterSize(data));
                    return data;
                });
                break;
            // eslint-disable-next-line no-fallthrough
            case 'color':
                setColor((state) => {
                    let li = color.includes(item);
                    let data = [];

                    if (li) {
                        data = color.filter((items) => items !== item);
                    } else {
                        data = [...state, item];
                    }
                    if (data.length >= 4 || data.length === 0) {
                        setCheckc(true);
                    } else {
                        setCheckc(false);
                    }
                    dispatch(setFilterColor(data));
                    return data;
                });
                break;
        }
    };

    const handlerPrice = (e) => {
        setPrice(e.target.value);
        dispatch(setFilterPrice(price));
    };

    return (
        <div className={cx('boxContainer')}>
            <div className="row">
                <div className="col-2">
                    <div className={cx('aside')}>
                        <div className={cx('box1')}>
                            <p>Size</p>
                            <CheckExample laybal="All" type="checkbox" check={checks} />
                            {listSize.map((item) => {
                                return (
                                    <CheckExample
                                        key={uuidv4()}
                                        laybal={item}
                                        type="checkbox"
                                        check={size.includes(item)}
                                        handler={() => handlerFilter(item, 'size')}
                                    />
                                );
                            })}
                        </div>

                        <div className={cx('box1')}>
                            <p>Price</p>
                            {ListPrice.map((item) => {
                                return (
                                    <CheckExample
                                        key={uuidv4()}
                                        laybal={item.title}
                                        value={item.price}
                                        handler={(e) => handlerPrice(e)}
                                        check={price.includes(item.title)}
                                    />
                                );
                            })}
                        </div>

                        <div className={cx('box1')}>
                            <p>Color</p>
                            <CheckExample laybal="All" type="checkbox" check={checkc} />
                            {listColor.map((item) => {
                                return (
                                    <CheckExample
                                        key={uuidv4()}
                                        laybal={item}
                                        type="checkBox"
                                        check={color.includes(item)}
                                        handler={() => handlerFilter(item, 'color')}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className={cx('contenBox')}>
                        <div className={cx('fillter')}>
                            <div className={cx('boxButton')}>
                                {listBtn.map((item, index) => {
                                    return (
                                        <Button
                                            key={uuidv4()}
                                            title={item}
                                            id={index}
                                            active={lis.includes(item)}
                                            onClicks={() => handlerClick(item)}
                                        />
                                    );
                                })}
                            </div>
                            <div className="col-md-2">
                                <select id="inputState" defaultValue="" className="form-select" onChange={handlerSort}>
                                    <option value="">Giá</option>
                                    <option value="asc">Từ thấp đến cao</option>
                                    <option value="desc">Từ cao đến thấp</option>
                                </select>
                            </div>
                        </div>
                        <div className={cx('conten')}>
                            <div className="row">
                                {lisProduct.map((item, index) => {
                                    return (
                                        <article className={cx('col-3')} key={uuidv4()}>
                                            <BoxProduct
                                                key={uuidv4()}
                                                name={item.name}
                                                price={item.price}
                                                img={item.img}
                                                sale={'40%'}
                                                id={item._id}
                                            />
                                        </article>
                                    );
                                })}
                            </div>
                            {pageCount <= 0 ? (
                                <div className={cx('tecv')}>Không có sản phẩm nào.</div>
                            ) : (
                                <div className={cx('page')}>
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel="next >"
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={5}
                                        pageCount={pageCount}
                                        previousLabel="< previous"
                                        marginPagesDisplayed={2}
                                        pageClassName="page-item"
                                        pageLinkClassName="page-link"
                                        previousClassName="page-item"
                                        previousLinkClassName="page-link"
                                        nextClassName="page-item"
                                        nextLinkClassName="page-link"
                                        breakClassName="page-item"
                                        breakLinkClassName="page-link"
                                        containerClassName="pagination"
                                        activeClassName="active"
                                        renderOnZeroPageCount={null}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
