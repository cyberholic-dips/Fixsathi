import React from 'react';
import { Search, UserCheck, Wrench, Settings } from 'lucide-react';

const steps = [
    {
        title: 'Search',
        description: 'Detail what you need and find skilled pros in your neighborhood.',
        icon: Search,
        color: '#6366f1',
        visual: (
            <div style={{ position: 'relative', width: '120px', height: '120px' }}>
                <div style={{
                    width: '100px',
                    height: '60px',
                    background: 'white',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '10px'
                }}>
                    <div style={{ width: '40px', height: '8px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '8px' }} />
                    <div style={{ width: '60px', height: '8px', background: '#f1f5f9', borderRadius: '4px' }} />
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '0',
                    width: '110px',
                    height: '50px',
                    background: '#1e293b',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 10px',
                    gap: '8px'
                }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#6366f120', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Search size={14} />
                    </div>
                    <div style={{ width: '50px', height: '8px', background: 'white', opacity: 0.2, borderRadius: '4px' }} />
                </div>
            </div>
        )
    },
    {
        title: 'Select',
        description: 'Read reviews, check ratings, and choose the pro that fits your needs.',
        icon: UserCheck,
        color: '#10b981',
        visual: (
            <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Crowd of People */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', opacity: 0.3 }}>
                    {[...Array(12)].map((_, i) => (
                        <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#1e293b' }} />
                    ))}
                </div>

                {/* Magnifying Glass & Highlighted Pro */}
                <div style={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '3px solid #6366f1',
                    background: 'rgba(99, 102, 241, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(99, 102, 241, 0.2)',
                    zIndex: 2
                }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#6366f1', boxShadow: '0 0 10px #6366f1' }} />
                </div>
                {/* Handle of Magnifying Glass */}
                <div style={{
                    position: 'absolute',
                    width: '30px',
                    height: '4px',
                    background: '#6366f1',
                    borderRadius: '2px',
                    bottom: '25px',
                    right: '20px',
                    transform: 'rotate(45deg)',
                    zIndex: 1
                }} />
            </div>
        )
    },
    {
        title: 'Get Help',
        description: 'Connect directly and get your task completed with ease and trust.',
        icon: Wrench,
        color: '#f59e0b',
        visual: (
            <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Gear behind */}
                <div style={{
                    position: 'absolute',
                    color: '#e2e8f0',
                    animation: 'spin 10s linear infinite'
                }}>
                    <Settings size={80} strokeWidth={1.5} />
                </div>
                {/* Tools crossing */}
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ transform: 'rotate(-15deg)', color: '#1e293b', background: 'white', padding: '12px', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
                        <Wrench size={40} strokeWidth={2.5} />
                    </div>
                </div>
            </div>
        )
    }
];

const HowItWorks = () => {
    return (
        <section style={{ padding: '4rem 1rem', position: 'relative', overflow: 'hidden', background: '#f8fafc' }}>
            {/* Header */}
            <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem' }}>
                    How it works
                </h2>
                <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
                    Finding trusted help should be simple. We've streamlined the entire process for you.
                </p>
            </div>

            <div className="container" style={{ position: 'relative' }}>
                {/* SVG Connecting Path */}
                <svg
                    viewBox="0 0 1000 300"
                    preserveAspectRatio="none"
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '50px',
                        width: 'calc(100% - 100px)',
                        height: '150px',
                        zIndex: 0,
                        display: 'block'
                    }}
                >
                    <path
                        d="M 50 100 Q 250 10 500 100 T 950 100"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="2"
                        strokeDasharray="8,8"
                    />
                </svg>

                {/* Steps Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    position: 'relative',
                    zIndex: 1
                }}>
                    {steps.map((step, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            {/* Visual Representation */}
                            <div style={{
                                height: '160px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                                className="step-visual"
                            >
                                {step.visual}
                            </div>

                            {/* Content */}
                            <div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 800,
                                    color: '#1e293b',
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem'
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    color: '#64748b',
                                    lineHeight: '1.7',
                                    maxWidth: '260px',
                                    margin: '0 auto'
                                }}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .step-visual:hover {
                    transform: translateY(-20px) scale(1.05);
                }
                
                @media (max-width: 991px) {
                    svg {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default HowItWorks;
