# Dynamic Dashboard

This is a simple Next.js dashboard application with authentication and data fetching. Users can log in, and after successful authentication, they are redirected to the dashboard. The authentication system uses a **mock JWT token** that is stored in `localStorage`. The dashboard fetches posts from `https://jsonplaceholder.typicode.com/posts` and includes **search** and **pagination** features. If a user is not authenticated, they will be redirected to the login page.

## Features
- User authentication with a **mock JWT token**
- Redirect to the **dashboard** after login
- Fetches and displays posts from **JSONPlaceholder API**
- **Search** functionality to filter posts
- **Pagination** for better data navigation
- Redirects to the **login page** if the token is missing

## Tech Stack
- **Next.js** (React framework)
- **Tailwind CSS** (Styling)
- **JSONPlaceholder API** (Mock data)
- **LocalStorage** (Token management)

## Installation & Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js** (>= 16.x)
- **npm** or **yarn**

### Clone the Repository
```bash
git clone https://github.com/your-username/project-name.git
cd project-name
npm run dev
