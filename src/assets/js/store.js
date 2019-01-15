  const store_key = 'arr'

  function getStore() {
  	return JSON.parse(localStorage.getItem(store_key)) || []
  }

  function setStore(val) {
  	localStorage.setItem(store_key, JSON.stringify(val))
  }
  
  function deleteStore(){
  	localStorage.removeItem(store_key)
  }
  export {getStore,setStore,deleteStore}