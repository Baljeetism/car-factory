import React from 'react';


export default function Cart(props) {
    return (
        <div>
            <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                <div class="mr-1"><img class="rounded" src={props.src} width="70" /></div>
                <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold">{props.name}</span>

                </div>

                <div>
                    <h5 class="text-grey">price</h5>
                </div>
                <div class="d-flex align-items-center"><button onClick={() => props.handleClick(props)}>-</button></div>
            </div>


        </div>
    )
}
