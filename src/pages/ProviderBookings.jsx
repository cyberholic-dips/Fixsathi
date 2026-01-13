import React from 'react';
import { Calendar, Inbox, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProviderBookings = () => {
    return (
        <div className="container" style={{ padding: '3rem 1rem' }}>
            <Link to="/provider-dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '2rem', fontWeight: 600 }}>
                <ArrowLeft size={18} />
                Back to Dashboard
            </Link>

            <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                    Your Bookings
                </h1>
                <p style={{ color: 'var(--text-muted)' }}>
                    Track and manage your incoming service requests.
                </p>
            </div>

            <div style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '24px',
                border: '1px dashed var(--border)',
            }}>
                <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: 'var(--bg-main)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'var(--primary)'
                }}>
                    <Inbox size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    No Active Bookings
                </h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto' }}>
                    When customers book your services, they will appear here for you to confirm and manage.
                </p>
            </div>
        </div>
    );
};

export default ProviderBookings;
