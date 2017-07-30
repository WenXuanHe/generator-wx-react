let timestamp = () =>{

    let date = new Date();

    return date.toJSON().replace(/[T:-]|\..+$/g, '');
}
// export default timestamp;
module.exports = timestamp;
