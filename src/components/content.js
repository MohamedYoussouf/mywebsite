import React, { Component } from 'react';

class Content extends Component {
    state = {  }
    render() {
        return (
            <div className="container">
                <div id="content">
                    <div>
                        {this.props.children()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;