import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Card(){
    return(
        <>
        <div class="card" style="width: 18rem">
            <img src="" class="card-img-top" alt="item image"></img>
            <div class="card-body">
                <h5 class="card-title">Item title</h5>
                <p class="card-text">Item info</p>
                <a href="#" class="btn btn-primary">View item</a>
            </div>
        </div>
        </>
    )
}

export default Card;
