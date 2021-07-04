import React from 'react';

class Input extends React.Component {
    render() {
        return  (
            <form className="d-flex py-2" onSubmit={this.props.handleFormSubmitProp} >
                <input type="text" name="text" className="form-control" placeholder="Write Text"/>
                    <button className="btn btn-success">Add</button>
            </form>
        )
    }
}

export default Input;