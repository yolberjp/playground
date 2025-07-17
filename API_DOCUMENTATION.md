# API Documentation

## Table of Contents

1. [Overview](#overview)
2. [Core Components](#core-components)
3. [Feature Components](#feature-components)
4. [Utility Functions](#utility-functions)
5. [Data Types](#data-types)
6. [Usage Examples](#usage-examples)

## Overview

This is a Next.js 15 playground application built with TypeScript, React 19, and Tailwind CSS. The application showcases various UI components and features including product galleries, lazy loading images, debounced search inputs, brutalist buttons, and booking calendars.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React hooks

## Core Components

### Button Component

**Location**: `components/ui/button.tsx`

A versatile button component built with class-variance-authority for consistent styling.

#### Props

```typescript
interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  className?: string
}
```

#### Variants

- **default**: Primary button with background color
- **destructive**: Red button for dangerous actions
- **outline**: Button with border, no background
- **secondary**: Secondary background color
- **ghost**: No background, hover effects
- **link**: Text-only button with underline

#### Sizes

- **default**: Standard height (36px)
- **sm**: Small height (32px)
- **lg**: Large height (40px)
- **icon**: Square button (36x36px)

#### Usage Example

```tsx
import { Button } from "@/components/ui/button"

// Basic usage
<Button>Click me</Button>

// With variant and size
<Button variant="outline" size="lg">
  Large Outline Button
</Button>

// As a link (using Radix Slot)
<Button asChild>
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

### Input Component

**Location**: `components/ui/input.tsx`

A styled input component with consistent theming and accessibility features.

#### Props

```typescript
interface InputProps extends React.ComponentProps<"input"> {
  className?: string
  type?: string
}
```

#### Features

- Consistent styling with focus states
- Accessibility support with ARIA attributes
- File input styling
- Placeholder text styling
- Error state styling

#### Usage Example

```tsx
import { Input } from "@/components/ui/input"

// Basic usage
<Input placeholder="Enter your name" />

// With type
<Input type="email" placeholder="Enter your email" />

// With custom styling
<Input className="w-full" placeholder="Search..." />
```

### Separator Component

**Location**: `components/ui/separator.tsx`

A separator component built on Radix UI primitives for dividing content sections.

#### Props

```typescript
interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  className?: string
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
}
```

#### Usage Example

```tsx
import { Separator } from "@/components/ui/separator"

// Horizontal separator (default)
<Separator />

// Vertical separator
<Separator orientation="vertical" />

// Non-decorative (for screen readers)
<Separator decorative={false} />
```

### Section Component

**Location**: `components/section/section.tsx`

A layout component that provides consistent page structure with navigation, title, and content areas.

#### Props

```typescript
interface SectionProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  credits?: React.ReactNode
}
```

#### Features

- Back navigation button
- Responsive layout
- Optional subtitle
- Optional credits footer

#### Usage Example

```tsx
import Section from "@/components/section/section"

<Section 
  title="Product Gallery" 
  subtitle="Showcase of interactive product cards"
  credits={<InspiredBy name="Dribbble" href="https://dribbble.com" />}
>
  <ProductGallery />
</Section>
```

## Feature Components

### DebouncedSearchInput

**Location**: `app/debounced-search-input/input.tsx`

A search input component with debounced URL parameter updates and loading states.

#### Props

```typescript
interface DebouncedSearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string // URL parameter key (defaults to 'q')
}
```

#### Features

- 500ms debounce delay
- URL parameter synchronization
- Loading indicator during debounce
- Clear button when input has value
- Pagination reset on search

#### Usage Example

```tsx
import DebouncedSearchInput from "@/app/debounced-search-input/input"

// Basic usage (uses 'q' as URL parameter)
<DebouncedSearchInput placeholder="Search products..." />

// Custom parameter name
<DebouncedSearchInput name="search" placeholder="Search..." />
```

### LazyLoadImage

**Location**: `app/lazy-loading-images/components/lazy-load-image.tsx`

An image component with lazy loading, blur placeholder, and click handling.

#### Props

```typescript
interface LazyLoadImageProps {
  image: {
    width: number
    height: number
    url: string
  }
  blurImageUrl: string
  onClick: () => void
}
```

#### Features

- Lazy loading with Next.js Image
- Blur placeholder
- Click handling
- Hover effects
- Drag prevention

#### Usage Example

```tsx
import LazyLoadImage from "@/app/lazy-loading-images/components/lazy-load-image"

<LazyLoadImage
  image={{
    width: 200,
    height: 200,
    url: "https://picsum.photos/200/200?random=1"
  }}
  blurImageUrl="data:image/jpeg;base64,..."
  onClick={() => console.log("Image clicked")}
/>
```

### ProductCard

**Location**: `app/product-gallery/components/product-card.tsx`

An interactive product card with hover animations and pricing display.

#### Props

```typescript
interface ProductCardProps {
  id: number
  title: string
  price: number
  currency?: string
  previousPrice?: number
  imageUrl: string
}
```

#### Features

- Hover animations with scale and translate effects
- Price formatting with Intl.NumberFormat
- Previous price with strikethrough
- Action buttons that appear on hover
- Responsive design

#### Usage Example

```tsx
import ProductCard from "@/app/product-gallery/components/product-card"

<ProductCard
  id={1}
  title="Monstera Plant"
  price={45.99}
  currency="USD"
  previousPrice={59.99}
  imageUrl="/products/plant-1.webp"
/>
```

### Reservation Calendar

**Location**: `app/booking-calendar/components/reservation.tsx`

A complete booking calendar component with progress tracking and date selection.

#### Components

- **Reservation**: Main container component
- **ReservationProgress**: Step indicator
- **MonthHeader**: Month navigation
- **WeekDays**: Day labels
- **ReservationCalendarDays**: Calendar grid

#### Features

- Multi-step booking process
- Date availability checking
- Month navigation
- Responsive grid layout
- Disabled dates for unavailable slots

#### Usage Example

```tsx
import Reservation from "@/app/booking-calendar/components/reservation"

<Reservation />
```

### Brutalist Buttons

**Location**: `app/brutalist-buttons/components/`

A collection of brutalist-style button components with 3D effects.

#### Components

##### DefaultButton
```typescript
interface DefaultButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
```

##### AnimatedButton
```typescript
interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  icon: React.ReactNode
}
```

##### GhostButton
```typescript
interface GhostButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
```

##### IconButton
```typescript
interface IconButtonProps {
  children: React.ReactNode
}
```

##### TinyButton
```typescript
interface TinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
```

#### Usage Examples

```tsx
import DefaultButton from "@/app/brutalist-buttons/components/default"
import AnimatedButton from "@/app/brutalist-buttons/components/animated"
import GhostButton from "@/app/brutalist-buttons/components/ghost"
import IconButton from "@/app/brutalist-buttons/components/icon-button"
import TinyButton from "@/app/brutalist-buttons/components/tiny"

// Default brutalist button
<DefaultButton>Click me</DefaultButton>

// Animated button with icon
<AnimatedButton icon={<Star />}>
  Favorite
</AnimatedButton>

// Ghost variant
<GhostButton>Subtle action</GhostButton>

// Icon only button
<IconButton>
  <Heart />
</IconButton>

// Tiny button
<TinyButton>Small</TinyButton>
```

### InspiredBy Component

**Location**: `components/inspiredBy.tsx`

A simple attribution component for crediting design inspiration.

#### Props

```typescript
interface InspiredByProps {
  name: string
  href: string
}
```

#### Usage Example

```tsx
import InspiredBy from "@/components/inspiredBy"

<InspiredBy 
  name="Dribbble" 
  href="https://dribbble.com/shot/123456" 
/>
```

## Utility Functions

### cn Function

**Location**: `lib/utils.ts`

A utility function for merging CSS classes with Tailwind CSS conflict resolution.

#### Signature

```typescript
function cn(...inputs: ClassValue[]): string
```

#### Usage Example

```tsx
import { cn } from "@/lib/utils"

// Basic usage
const className = cn("bg-blue-500", "text-white", "p-4")

// Conditional classes
const className = cn(
  "base-class",
  isActive && "active-class",
  isDisabled && "disabled-class"
)

// Merging with conflicts (tailwind-merge resolves conflicts)
const className = cn("p-4", "px-6") // Results in "p-4 px-6" but px-6 takes precedence
```

## Data Types

### Product Interface

**Location**: `app/product-gallery/data.ts`

```typescript
interface Product {
  id: number
  title: string
  price: number
  currency: string
  previousPrice?: number
  imageUrl: string
}
```

### Image Interface

**Location**: `app/lazy-loading-images/components/lazy-load-image.tsx`

```typescript
interface Image {
  width: number
  height: number
  url: string
}
```

## Usage Examples

### Complete Product Gallery Implementation

```tsx
import { products } from "@/app/product-gallery/data"
import ProductCard from "@/app/product-gallery/components/product-card"
import Section from "@/components/section/section"
import InspiredBy from "@/components/inspiredBy"

export default function ProductGallery() {
  return (
    <Section 
      title="Product Gallery"
      subtitle="Interactive product showcase with hover effects"
      credits={
        <InspiredBy 
          name="Dribbble Design" 
          href="https://dribbble.com/shots/product-cards" 
        />
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </Section>
  )
}
```

### Search with Debounced Input

```tsx
import DebouncedSearchInput from "@/app/debounced-search-input/input"
import { useSearchParams } from "next/navigation"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  return (
    <div className="space-y-4">
      <DebouncedSearchInput placeholder="Search products..." />
      
      {query && (
        <p className="text-muted-foreground">
          Searching for: "{query}"
        </p>
      )}
      
      {/* Search results would go here */}
    </div>
  )
}
```

### Lazy Loading Image Gallery

```tsx
import { imageIds } from "@/app/lazy-loading-images/data"
import LazyLoadImage from "@/app/lazy-loading-images/components/lazy-load-image"

export default function ImageGallery() {
  const handleImageClick = (id: number) => {
    console.log(`Image ${id} clicked`)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {imageIds.map((id) => (
        <LazyLoadImage
          key={id}
          image={{
            width: 200,
            height: 200,
            url: `https://picsum.photos/200/200?random=${id}`
          }}
          blurImageUrl={`https://picsum.photos/20/20?random=${id}`}
          onClick={() => handleImageClick(id)}
        />
      ))}
    </div>
  )
}
```

### Form with Brutalist Buttons

```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import DefaultButton from "@/app/brutalist-buttons/components/default"
import TinyButton from "@/app/brutalist-buttons/components/tiny"

export default function ContactForm() {
  return (
    <form className="space-y-4">
      <Input placeholder="Your name" />
      <Input type="email" placeholder="Your email" />
      <textarea 
        className="w-full p-3 border rounded-md"
        placeholder="Your message"
        rows={4}
      />
      
      <div className="flex gap-2">
        <DefaultButton type="submit">
          Send Message
        </DefaultButton>
        <TinyButton type="reset">
          Clear
        </TinyButton>
      </div>
    </form>
  )
}
```

### Booking Calendar Integration

```tsx
import Reservation from "@/app/booking-calendar/components/reservation"
import Section from "@/components/section/section"

export default function BookingPage() {
  return (
    <Section 
      title="Book Your Appointment"
      subtitle="Select your preferred date and time"
    >
      <div className="max-w-md mx-auto">
        <Reservation />
      </div>
    </Section>
  )
}
```

## Best Practices

### Component Usage

1. **Always use TypeScript**: All components are typed for better development experience
2. **Use the cn utility**: For conditional and merged class names
3. **Follow the component patterns**: Use the established prop patterns for consistency
4. **Accessibility first**: Components include proper ARIA attributes and keyboard support

### Styling Guidelines

1. **Tailwind CSS**: Use utility classes for styling
2. **Responsive design**: Use responsive prefixes (sm:, md:, lg:)
3. **Dark mode ready**: Components support dark mode theming
4. **Consistent spacing**: Use the established spacing scale

### Performance Considerations

1. **Lazy loading**: Use LazyLoadImage for images below the fold
2. **Debouncing**: Use DebouncedSearchInput for search functionality
3. **Code splitting**: Components are automatically code-split by Next.js
4. **Memoization**: Consider React.memo for expensive components

## Configuration

### Tailwind CSS Configuration

The project uses Tailwind CSS v4 with custom configuration in `tailwind.config.ts`.

### ESLint Configuration

ESLint is configured with Next.js rules in `eslint.config.mjs`.

### TypeScript Configuration

TypeScript is configured with strict mode and Next.js optimizations in `tsconfig.json`.

## Dependencies

### Core Dependencies

- **Next.js 15**: React framework
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Radix UI**: Accessible primitives
- **Lucide React**: Icons
- **class-variance-authority**: Component variants
- **clsx**: Conditional classes
- **tailwind-merge**: Class merging
- **use-debounce**: Debounced callbacks

### Development Dependencies

- **ESLint**: Code linting
- **@types/node**: Node.js types
- **@types/react**: React types
- **@types/react-dom**: React DOM types

This documentation provides comprehensive coverage of all public APIs, components, and utilities in the codebase. Each component includes detailed props, usage examples, and best practices for implementation.