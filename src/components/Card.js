import React from 'react'

export default function Card(props) {
    return (
        <div>
            <div class="card " style={{width: "18rem",margin:"20px 20px",backgroundColor:"#240046",border: "5px solid wheat"}}>
                <img class="card-img-top" src={props.src} alt="Card image cap" />
                    <div class="card-body">
                        <p class="card-text ">{props.name}</p>
                    </div>
                <button>View more</button>
                <button onClick={() => props.handleClick(props)}>Add to Cart</button>
            </div>

        </div>
    )
}
