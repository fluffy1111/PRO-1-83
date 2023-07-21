import *as React from 'react';
import {Image, View} from 'react-native';

const filterWidth = faceWidth
const filterHeight = faceHeight

const Filter2 = ({
    face: {
        bounds: {
            size: { width: faceWidth, height: faceHeight }
        },
        leftEyePosition,
        rightEyePosition,
        noseBasePosition
    }
}) => {
    const transformAngle = (
        angleRed = Math.atan(
            (rightEyePosition.y - leftEyePosition.y) /
                (rightEyePosition.x - leftEyePosition.x)
        )
    ) => (angleRed * 180) /Math.PI;
    render(
        <Image source={require("../assets/crown-pic2.png")}
        style={{
            width: filterWidth,
            height: filterHeight,
            resizeMode: "contain",
            transform: [{ rotate: `${transformAngle()}deg`}]
        }}/>
    )
}

export default Filter2