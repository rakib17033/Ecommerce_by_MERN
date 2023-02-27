import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, clearErrors } from '../../actions/productsAction'

const ProductDetails = ({ match }) => {
  
  const { loading, error, product } = useSelector(state => state.productDetails)
  console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(match.params.id))

    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }
  }, [dispatch, alert, error, match.params.id])

  return (
    <Fragment>

    </Fragment>
  )
}

export default ProductDetails