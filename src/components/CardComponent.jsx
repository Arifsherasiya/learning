import React from "react";

export const CardComponent = (props) => {
    return (
        <div className="container mt-5">
            <div className="card custom-card" style={{ width: "16 rem;" }}>
                <img
                    src="https://picsum.photos/300/200"
                    class="card-img-top"
                    alt="image"
                    style={{ height: "200px", width: "200px" }}
                />
                <div className="card-body">
                    <h5 class="card-title">{props.title || "TITLE"}</h5>
                    <p class="card-text">{props.description || "DESCRIPTION"}</p>
                    <a href="#" class="btn custom-btn">
                        Go somewhere
                    </a>
                </div>
            </div>
        </div>
    );
};