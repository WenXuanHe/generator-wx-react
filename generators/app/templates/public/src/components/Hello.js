
let React = require('react')
let connect = require('react-redux').connect
let { Link  } = require('react-router-dom')
let PureRenderMixin = require ('react-addons-pure-render-mixin')
let mockData = require('../mock')
let TodosActions = require('../actions')

const mapStateToProps = (state, ownProps) => {
    return {
        text: state.hello.text || state.hello.get('text'),
        authors: state.hello.authors || state.hello.get('authors')
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAuthors: (id) => {
            dispatch(TodosActions.getAuthor(id));
        }
    }
}

class Hello extends React.Component {

    constructor(){
        super(...arguments);
        let { getAuthors } = this.props;
        getAuthors();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    render() {
        let { text, authors} = this.props;
        
        return (
            <div className="m200">
                <div>{text} {JSON.stringify(authors)}</div>
                <p><span>{authors.firstName} {authors.lastName}</span></p>
                <div className="">
                    <div><Link to="index">home</Link></div>
                </div>
            </div>
        )
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Hello)
