import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Simple persistence with localStorage
        const savedUser = localStorage.getItem('fixsathi_user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (email, password) => {
        // Using specified test credentials
        if (email === 'test@gmail.com' && password === '123456') {
            const userData = { email, role: 'provider', name: 'Ramesh Sharma' };
            setUser(userData);
            localStorage.setItem('fixsathi_user', JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('fixsathi_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
