import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { providers } from '../data/mockProviders';
import ProviderCard from '../components/ProviderCard';
import CategoryBrowse from '../components/CategoryBrowse';
import RecentReviews from '../components/RecentReviews';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(providers.map(p => p.category))];

    const filteredProviders = providers.filter(provider => {
        const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            provider.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || provider.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <div style={{ backgroundColor: 'var(--bg-input)', padding: '4rem 1rem 3rem', marginBottom: '2rem' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Find Trusted Local Help</h1>
                    <p className="text-lg text-muted" style={{ marginBottom: '2rem' }}>
                        Directly connect with skilled professionals near you. No middlemen, just simple service.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        background: 'white',
                        padding: '0.5rem',
                        borderRadius: 'var(--radius)',
                        boxShadow: 'var(--shadow-md)',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 1rem', minWidth: '200px' }}>
                            <Search size={20} className="text-muted" />
                            <input
                                type="text"
                                placeholder="Search by name or location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    padding: '0.75rem',
                                    width: '100%',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            style={{
                                border: 'none',
                                borderLeft: '1px solid var(--border)',
                                padding: '0 1.5rem',
                                outline: 'none',
                                background: 'transparent',
                                fontWeight: 500,
                                color: 'var(--text-main)',
                                minWidth: '150px'
                            }}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <button className="btn btn-primary" style={{ padding: '0.5rem 2rem' }}>Search</button>
                    </div>
                </div>
            </div>

            <CategoryBrowse />

            <div className="container" style={{ paddingBottom: '4rem' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Available Pros</h2>

                {filteredProviders.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4" style={{
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        {filteredProviders.map(provider => (
                            <ProviderCard key={provider.id} provider={provider} />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                        <p>No providers found matching your criteria.</p>
                    </div>
                )}
            </div>

            <RecentReviews />
        </>
    );
};

export default Home;
