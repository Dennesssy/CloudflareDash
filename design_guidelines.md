# Cloudflare Dashboard - Design Guidelines

## Design Approach
**Reference-Based**: Inspired by Cloudflare's own dashboard and Vercel's clean admin interface - professional, developer-focused design with emphasis on data clarity and efficient workflows.

## Core Design Principles
- **Utility-First**: Prioritize information density and functional efficiency over decorative elements
- **Data Clarity**: Clear hierarchy for metrics, tables, and status indicators
- **Professional Polish**: Clean, modern developer aesthetics with precise spacing and typography

## Typography System
**Font Families**: 
- Primary: Inter (via Google Fonts CDN)
- Fallback: SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui

**Type Scale**:
- Headings: 24px (bold), 20px (semibold), 16px (semibold)
- Body: 14px (regular), 13px (medium for labels)
- Captions/Metadata: 12px, 11px (secondary info)
- Monospace (for code/DNS records): 13px Monaco/Menlo

## Layout System
**Spacing Units**: Consistent 20px base unit
- Section padding: py-20, px-16
- Card padding: p-16
- Grid gaps: gap-16
- Element spacing: 8px, 12px, 16px, 20px, 24px

**Layout Structure**:
- Sidebar navigation: 220px fixed width
- Card-based dashboard grid: Auto-fill columns (min 280px)
- Data tables: Full-width responsive containers
- Two-column splits for detail views: 280px list + flexible content pane

## Component Library

**Navigation**:
- Sidebar with icon + text nav items
- Section headers with uppercase labels (9px, letter-spacing 0.06em)
- Active state: Blue highlight with subtle background
- Topbar for global actions and theme toggle

**Cards**:
- Rounded corners (10px border-radius)
- Subtle borders with hover lift (translateY -2px)
- Header with title + status pill
- Metric displays with large bold numbers (28px)
- Progress bars for usage indicators

**Data Tables**:
- Compact rows with 10px font size
- Alternating row backgrounds (subtle)
- Sortable headers with icons
- Action buttons (edit, delete) on row hover
- Status indicators (colored dots/pills)

**Forms**:
- Input fields: 14px text, 40px height
- Labels: 12px semibold, 6px margin-bottom
- Buttons: 40px height, 12px font, rounded 6px
- Form groups: 16px vertical spacing

**Status Indicators**:
- Pills: 9px uppercase, bold, rounded-full
- Colored dots: 8px circle for connection status
- Success (green), Warning (orange), Error (red), Info (blue)

**Buttons**:
- Primary: Cloudflare blue background, white text
- Secondary: Transparent with blue border
- Small actions: 28px height, 11px font
- Icon buttons: 32px square, centered icon

## Dashboard-Specific Components

**Domain Cards**:
- Domain name as title
- Status pill (Active/Paused/Error)
- Quick metrics (DNS records count, last sync)
- Hover reveals action buttons

**DNS Record Table**:
- Columns: Type, Name, Content, TTL, Proxy Status, Actions
- Monospace font for technical values
- Color-coded record types
- Inline editing capability

**Analytics Charts**:
- Minimalist line charts for request trends
- Bar charts for bandwidth by country
- Card-based metric displays for totals
- Time period selector (24h, 7d, 30d)

## Responsive Behavior
- Desktop (1024px+): Full sidebar + multi-column grids
- Tablet (768px): Collapsible sidebar, 2-column grids
- Mobile (<768px): Hidden sidebar (hamburger), single-column stacked layout

## Authentication Flow
- Clean login card: centered, max-width 400px
- API token input field with visibility toggle
- Connection status feedback
- "Remember me" option with secure storage indicator

## Images
No hero images or marketing imagery - this is a utility dashboard. Use:
- Cloudflare logo in sidebar header (SVG, 24px height)
- Empty state illustrations (simple line art) for no domains/no data states
- Icons from Font Awesome 6.4.0 (CDN) for all UI icons