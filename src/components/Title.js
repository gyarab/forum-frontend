import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getAllForums} from "../action-creators/forumActionCreator";
import {Alert, Button} from "reactstrap";

class Title extends Component {
    render() {
        return (
            <div>
                <Alert color="light">{this.props.forumReducer.storage}</Alert>
                <Button onClick={this.getAllForums}>Test redux action</Button>

                <h1>{this.props.ahoj}</h1>
            </div>
        );
    }

    getAllForums = (event) =>{
        this.props.getAllForums();
    };

}

Title.propTypes = {
    getAllForums: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    ...state
});



const mapDispatchToProps = dispatch => ({
    getAllForums: () => dispatch(getAllForums())
});
export default connect(mapStateToProps, mapDispatchToProps)(Title);