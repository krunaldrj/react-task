import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPhotos} from '../redux/actions/photosActions'

 class photos extends Component {
    componentDidMount(){
        this.props.getPhotos()
        
    }
    render() {
        const {photos} = this.props.photos
        console.log(photos)
        
        return (
            <div className="col">
                {photos.map(u => 
                     <React.Fragment key={u.id}>
                         <h6 >{u.title}</h6>
                         <br/>
                         <img src={u.thumbnailUrl}/> 
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({photos:state.photos})

export default connect(mapStateToProps, {getPhotos})(photos)