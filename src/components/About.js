import React from 'react'
import Rainbow from '../hoc/Rainbow';
const About = () =>{
    return(
        <div className="container">{/*container centralise the page*/}
            <h4 className="center">About</h4>{/*center centralises the text*/}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex impedit officiis accusantium at tempore corrupti excepturi esse recusandae! Quae provident molestiae corporis repellat nihil enim labore ipsam? Magni, laborum asperiores.</p>
        </div>

    );
}

export default Rainbow (About);