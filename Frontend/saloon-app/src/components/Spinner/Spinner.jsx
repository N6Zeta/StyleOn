import React from "react";

export default function spinner() {
    return (
        <>
            <div className="spinner f-d f-h-c f-v-c">loading</div>
            <style jsx={true}>
                {`
                    .spinner {
                        height: 60vh;
                    }
                    .spinner .ant-spin-dot {
                        font-size: 50px;
                    }
                `}
            </style>
        </>
    );
}
