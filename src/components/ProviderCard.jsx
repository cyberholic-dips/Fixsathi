import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock } from 'lucide-react';

const ProviderCard = ({ provider, onBook }) => {
    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
            <Link to={`/provider/${provider.id}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img
                        src={provider.image}
                        alt={provider.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        background: 'var(--primary)',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        {provider.category}
                    </div>
                </div>
            </Link>

            <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <Link to={`/provider/${provider.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h3 className="text-lg font-bold" style={{ margin: 0, color: 'var(--text-main)' }}>{provider.name}</h3>
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
                        <span className="text-sm font-bold" style={{ color: 'var(--text-main)' }}>{provider.rating}</span>
                        <span className="text-sm text-muted">({provider.reviews})</span>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        <MapPin size={16} color="var(--primary)" />
                        <span>{provider.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        <Clock size={16} color="var(--primary)" />
                        <span>{provider.experience} experience</span>
                    </div>
                </div>

                <div style={{
                    marginTop: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border)'
                }}>
                    <span className="font-bold" style={{ color: 'var(--primary)', fontSize: '1.125rem' }}>{provider.price}</span>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onBook();
                        }}
                        className="btn btn-primary"
                        style={{
                            padding: '0.5rem 1rem',
                            fontSize: '0.875rem',
                            boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.2)'
                        }}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProviderCard;
