import React from 'react';
import * as feather from 'feather-icons';
import {Link} from 'react-router-dom';


export default class PhotoUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: [],
            uploaded: 0
        }
        this.fileInput = React.createRef();
    }
    getFiles = (evt) => {
        let files = [];
        for (let file of evt.target.files) {
            if(file.type.startsWith('image/')) {
                files.push({
                    file: file,
                    uploaded: false,
                    uploading: false
                });
            }
        }
        this.setState({files: files});
    }
    uploadPhotos = (evt) => {
        let files = Object.assign([], this.state.files);
        for(let f of files) {
            var self = this;
            f.uploading = true;
            const storageRef = this.props.firebase.storage().ref();
            var fileRef = storageRef.child(this.props.user.uid + '/' + f.file.name);
            fileRef.put(f.file).then(function(snapshot) {
                f.uploaded = true;
                f.uploading = false;
                console.log('upload complete');
                self.setState({files: files, uploaded: self.state.uploaded + 1});
            });
        }
        self.setState({files: files});
    }
    openFile = () => {
        this.fileInput.current.click();
    }
    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-between py-2">
                    <div className="brand">
                        <h1 className="h3">Upload Photos</h1>
                    </div>
                    <div>
                        <Link to="/my-photos" className="btn btn-primary"><i dangerouslySetInnerHTML={{__html: feather.icons['x-circle'].toSvg()}}></i>
                            <span className="sr-only">Cancel Upload</span></Link>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center py-5">
                    <input ref={this.fileInput} className="hidden" type='file' multiple onChange={this.getFiles} />
                    <button className="btn btn-link" onClick={this.openFile}>Click to upload files</button>
                </div>
                <div className="row row-cols-4 row-cols-md-4 py-5">
                {this.state.files.map(file => {
                    return (
                        <div key={file.file.name}  className="col mb-4">
                            <div className="card">
                                <img className="card-img-top" src={window.URL.createObjectURL(file.file)} alt={file.file.name} />
                                {file.uploaded && 
                                    <p className="text-center">Uploaded!</p>
                                }
                                {file.uploading && 
                                    <p className="text-center">Uploading...</p>
                                }
                            </div>
                        </div>
                    )
                })}
                </div>
                { (this.state.files.length > 0) && 
                    <div>
                        <p className="text-center">Uploaded: { this.state.uploaded } / { this.state.files.length }</p>
                        <div className="d-flex justify-content-center align-items-center py-5">
                        {(this.state.uploaded === this.state.files.length) &&
                            <Link to="/my-photos" className="btn btn-primary my-4">Done</Link>
                        }
                        {this.state.uploaded === 0 &&
                            <button className="btn btn-primary my-4" onClick={this.uploadPhotos}>Upload</button>
                        }
                        </div>
                    </div>
                }
            </div>
        )
    }
}