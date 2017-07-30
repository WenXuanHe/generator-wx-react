// { type: 'FETCH_POSTS' }
// { type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
// { type: 'FETCH_POSTS', status: 'success', response: { ... } }

export const indexShow = ({status='', payload=''}={}) => ({
  type: 'INDEX_SHOW',
  payload:payload,
  status:status
})


export default{
    indexShow
}
