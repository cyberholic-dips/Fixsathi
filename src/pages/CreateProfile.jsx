import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Check } from 'lucide-react';

const CreateProfile = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        location: '',
        price: '',
        experience: '',
        phone: '',
        bio: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const categories = ['Plumber', 'Electrician', 'Cleaner', 'Painter', 'Carpenter', 'Other'];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            alert('Profile Created Successfully! Welcome to Fixsathi.');
            navigate('/');
        }, 1500);
    };

    return (
        <div style={{ padding: '4rem 1rem', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Join as a Service Provider</h1>
                <p className="text-muted">Create your profile and start getting hired directly.</p>
            </div>

            <form onSubmit={handleSubmit} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'grid', gap: '1.5rem' }}>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-sm">Full Name</label>
                        <input
                            required
                            name="name"
                            type="text"
                            placeholder="e.g. Ram Kumar"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', width: '100%' }}
                        />
                    </div>

                    <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-sm">Category</label>
                            <select
                                required
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', width: '100%', background: 'white' }}
                            >
                                <option value="">Select...</option>
                                {categories.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-sm">Phone Number</label>
                            <input
                                required
                                name="phone"
                                type="tel"
                                placeholder="e.g. 9841..."
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', width: '100%' }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-sm">Location</label>
                        <input
                            required
                            name="location"
                            type="text"
                            placeholder="e.g. Kathmandu, Baneshwor"
                            value={formData.location}
                            onChange={handleChange}
                            style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', width: '100%' }}
                        />
                    </div>

                    <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-sm">Pricing (Display)</label>
                            <input
                                required
                                name="price"
                                type="text"
                                placeholder="e.g. Rs. 500 / visit"
                                value={formData.price}
                                onChange={handleChange}
                                style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', width: '100%' }}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-sm">Experience</label>
                            <input
                                required
                                name="experience"
                                type="text"
                                placeholder="e.g. 5 years"
                                value={formData.experience}
                                onChange={handleChange}
                                style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', width: '100%' }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-sm">About You</label>
                        <textarea
                            rows="4"
                            name="bio"
                            placeholder="Tell customers why they should hire you..."
                            value={formData.bio}
                            onChange={handleChange}
                            style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', width: '100%', fontFamily: 'inherit' }}
                        ></textarea>
                    </div>

                    <div style={{ border: '2px dashed var(--border)', padding: '2rem', textAlign: 'center', borderRadius: 'var(--radius)', color: 'var(--text-muted)' }}>
                        <Upload className="mx-auto mb-2" />
                        <p>Upload Profile Photo</p>
                        <p className="text-sm">(Optional for demo)</p>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary"
                        style={{ marginTop: '1rem', width: '100%', padding: '1rem' }}
                    >
                        {isSubmitting ? 'Creating Profile...' : 'Create Profile'}
                    </button>

                </div>
            </form>
        </div>
    );
};

export default CreateProfile;
