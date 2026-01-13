import React from 'react';
import { Star, Quote } from 'lucide-react';
import { recentReviews } from '../data/mockProviders';

const RecentReviews = () => {
    return (
        <section style={{ backgroundColor: '#f8fafc', padding: '4rem 1rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>
                        What Our Customers Say
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                        Real feedback from people who found the help they needed on Fixsathi.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {recentReviews.map((review) => (
                        <div
                            key={review.id}
                            style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: '20px',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem',
                                position: 'relative',
                                border: '1px solid #f1f5f9'
                            }}
                        >
                            <Quote
                                size={40}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1.5rem',
                                    color: '#f1f5f9',
                                    zIndex: 0
                                }}
                            />

                            <div style={{ display: 'flex', gap: '0.25rem', color: '#fbbf24', position: 'relative', zIndex: 1 }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill={i < review.rating ? "#fbbf24" : "none"}
                                        stroke={i < review.rating ? "#fbbf24" : "#d1d5db"}
                                    />
                                ))}
                            </div>

                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--text-main)',
                                fontStyle: 'italic',
                                lineHeight: '1.6',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                "{review.comment}"
                            </p>

                            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem', marginTop: 'auto' }}>
                                <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                                    {review.userName}
                                </div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                    Reviewed <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{review.providerName}</span> ({review.providerCategory})
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                                    {review.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentReviews;
