import React, { Fragment, useState, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { Link } from 'react-router-dom'
import Loader from './layout/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productsAction'
import Product from './product/Product'
import Pagination from 'react-js-pagination'

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch();
    const { loading, error, products, productsCount, resPerPage } = useSelector((state) => state.product);
    console.log(products);
    useEffect(() => {
        dispatch(getProducts(currentPage));
    }, [dispatch, currentPage])

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Buy best price online'} />
                    <section id="products" className="container mt-5">
                        <div className="row">
                            {products && products.map(product => (
                                <Product key={product._id} product={product} />
                            ))}
                        </div>
                    </section>

                    {resPerPage <= productsCount && (
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass='page-link'
                            />
                        </div>
                    )}

                </Fragment>
            )}
        </Fragment>

    )
}

export default Home

// ------------------------------