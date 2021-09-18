import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAlbums} from '../redux/actions/albumsActions'

 class albums extends Component {
    componentDidMount(){
        this.props.getAlbums()
        
    }
    render() {
        const {albums} = this.props.albums
        console.log(albums)
        
        return (
            <div>
                {albums.map(u => 
                     <React.Fragment key={u.id}>
                         <h6 >{u.title}</h6> 
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({albums:state.albums})

export default connect(mapStateToProps, {getAlbums})(albums)