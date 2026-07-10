import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminUser {
  email: string;
  role: 'admin' | 'user';
}

interface AdminAuthContextType {
  admin: AdminUser | null;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored admin session
    const storedAdmin = localStorage.getItem('admin_user');
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // For now, use environment variables for admin credentials
    // In production, this should use Supabase auth
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'admin@openpy.space';
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

    if (email === adminEmail && password === adminPassword) {
      const adminUser: AdminUser = {
        email,
        role: 'admin'
      };
      setAdmin(adminUser);
      localStorage.setItem('admin_user', JSON.stringify(adminUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem('admin_user');
  };

  return (
    <AdminAuthContext.Provider
      value={{
        admin,
        isAdmin: admin?.role === 'admin',
        login,
        logout,
        loading
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};
