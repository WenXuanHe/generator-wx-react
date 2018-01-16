
let React = require('react')
let connect = require('react-redux').connect
let { Link  } = require('react-router-dom')
let PureRenderMixin = require ('react-addons-pure-render-mixin')
let TodosActions = require('../actions');

const mapStateToProps = (state, ownProps) => {
    return {
        text: state.home.text || state.home.get('text')
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

class Home extends React.Component {

    constructor(){
        super(...arguments);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let { text } = this.props;

        return (
            <div className="m200">
                <div>{text}</div>
                <div className="">
                    <div><Link to="/hello">hello world</Link></div>
                </div>
            </div>
        )
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home)
