import React from "react";

type CustomAngleTickProps = {
    x: number;
    y: number;
    cx: number;
    cy: number;
    payload: any;
    textAnchor: string;
};

const CustomAngleTick = (props: any) => {
    const { x, y, payload, textAnchor, cx, cy } = props;
    const offsetX = (x - cx) * 1.05;
    const offsetY = (y - cy) * 1.1;

    return (
        <text x={cx + offsetX} y={cy + offsetY} textAnchor={textAnchor} fill="#333" fontSize={14}>
            {payload.value}
        </text>
    );
};

export default CustomAngleTick;
