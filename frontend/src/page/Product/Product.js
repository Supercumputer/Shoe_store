import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '../../components/Button/Button';
import BoxProduct from '../../components/BoxProduct/BoxProduct';

const cx = classNames.bind(styles);

function Product() {
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
                                <Button title={'Nike'} active={true} />
                                <Button title={'Addidas'} />
                                <Button title={'Puma'} />
                                <Button title={'Jordan'} />
                                <Button title={'Mlb'} />
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
                                <article className={cx('col-3')}>
                                    <BoxProduct />
                                </article>
                                <article className={cx('col-3')}>
                                    <BoxProduct />
                                </article>
                                <article className={cx('col-3')}>
                                    <BoxProduct />
                                </article>
                                <article className={cx('col-3')}>
                                    <BoxProduct />
                                </article>
                                <article className={cx('col-3')}>
                                    <BoxProduct />
                                </article>
                                <article className={cx('col-3')}>
                                    <BoxProduct />
                                </article>
                                <article className={cx('col-3')}>
                                    <BoxProduct />
                                </article>
                                <article className={cx('col-3')}>
                                    <BoxProduct />
                                </article>
                                <article className={cx('col-3')}>
                                    <BoxProduct />
                                </article>
                                <article className={cx('col-3')}>
                                    <BoxProduct />
                                </article>
                                <article className={cx('col-3')}>
                                    <BoxProduct />
                                </article>
                                <article className={cx('col-3')}>
                                    <BoxProduct />
                                </article>
                            </div>
                            <div className={cx('page')}>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
