import { Component } from "react";
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if(this.props.currentUserId === stream.userId) {
            return (
                <div className="right floated content">
                    <Link 
                        to={`/streams/edit/${stream.id}`} 
                        className="ui button primary"
                    >
                            Edit
                    </Link>
                    <Link 
                        to={`/streams/delete/${stream.id}`} 
                        className="ui button negative"
                    >
                        Delete
                    </Link>
                </div>
            );
        } else {
            return null;
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">
                            {stream.title}
                        </Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    };

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: "right" }}>
                    <Link to="/streams/new" className="ui button primary">Create a stream</Link>
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        isSignedIn: state.auth.isSignedIn,
        currentUserId: state.auth.userId,
    };
};

export default connect( mapStateToProps, { fetchStreams })(StreamList);