"use client";

import React, {useEffect, useRef, useState} from "react";
import {cn} from "@/src/lib/utils";

type MatrixCodeRainProps = {
    color?: string;
    charset?: string;
    fontSize?: number;
    fps?: number;
    opacity?: number;
    fullScreen?: boolean;
    width?: string;
    height?: string;
};

export const Loading = ({
                                   color = "#1FD8A4",
                                   charset = "0123#!$^&456789ABCDEFRLYWDVDIHSICNAO<DF<KVXNA",
                                   fontSize = 16,
                                   fps = 20,
                                   opacity = 0.05,
                                   fullScreen = false,
                                   width = "100%",
                                   height = "400px",
                               }: MatrixCodeRainProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);
    const particlesRef = useRef<number[]>([]);

    const generateRandomColor =()=>{
        const colors =[
            "#2ECC71",
            "#27AE60",
            "#1FD8A4",
            "#F7DC6F",
            "#F5B7B1",
            "#E8DAEF",
            "#85C1E9",
            "#48C9B0",
            "#FAD7A0",
            "#82E0AA",
            "#0B3D91",
            "#A93226",
            "#7D6608",
            "#145A32",
            "#641E16",
            "#D4AC0D",
        ]
        return colors[Math.floor(Math.random()*colors.length)]

    }
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = 0,
            h = 0;
        let lastFrameTime = 0;
        const frameInterval = 1000 / fps;

        const resize = () => {
            const container = canvas.parentElement;
            if (!container) return;

            if (fullScreen) {
                w = canvas.width = window.innerWidth;
                h = canvas.height = window.innerHeight;
            } else {
                w = canvas.width = container.clientWidth;
                h = canvas.height = container.clientHeight;
            }

            particlesRef.current = new Array(Math.ceil(w / fontSize)).fill(0);
        };

        const random = (items: string) =>
            items[Math.floor(Math.random() * items.length)];

        const draw = (timestamp: number) => {
            if (timestamp - lastFrameTime >= frameInterval) {
                ctx.fillStyle = `rgba(0,0,0,${opacity})`;
                ctx.fillRect(0, 0, w, h);
                ctx.fillStyle = generateRandomColor();
                ctx.font = `${fontSize}px monospace`;

                for (let i = 0; i < particlesRef.current.length; i++) {
                    const v = particlesRef.current[i];
                    ctx.fillText(random(charset), i * fontSize, v);
                    particlesRef.current[i] =
                        v >= h || v >= 10000 * Math.random() ? 0 : v + fontSize;
                }

                lastFrameTime = timestamp;
            }

            animationRef.current = requestAnimationFrame(draw);
        };

        const handleResize = () => resize();

        window.addEventListener("resize", handleResize);
        resize();
        animationRef.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [color, charset, fontSize, fps, opacity, fullScreen]);

    return (
        <div
            className={cn("relative overflow-hidden")}
            style={{
                width: fullScreen ? "100vw" : width,
                height: fullScreen ? "100vh" : height,
            }}
        >
            <canvas
                ref={canvasRef}
                className="block"
                style={{
                    position: fullScreen ? "fixed" : "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: fullScreen ? -1 : "auto",
                }}
            />
        </div>
    );
};