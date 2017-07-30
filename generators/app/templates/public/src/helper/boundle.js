/**
 * 防抖
 */
export default (wait=1000) => {

    let timer = null;

    return function(callBack){
        let args = [].slice.call(arguments, 1);
        clearTimeout(timer);

        timer = setTimeout(() => {
            callBack(...args);
        }, wait);
    }
}
