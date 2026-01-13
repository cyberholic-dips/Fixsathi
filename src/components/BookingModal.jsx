import React, { useState } from 'react';
import { X, Calendar, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, provider }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        message: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
        }, 3000);
    };

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
        }}>
            <div className="fade-in" style={{
                background: 'white',
                width: '100%',
                maxWidth: '500px',
                borderRadius: '24px',
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        color: 'var(--text-muted)',
                        padding: '0.5rem',
                        borderRadius: '12px',
                        background: 'var(--bg-main)'
                    }}
                >
                    <X size={20} />
                </button>

                {!isSubmitted ? (
                    <>
                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                                Book {provider.name}
                            </h2>
                            <p style={{ color: 'var(--text-muted)' }}>
                                {provider.category} • {provider.price}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>Your Name</label>
                                <input
                                    required
                                    type="text"
                                    className="bg-input"
                                    placeholder="Enter your full name"
                                    style={{
                                        padding: '0.875rem 1rem',
                                        borderRadius: '12px',
                                        border: '1px solid var(--border)',
                                        background: 'var(--bg-main)',
                                        outline: 'none',
                                        fontSize: '1rem'
                                    }}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>Phone Number</label>
                                    <div style={{ position: 'relative' }}>
                                        <Phone size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                        <input
                                            required
                                            type="tel"
                                            placeholder="98XXXXXXXX"
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem 1rem 0.875rem 2.75rem',
                                                borderRadius: '12px',
                                                border: '1px solid var(--border)',
                                                background: 'var(--bg-main)',
                                                outline: 'none',
                                                fontSize: '1rem'
                                            }}
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>Service Date</label>
                                    <div style={{ position: 'relative' }}>
                                        <Calendar size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                        <input
                                            required
                                            type="date"
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem 1rem 0.875rem 2.75rem',
                                                borderRadius: '12px',
                                                border: '1px solid var(--border)',
                                                background: 'var(--bg-main)',
                                                outline: 'none',
                                                fontSize: '1rem'
                                            }}
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>Task Details</label>
                                <div style={{ position: 'relative' }}>
                                    <MessageSquare size={18} style={{ position: 'absolute', left: '1rem', top: '1rem', color: 'var(--text-muted)' }} />
                                    <textarea
                                        required
                                        placeholder="Describe what help you need..."
                                        rows="3"
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem 0.875rem 2.75rem',
                                            borderRadius: '12px',
                                            border: '1px solid var(--border)',
                                            background: 'var(--bg-main)',
                                            outline: 'none',
                                            fontSize: '1rem',
                                            resize: 'none',
                                            fontFamily: 'inherit'
                                        }}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    marginTop: '0.5rem',
                                    padding: '1rem',
                                    fontSize: '1rem',
                                    gap: '0.75rem',
                                    boxShadow: 'var(--shadow-indigo)'
                                }}
                            >
                                <Send size={18} />
                                Confirm Booking
                            </button>
                        </form>
                    </>
                ) : (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'var(--success)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            animation: 'bounce 1s infinite'
                        }}>
                            <CheckCircle2 size={48} />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                            Booking Sent!
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            {provider.name} will contact you shortly on {formData.phone} to confirm the details.
                        </p>
                    </div>
                )}
            </div>
            <style>{`
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
        </div>
    );
};

export default BookingModal;
