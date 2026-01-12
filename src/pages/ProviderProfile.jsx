import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { providers } from '../data/mockProviders';
import { MapPin, Clock, Star, Phone, MessageCircle, ArrowLeft, CheckCircle } from 'lucide-react';

const ProviderProfile = () => {
    const { id } = useParams();
    const provider = providers.find(p => p.id === id);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [rating, setRating] = useState(0);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Your review has been submitted.');
        setShowReviewForm(false);
        setRating(0);
    };

    if (!provider) {
        return (
            <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
                <h2>Provider not found</h2>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Home</Link>
            </div>
        );
    }

    const handleCall = () => {
        window.location.href = `tel:${provider.phone}`;
    };

    const handleWhatsApp = () => {
        // Basic WhatsApp format
        const message = `Hi ${provider.name}, I saw your profile on Fixsathi and would like to hire you.`;
        window.open(`https://wa.me/977${provider.phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div style={{ paddingBottom: '4rem' }}>
            {/* Header / Cover */}
            <div style={{ background: 'var(--secondary)', color: 'white', padding: '3rem 1rem 6rem' }}>
                <div className="container">
                    <Link to="/" style={{ color: 'white', opacity: 0.8, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                        <ArrowLeft size={18} /> Back to Search
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <img
                            src={provider.image}
                            alt={provider.name}
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                border: '4px solid white',
                                objectFit: 'cover'
                            }}
                        />
                        <div>
                            <h1 style={{ marginBottom: '0.5rem' }}>{provider.name}</h1>
                            <p style={{ opacity: 0.9, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{provider.category}</p>
                            <div style={{ display: 'flex', gap: '1.5rem', opacity: 0.9 }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> {provider.location}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /> {provider.experience} Exp.</span>
                            </div>
                        </div>
                        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', justifyContent: 'flex-end', fontSize: '1.25rem', fontWeight: 'bold' }}>
                                {provider.rating} <Star size={20} fill="currentColor" />
                            </div>
                            <p style={{ opacity: 0.8 }}>{provider.reviews} verified reviews</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container" style={{ marginTop: '-3rem' }}>
                <div className="grid grid-cols-3" style={{ gap: '2rem', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)' }}>

                    {/* Left Column: Details & Reviews */}
                    <div className="card" style={{ padding: '2rem', minHeight: '400px', gridColumn: 'span 2' }}>
                        <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>About</h2>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Hi, I am {provider.name}, a professional {provider.category} with over {provider.experience} of experience serving the {provider.location} area.
                            I am dedicated to providing high-quality service at affordable rates. My customers love my punctuality and attention to detail.
                        </p>

                        <h3 style={{ marginBottom: '1rem' }}>Services</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
                            {['Home Repair', 'Maintenance', 'Emergency Service'].map(tag => (
                                <li key={tag} style={{ background: 'var(--bg-input)', padding: '0.5rem 1rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle size={16} color="var(--primary)" /> {tag}
                                </li>
                            ))}
                        </ul>

                        <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Customer Reviews</h2>
                        <div style={{ padding: '2rem', background: 'var(--bg-input)', borderRadius: 'var(--radius)' }}>
                            {!showReviewForm ? (
                                <div style={{ textAlign: 'center' }}>
                                    <p className="text-muted" style={{ marginBottom: '1rem' }}>Have you hired {provider.name}? Share your experience.</p>
                                    <button onClick={() => setShowReviewForm(true)} className="btn btn-outline" style={{ background: 'white' }}>Write a Review</button>
                                </div>
                            ) : (
                                <form onSubmit={handleReviewSubmit} style={{ textAlign: 'left' }}>
                                    <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Write a Review</h3>

                                    <div style={{ marginBottom: '1rem' }}>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Rating</label>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setRating(star)}
                                                    style={{ color: star <= rating ? 'var(--accent)' : '#cbd5e1', padding: 0 }}
                                                >
                                                    <Star size={24} fill="currentColor" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: '1rem' }}>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Comment</label>
                                        <textarea
                                            required
                                            rows="3"
                                            placeholder="Was the service good?"
                                            style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}
                                        ></textarea>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Post Review</button>
                                        <button type="button" onClick={() => setShowReviewForm(false)} className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Cancel</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Key Info & Actions */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="card" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Starting Price</h3>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                                {provider.price}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <button onClick={handleCall} className="btn btn-primary" style={{ width: '100%', fontSize: '1.125rem' }}>
                                    <Phone size={20} /> Call Now
                                </button>
                                <button onClick={handleWhatsApp} className="btn" style={{ width: '100%', border: '1px solid #25D366', color: '#25D366', background: '#f0fdf4' }}>
                                    <MessageCircle size={20} /> WhatsApp
                                </button>
                            </div>

                            <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                                Direct contact. No hidden fees.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProviderProfile;
