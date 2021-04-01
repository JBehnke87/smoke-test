export const PAYMENT_REQUEST_SUCCESS = 'PAYMENT_REQUEST_SUCCESS'
export const PAYMENT_REQUEST_STARTED = 'PAYMENT_REQUEST_STARTED'

export function fetchPayments() {
  return async (dispatch) => {
      dispatch({type: PAYMENT_REQUEST_STARTED})
    const response = await fetch('/payments')
    const json = await response.json()
    const payments = json.payments
    dispatch({
      type: PAYMENT_REQUEST_SUCCESS, 
      payments,
    })
  }
}