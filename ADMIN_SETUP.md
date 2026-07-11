# OpenPay Admin System Setup Guide

This guide will help you set up the complete admin system for managing your OpenPay website.

## Features

- **Admin Dashboard**: Overview of site statistics and recent activity
- **Blog Management**: Create, edit, and delete blog posts with full control
- **Content Management**: Update website content across all pages
- **User Management**: Manage users and admin permissions
- **Authentication**: Secure admin login with email/password

## Prerequisites

1. **Supabase Account**: Create a free account at [supabase.com](https://supabase.com)
2. **Node.js**: Ensure Node.js is installed on your system

## Setup Instructions

### 1. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for your project to be ready (usually 2-3 minutes)
3. Go to Project Settings → API
4. Copy your Project URL and Anon Key

### 2. Configure Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit `.env` and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
VITE_ADMIN_EMAIL=admin@openpy.space
VITE_ADMIN_PASSWORD=your-secure-password
```

### 3. Set Up Database Schema

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy the contents of `supabase-schema.sql`
4. Paste and run the SQL script

This will create:
- `blog_posts` table for blog content
- `site_content` table for website content
- `users` table for admin management
- Necessary indexes and security policies

### 4. Install Dependencies

Dependencies are already installed, but if you need to reinstall:
```bash
npm install @supabase/supabase-js
```

### 5. Run the Application

```bash
npm run dev
```

## Accessing the Admin Panel

1. Navigate to `http://localhost:5173/admin/login`
2. Login with your admin credentials (default: `admin@openpy.space` / `admin123`)
3. You'll be redirected to the admin dashboard

## Admin Panel Features

### Dashboard
- Overview of site statistics
- Quick actions for common tasks
- Recent activity feed

### Blog Management
- **View all posts**: See all blog posts with filtering and search
- **Create new post**: Full-featured blog post editor with:
  - Title and slug management
  - Category selection
  - Meta description for SEO
  - Hero copy
  - Tags management
  - Markdown content editor
  - Call-to-action configuration
  - Live preview
- **Edit post**: Modify existing posts
- **Delete post**: Remove posts with confirmation

### Content Management
- Manage content for different pages:
  - Homepage (hero section, features)
  - About page
  - Features section
  - Pricing section
- Edit text content and CTAs
- Save changes instantly

### User Management
- View all registered users
- Filter by role (admin/user)
- Search users by email
- Change user roles
- Delete users
- View user statistics

## Security Features

- **Protected Routes**: All admin routes require authentication
- **Role-Based Access**: Only admins can access the panel
- **Secure Session**: Admin sessions stored in localStorage
- **Supabase RLS**: Row Level Security for database protection

## Default Credentials

⚠️ **Important**: Change the default credentials in production!

- Email: `admin@openpy.space`
- Password: `admin123`

To change credentials, update the `.env` file:
```env
VITE_ADMIN_EMAIL=your-admin-email
VITE_ADMIN_PASSWORD=your-secure-password
```

## Customization

### Adding New Admin Pages

1. Create a new component in `src/pages/admin/`
2. Add the route in `src/App.tsx` under the admin routes
3. Add navigation link in `src/components/AdminLayout.tsx`

### Modifying Blog Post Schema

1. Update the TypeScript interface in `src/lib/supabase.ts`
2. Update the database schema in `supabase-schema.sql`
3. Update the form fields in `src/pages/admin/AdminBlogEditor.tsx`

### Adding Content Sections

1. Add the section to the `sections` array in `src/pages/admin/AdminContent.tsx`
2. Add the content configuration to `contentSections` object
3. Define the fields for the section

## Troubleshooting

### Supabase Connection Issues
- Verify your `.env` file has correct credentials
- Check that your Supabase project is active
- Ensure the database schema has been set up

### Admin Login Not Working
- Verify credentials match `.env` file
- Clear browser localStorage
- Check browser console for errors

### Build Errors
- Ensure all dependencies are installed
- Check TypeScript errors in IDE
- Verify Supabase types are correct

## Production Deployment

1. Set environment variables in your hosting platform
2. Update admin credentials to secure values
3. Enable Supabase production mode
4. Test all admin functionality before going live
5. Set up database backups in Supabase

## Database Backup

Regular backups are essential. In Supabase:
1. Go to Database → Backups
2. Enable automatic backups
3. Create manual backups before major changes

## Support

For issues or questions:
- Check Supabase documentation: https://supabase.com/docs
- Review the code comments in the admin components
- Test features in development before production

## Next Steps

1. Replace mock data with real Supabase queries
2. Implement file upload for blog images
3. Add analytics integration
4. Set up email notifications for admin actions
5. Create admin activity logging
6. Add more granular permissions
7. Implement content versioning
