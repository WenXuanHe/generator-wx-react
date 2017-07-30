
let React = require('react')
let connect = require('react-redux').connect
let { Link  } = require('react-router-dom')

const mapStateToProps = (state, ownProps) => {
    return {
        text: state.home.text
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

class Home extends React.Component {

    render() {
        let { text } = this.props;
        return (
            <div className="">
                <div>{text}</div>
                <div className="">
                    <div><Link to="/hello">hello world</Link></div>
                </div>
            </div>
        )
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home)
