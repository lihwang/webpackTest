import React,{ Component } from 'react'
import _ from "lodash"
export default class Hpme extends Component {

    render() {
        return <div>
            {
                _.join(['Hpme','Page'],'')
            }
            
        </div>
    }
}

