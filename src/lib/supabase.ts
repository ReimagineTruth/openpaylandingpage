import { createClient } from '@supabase/supabase-js';

// These environment variables need to be set in your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          date: string;
          author: string;
          category: string;
          desc: string;
          meta: string;
          tags: string[];
          hero: string;
          content: string;
          cta_text: string;
          cta_link: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          date: string;
          author: string;
          category: string;
          desc: string;
          meta: string;
          tags: string[];
          hero: string;
          content: string;
          cta_text: string;
          cta_link: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          date?: string;
          author?: string;
          category?: string;
          desc?: string;
          meta?: string;
          tags?: string[];
          hero?: string;
          content?: string;
          cta_text?: string;
          cta_link?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      site_content: {
        Row: {
          id: string;
          page: string;
          section: string;
          content: any;
          updated_at: string;
        };
        Insert: {
          id?: string;
          page: string;
          section: string;
          content: any;
          updated_at?: string;
        };
        Update: {
          id?: string;
          page?: string;
          section?: string;
          content?: any;
          updated_at?: string;
        };
      };
      users: {
        Row: {
          id: string;
          email: string;
          role: 'admin' | 'user';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          role?: 'admin' | 'user';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          role?: 'admin' | 'user';
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
