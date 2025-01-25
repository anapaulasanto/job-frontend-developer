import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckIncognito = () => {
    const [isAnonymous, setIsAnonymous] = useState(null);
    const navigate = useNavigate();

    const isIncognito = async () => {
        try {
            const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
            return new Promise((resolve) => {
                fs(
                    window.TEMPORARY,
                    100,
                    () => resolve(false),
                    () => resolve(true)
                );
            });
        } catch (error) {
            console.error("Nao detectou:", error);
            return false;
        }
    };

    useEffect(() => {
        const checkMode = async () => {
            const result = await isIncognito();
            setIsAnonymous(result);
        };

        checkMode();
    }, []);

    return (
        <div>
            {isAnonymous === true && (
                navigate('/block', {state: 'Parece que você está usando guia anônima.'})
            )}
        </div>
    );
};

export default CheckIncognito;
