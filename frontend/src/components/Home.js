import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import {Link} from 'react-router-dom'
import Loader from './layout/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productsAction'
import Product from './product/Product'

const Home = () => {
    const dispatch = useDispatch();
    const { loading, error, products, productsCount } = useSelector((state) => state.product);
    console.log(products);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

return (
    <Fragment>
        {loading ? <Loader/> : (
            <Fragment>
                <MetaData title={'Buy best price online'} />
                <section id="products" className="container mt-5">
                    <div className="row">
                        {products && products.map(product => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                </section>  
            </Fragment>          
        )}
    </Fragment>

    )
}

export default Home

// ------------------------------