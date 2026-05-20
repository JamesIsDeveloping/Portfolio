import React, { useState, useEffect, useRef } from 'react';

const olive = '#7C8C45';
const oliveDim = '#5a6632';
const NAME = 'James Satherley';

const UnderConstruction: React.FC = () => {
    const [nameActive, setNameActive] = useState(false);
    const [cursorBig, setCursorBig] = useState(false);
    const animatingIn = useRef(false);
    const pendingExit = useRef(false);
    const animTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const ANIM_MS = ((NAME.length - 1) * 0.018 + 0.25) * 1000 + 20;

    const handleNameEnter = () => {
        setCursorBig(true);
        pendingExit.current = false;
        if (animTimer.current) clearTimeout(animTimer.current);
        animatingIn.current = true;
        setNameActive(true);
        animTimer.current = setTimeout(() => {
            animatingIn.current = false;
            if (pendingExit.current) {
                animTimer.current = setTimeout(() => setNameActive(false), 500);
            }
        }, ANIM_MS);
    };

    const handleNameLeave = () => {
        setCursorBig(false);
        if (animatingIn.current) {
            pendingExit.current = true;
        } else {
            setNameActive(false);
        }
    };
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
                cursorRef.current.style.opacity = '0.75';
            }
        };
        const hide = () => {
            if (cursorRef.current) cursorRef.current.style.opacity = '0';
        };
        window.addEventListener('mousemove', move);
        document.addEventListener('mouseleave', hide);
        return () => {
            window.removeEventListener('mousemove', move);
            document.removeEventListener('mouseleave', hide);
        };
    }, []);

    return (
        <>
            <style>{`
                * { cursor: none !important; }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0);    }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.5; }
                    50%       { opacity: 1;   }
                }
            `}</style>

            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: cursorBig ? '52px' : '32px',
                    height: cursorBig ? '52px' : '32px',
                    marginLeft: cursorBig ? '-10px' : '0',
                    marginTop: cursorBig ? '-10px' : '0',
                    border: `1.5px solid ${olive}`,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    opacity: 0,
                    transform: 'translate(-100px, -100px)',
                    transition:
                        'width 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), height 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), margin 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s',
                }}
            />

            <div
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#111210',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Segoe UI', system-ui, sans-serif",
                    color: '#c9cbc2',
                    padding: '2rem',
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        maxWidth: '520px',
                        width: '100%',
                        animation: 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    }}
                >
                    <h1
                        onMouseEnter={handleNameEnter}
                        onMouseLeave={handleNameLeave}
                        style={{
                            fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
                            fontWeight: 300,
                            margin: '0 0 0.25rem',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1,
                            userSelect: 'none',
                        }}
                    >
                        {NAME.split('').map((char, i) => (
                            <span
                                key={i}
                                style={{
                                    display: 'inline-block',
                                    color: nameActive ? olive : '#e8eae0',
                                    transform: nameActive ? 'translateY(-4px)' : 'translateY(0)',
                                    transition: `color 0.25s ease ${i * 0.018}s, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.018}s`,
                                    whiteSpace: char === ' ' ? 'pre' : 'normal',
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>

                    <div
                        style={{
                            width: '80px',
                            height: '1.5px',
                            backgroundColor: oliveDim,
                            margin: '2.5rem auto',
                            animation: 'pulse 3s ease-in-out infinite',
                        }}
                    />

                    <a
                        href="mailto:james@satherley.org?subject=Hey!"
                        onMouseEnter={() => setCursorBig(true)}
                        onMouseLeave={() => setCursorBig(false)}
                        style={{
                            display: 'inline-block',
                            padding: '0.6rem 1.5rem',
                            border: `1px solid ${oliveDim}`,
                            borderRadius: '6px',
                            color: olive,
                            textDecoration: 'none',
                            fontSize: '1.1rem',
                            letterSpacing: '0.05em',
                            transition: 'border-color 0.25s, color 0.25s, box-shadow 0.25s',
                        }}
                        onMouseOver={(e) => {
                            const el = e.currentTarget as HTMLAnchorElement;
                            el.style.borderColor = olive;
                            el.style.color = '#a0b05a';
                            el.style.boxShadow = `0 0 16px 0 ${olive}55`;
                        }}
                        onMouseOut={(e) => {
                            const el = e.currentTarget as HTMLAnchorElement;
                            el.style.borderColor = oliveDim;
                            el.style.color = olive;
                            el.style.boxShadow = 'none';
                        }}
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </>
    );
};

export default UnderConstruction;
