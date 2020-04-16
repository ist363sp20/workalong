import React from 'react';
import {Link} from 'react-router-dom';
import * as feather from 'feather-icons';

export default class MyPhotos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: []
        }
    }
    componentWillMount() {
        const storageRef = this.props.firebase.storage().ref();
        var listRef = storageRef.child(this.props.user.uid);
        let photos = [];
        var self = this;
        listRef.listAll().then((res) => {
            res.items.forEach((itemRef) => {
                itemRef.getDownloadURL().then(function(url) {
                    var myitem = {
                        url: url,
                        ref: itemRef
                    }
                    photos.push(myitem);
                    self.setState({photos: photos});
                });
            });
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="d-flex justify-content-between py-2">
                    <div className="brand">
                        <h1 className="h3">My Photos</h1>
                    </div>
                    <div>
                        <Link to="/upload" className="btn btn-primary"><i dangerouslySetInnerHTML={{__html: feather.icons['plus-circle'].toSvg()}}></i>
                            <span className="sr-only">Add Photo</span></Link>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    {this.state.photos.length < 1 
                        ?
                            <div>
                                 <p>You need some ideas!</p>
                            </div>
                        :
                            <div className="row row-cols-5 row-cols-md-5 py-5">
                                {this.state.photos.map(photo => {
                                    return (
                                        <div key={photo.ref.fullPath} className="col mb-4">
                                            <div className="card">
                                                <img className="card-img-top" src={photo.url} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                    }
                </div>
            </div>
        )
    }
}