
let React = require('react')
let connect = require('react-redux').connect
let { Link  } = require('react-router-dom')
let mockData = require('../mock')

const mapStateToProps = (state, ownProps) => {
    return {
        text: state.hello.text
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

class Hello extends React.Component {

    constructor(){
        super(...arguments);

    }
    render() {
        let { text } = this.props;
        return (
            <div className="">
                <div>{text}</div>
                <div className="">
                    <div><Link to="index">home</Link></div>
                </div>
            </div>
        )
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Hello)
