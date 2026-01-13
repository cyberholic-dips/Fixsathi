import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { LayoutDashboard, Star, Calendar, UserCircle, Settings, ChevronRight } from 'lucide-react';

const ProviderDashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const stats = [
        { label: 'Total Bookings', value: '48', icon: Calendar, color: '#6366f1' },
        { label: 'Average Rating', value: '4.8', icon: Star, color: '#f59e0b' },
        { label: 'Profile Views', value: '1,204', icon: UserCircle, color: '#10b981' },
    ];

    const actions = [
        { title: 'Manage Bookings', desc: 'View and respond to service requests', link: '/provider/bookings', icon: Calendar },
        { title: 'Customer Reviews', desc: 'See what customers are saying about you', link: '/provider/ratings', icon: Star },
        { title: 'Edit Profile', desc: 'Update your services and availability', link: '/join', icon: Settings },
    ];

    return (
        <div className="container" style={{ padding: '3rem 1rem' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginBottom: '3rem'
            }}>
                <div>
                    <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                        Welcome Back, Ramesh!
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
                        Manage your services and grow your trust with Fixsathi.
                    </p>
                </div>
                <button
                    onClick={handleLogout}
                    className="btn btn-outline"
                    style={{
                        borderColor: '#fee2e2',
                        color: '#991b1b',
                        padding: '0.5rem 1.25rem'
                    }}
                >
                    Logout
                </button>
            </div>

            {/* Stats Overview */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
                marginBottom: '3rem'
            }}>
                {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx} className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '16px',
                                backgroundColor: `${stat.color}10`,
                                color: stat.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Icon size={28} />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>{stat.label}</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{stat.value}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Quick Actions */}
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Quick Actions</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem'
            }}>
                {actions.map((action, idx) => {
                    const Icon = action.icon;
                    return (
                        <Link
                            key={idx}
                            to={action.link}
                            className="card"
                            style={{
                                padding: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                transition: 'transform 0.2s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                backgroundColor: 'var(--bg-main)',
                                color: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Icon size={24} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>{action.title}</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{action.desc}</div>
                            </div>
                            <ChevronRight size={20} color="var(--text-light)" />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ProviderDashboard;
