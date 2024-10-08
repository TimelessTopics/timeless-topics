import { siteConfig } from '@/lib/constants'
import React from 'react'

const OgElement = ({ title }: { title: string }) => {
    return (
        (
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    letterSpacing: "-.02em",
                    fontWeight: 700,
                    background: "white",
                }}
            >
                <div
                    style={{
                        left: 42,
                        top: 42,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <span
                        style={{
                            width: 60,
                            height: 40,
                            background: "black",
                            color: "white",
                            padding: "1px 2px 1px 2px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        {"<tT />"}
                    </span>
                    <span
                        style={{
                            marginLeft: 8,
                            fontSize: 20,
                        }}
                    >
                        {siteConfig.name}
                    </span>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        padding: "20px 50px",
                        margin: "0 42px",
                        fontSize: 40,
                        width: "auto",
                        maxWidth: 550,
                        textAlign: "center",
                        backgroundColor: "black",
                        color: "white",
                        lineHeight: 1.4,
                        fontWeight: 700,
                        letterSpacing: "-.02em",
                        boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                        borderRadius: 8,
                        overflow: "hidden",
                        textTransform: "capitalize"
                    }}
                >
                    {title}
                </div>
            </div>
        )
    )
}

export default OgElement