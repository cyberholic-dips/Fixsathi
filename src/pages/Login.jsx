import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { Mail, Lock, LogIn, AlertCircle } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/provider-dashboard";

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (login(email, password)) {
            navigate(from, { replace: true });
        } else {
            setError('Invalid email or password. Hint: test@gmail.com / 123456');
        }
    };

    return (
        <div className="container" style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1rem'
        }}>
            <div className="fade-in" style={{
                background: 'white',
                width: '100%',
                maxWidth: '420px',
                padding: '2.5rem',
                borderRadius: '24px',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem'
                    }}>
                        <LogIn size={32} />
                    </div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                        Provider Login
                    </h1>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Access your Fixsathi dashboard
                    </p>
                </div>

                {error && (
                    <div style={{
                        background: '#fef2f2',
                        color: '#991b1b',
                        padding: '1rem',
                        borderRadius: '12px',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontSize: '0.875rem',
                        border: '1px solid #fee2e2'
                    }}>
                        <AlertCircle size={18} />
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                required
                                type="email"
                                placeholder="test@gmail.com"
                                style={{
                                    width: '100%',
                                    padding: '0.875rem 1rem 0.875rem 2.75rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border)',
                                    background: 'var(--bg-main)',
                                    outline: 'none',
                                    fontSize: '1rem'
                                }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                required
                                type="password"
                                placeholder="••••••"
                                style={{
                                    width: '100%',
                                    padding: '0.875rem 1rem 0.875rem 2.75rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border)',
                                    background: 'var(--bg-main)',
                                    outline: 'none',
                                    fontSize: '1rem'
                                }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
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
                        Login to Portal
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                        Credentials: <strong>test@gmail.com / 123456</strong>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
