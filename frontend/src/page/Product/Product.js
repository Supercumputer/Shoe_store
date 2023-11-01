import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '../../components/Button/Button';
import BoxProduct from '../../components/BoxProduct/BoxProduct';
import { useSelector, useDispatch } from 'react-redux';
import { lisFroductFilter, count } from '../../redux/selecter';
import { useEffect } from 'react';
import { setProduct, setFilterSearch } from '../../redux/searchFilter';
import { apiGetProducs } from '../../api/service';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';


import { v4 as uuidv4 } from 'uuid';

const cx = classNames.bind(styles);

const listBtn = ['Nike', 'Addidas', 'Puma', 'Jordan', 'Mlb'];

function Product() {
    const lisProduct = useSelector(lisFroductFilter);
    const pageCount = useSelector(count);
    const [lis, setList] = useState([])
    console.log(lis)
    const dispatch = useDispatch();

    useEffect(() => {
        callApiLisproduct(lis.join('&q='), 1);
    }, [lis]);

    const callApiLisproduct = async (search, page) => {
        try {
            let res = await apiGetProducs(search, page);
            if (res && res.status === 200) {
                dispatch(setProduct(res.data));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handlePageClick = (e) => {
        let page = e.selected + 1;
        callApiLisproduct('', page);
    };

    const handlerClick = (action) => {
        
        setList(state => {
            let click = lis.includes(action)
            if(click){
                return lis.filter((item) => item !== action) 
            }else{
                return [...state, action]
            }
        })
    }


    return (
        <div className={cx('boxContainer')}>
            <div className="row">
                <div className="col-2">
                    <div className={cx('aside')}>
                        <div className={cx('box1')}>
                            <p>Catenory</p>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    All
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Sneakers
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Flats
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Sandas
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Heels
                                </label>
                            </div>
                        </div>
                        <div className={cx('box1')}>
                            <p>Price</p>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="price" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    All
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="price"
                                    id="flexRadioDefault2"
                                    checked
                                />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    100-200
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="price"
                                    id="flexRadioDefault2"
                                    checked
                                />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    200-300
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="price"
                                    id="flexRadioDefault2"
                                    checked
                                />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    300-400
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="price"
                                    id="flexRadioDefault2"
                                    checked
                                />

                                <label className="form-check-label" for="flexRadioDefault2">
                                    400-500
                                </label>
                            </div>
                        </div>
                        <div className={cx('box1')}>
                            <p>Color</p>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="Color" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    All
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Color"
                                    id="flexRadioDefault2"
                                    checked
                                />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Black
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Color"
                                    id="flexRadioDefault2"
                                    checked
                                />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Blue
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Color"
                                    id="flexRadioDefault2"
                                    checked
                                />

                                <label className="form-check-label" for="flexRadioDefault2">
                                    Red
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Color"
                                    id="flexRadioDefault2"
                                    checked
                                />

                                <label className="form-check-label" for="flexRadioDefault2">
                                    White
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className={cx('contenBox')}>
                        <div className={cx('fillter')}>
                            <div className={cx('boxButton')}>
                                {listBtn.map((item, index) => {
                                    return <Button title={item} id={index} active={lis.includes(item)} onClicks={() => handlerClick(item)}/>
                                })}
                    
                            </div>
                            <div className="col-md-2">
                                <select id="inputState" className="form-select">
                                    <option selected>Giá</option>
                                    <option>Từ thấp đến cao</option>
                                    <option>Từ cao đến thấp</option>
                                </select>
                            </div>
                        </div>
                        <div className={cx('conten')}>
                            <div className="row">
                                {lisProduct.map((item, index) => {
                                    return (
                                        <article className={cx('col-3')} key={uuidv4()}>
                                            <BoxProduct
                                                name={item.name}
                                                price={item.price}
                                                img={item.img}
                                                sale={'40%'}
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
