import * as React from "react"
import { Frame, useCycle } from "framer"
import { data } from "./Warmup"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function AnimationSpring() {
    let variants = {
        show: {
            x: 100,
            background: "white",
        },
        hide: {
            x: 0,
            background: "white",
        },
    }
    console.log(data.state)
    return (
        <Frame
            style={style}
            animate={data.state == "countdown" ? "show" : "hide"}
            variants={variants}
            size={150}
            radius={30}
        >
            This is inter
        </Frame>
    )
}

const style = {
    fontFamily: "jacky",
    fontSize: 40,
}
