import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock } from 'lucide-react';

const ProviderCard = ({ provider }) => {
    return (
        <Link to={`/provider/${provider.id}`} className="card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                    src={provider.image}
                    alt={provider.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'var(--bg-card)',
                    padding: '4px 8px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    boxShadow: 'var(--shadow-sm)'
                }}>
                    {provider.category}
                </div>
            </div>

            <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 className="text-lg font-bold" style={{ margin: 0 }}>{provider.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent)' }}>
                        <Star size={16} fill="currentColor" />
                        <span className="text-sm font-bold" style={{ color: 'var(--text-main)' }}>{provider.rating}</span>
                        <span className="text-sm text-muted">({provider.reviews})</span>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        <MapPin size={16} />
                        <span>{provider.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        <Clock size={16} />
                        <span>{provider.experience} exp</span>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                    <span className="font-bold text-primary">{provider.price}</span>
                    <span className="text-sm text-muted" style={{ fontWeight: 500 }}>View Profile &rarr;</span>
                </div>
            </div>
        </Link>
    );
};

export default ProviderCard;
