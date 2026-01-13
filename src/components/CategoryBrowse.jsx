import React from 'react';
import {
    Car,
    Home,
    Dog,
    Briefcase,
    Heart,
    Monitor,
    Sparkles,
    Hammer,
    GraduationCap
} from 'lucide-react';

const categories = [
    { name: 'Automobile', icon: Car },
    { name: 'Home Repairs', icon: Home },
    { name: 'Pet Care', icon: Dog },
    { name: 'Professional Services', icon: Briefcase },
    { name: 'Health & Wellness', icon: Heart },
    { name: 'Tech and Digital Services', icon: Monitor },
    { name: 'Personal Service', icon: Sparkles },
    { name: 'Home Improvement', icon: Hammer },
    { name: 'Professional Trainings', icon: GraduationCap },
];

const CategoryBrowse = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem 4rem' }}>
            <h2 style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                marginBottom: '2.5rem',
                color: 'var(--text-main)',
                textAlign: 'left'
            }}>
                Browse by Category
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                gap: '2rem',
                justifyItems: 'center'
            }}>
                {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <div
                            key={category.name}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                cursor: 'pointer',
                                transition: 'transform 0.2sease',
                                textAlign: 'center'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '16px',
                                background: 'white',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                                color: 'var(--primary)'
                            }}>
                                <Icon size={32} strokeWidth={1.5} />
                            </div>
                            <span style={{
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                color: 'var(--text-main)',
                                maxWidth: '120px',
                                lineHeight: '1.2'
                            }}>
                                {category.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryBrowse;
