# Dr. G's Lab Trauma-informed UI Spacing & Layout Implementation Guide

## Trauma-informed Spacing Philosophy

In trauma-informed design, spacing plays a critical role in creating psychological safety. Proper spacing:

- Creates visual breathing room that reduces overwhelm
- Establishes clear boundaries between content sections
- Provides predictable rhythm that builds trust
- Allows users to process information at their own pace
- Reduces cognitive load by preventing visual crowding

## Spacing System

The spacing system is built on an 8px base unit:

- Base Unit: 8px
- Spacing Scale:
  - **xs**: 4px (0.5x)
  - **sm**: 8px (1x)
  - **md**: 16px (2x)
  - **lg**: 24px (3x)
  - **xl**: 32px (4x)
  - **2xl**: 48px (6x)

### Spacing Implementation with Tailwind

```javascript
// tailwind.config.js - Spacing configuration
module.exports = {
  theme: {
    extend: {
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
      },
    },
  },
}
```

### Spacing Usage Examples

```html
<!-- Margin examples -->
<div class="mt-md mb-lg">
  Margins: top-16px, bottom-24px
</div>

<!-- Padding examples -->
<div class="p-lg">
  Padding: 24px all around
</div>

<!-- Combined spacing -->
<div class="py-md px-lg">
  Padding: vertical-16px, horizontal-24px
</div>

<!-- Gap spacing for flex/grid -->
<div class="flex flex-col gap-md">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Layout System

### Grid System

- 12-column grid
- Gutter: 24px
- Margin: 16px (mobile), 32px (tablet), 64px (desktop)

### Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px and above

### Layout Implementation with Tailwind

```javascript
// tailwind.config.js - Layout configuration
module.exports = {
  theme: {
    extend: {
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1024px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          tablet: '32px',
          desktop: '64px',
        },
      },
    },
  },
}
```

### Layout Usage Examples

```html
<!-- Container with responsive padding -->
<div class="container mx-auto">
  Centered container with responsive padding
</div>

<!-- 12-column grid with gutters -->
<div class="grid grid-cols-12 gap-lg">
  <div class="col-span-12 md:col-span-6 lg:col-span-4">
    Full width on mobile, half on tablet, third on desktop
  </div>
  <div class="col-span-12 md:col-span-6 lg:col-span-4">
    Full width on mobile, half on tablet, third on desktop
  </div>
  <div class="col-span-12 md:col-span-12 lg:col-span-4">
    Full width on mobile and tablet, third on desktop
  </div>
</div>

<!-- Flexible grid for auto-sizing -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

## Trauma-informed Layout Patterns

### Content Hierarchy Pattern

Organize content in a clear hierarchy that helps users understand importance and relationship between elements:

```html
<!-- Content hierarchy example -->
<article class="bg-selenite-white-50 p-lg rounded-lg">
  <!-- Primary content -->
  <div class="mb-xl">
    <h2 class="font-playfair font-bold text-h2-mobile md:text-h2-tablet lg:text-h2-desktop text-chrysocolla-green-DEFAULT mb-md">
      Primary Content Heading
    </h2>
    <p class="font-montserrat font-regular text-body text-grey-800">
      Primary content that introduces the topic in a clear, direct manner.
    </p>
  </div>
  
  <!-- Secondary content with visual separation -->
  <div class="border-t border-grey-200 pt-lg mb-lg">
    <h3 class="font-playfair font-bold text-h3-mobile md:text-h3-tablet lg:text-h3-desktop text-azurite-blue-900 mb-md">
      Secondary Content Heading
    </h3>
    <p class="font-montserrat font-regular text-body text-grey-800">
      Secondary content that builds on the primary information.
    </p>
  </div>
  
  <!-- Supporting content with additional visual distinction -->
  <div class="bg-selenite-white-100 p-md rounded-md">
    <h4 class="font-montserrat font-bold text-body text-grey-800 mb-sm">
      Supporting Information
    </h4>
    <p class="font-montserrat font-light text-small text-grey-700">
      Additional context that may be helpful but is not essential.
    </p>
  </div>
</article>
```

### Progressive Disclosure Pattern

Present information gradually to avoid overwhelming users:

```html
<!-- Progressive disclosure example -->
<div class="space-y-lg">
  <!-- Initial summary -->
  <div class="bg-selenite-white-50 p-lg rounded-lg">
    <h3 class="font-playfair font-bold text-h3-mobile md:text-h3-tablet lg:text-h3-desktop text-azurite-blue-900 mb-md">
      Topic Overview
    </h3>
    <p class="font-montserrat font-regular text-body text-grey-800">
      Brief overview of the topic that gives essential information.
    </p>
    
    <!-- Disclosure control -->
    <button class="mt-md font-montserrat font-medium text-small text-chrysocolla-green-DEFAULT flex items-center">
      <span>Show more details</span>
      <svg class="w-4 h-4 ml-xs" viewBox="0 0 24 24">
        <!-- SVG path for chevron icon -->
      </svg>
    </button>
  </div>
  
  <!-- Additional content (initially hidden) -->
  <div class="bg-selenite-white-50 p-lg rounded-lg hidden">
    <h3 class="font-playfair font-bold text-h3-mobile md:text-h3-tablet lg:text-h3-desktop text-azurite-blue-900 mb-md">
      Detailed Information
    </h3>
    <p class="font-montserrat font-regular text-body text-grey-800 mb-md">
      More detailed explanation that builds on the overview.
    </p>
    <p class="font-montserrat font-regular text-body text-grey-800">
      Additional context and nuance for those who want to learn more.
    </p>
  </div>
</div>
```

### Visual Breathing Room Pattern

Use negative space strategically to create psychological safety:

```html
<!-- Visual breathing room example -->
<div class="bg-gradient-to-r from-selenite-white-50 to-selenite-white-100 p-2xl rounded-xl">
  <div class="max-w-3xl mx-auto">
    <h2 class="font-playfair font-bold text-h2-mobile md:text-h2-tablet lg:text-h2-desktop text-chrysocolla-green-DEFAULT mb-lg text-center">
      Important Topic
    </h2>
    
    <!-- Content with generous spacing -->
    <div class="space-y-xl">
      <p class="font-montserrat font-regular text-body text-grey-800">
        First paragraph of content with adequate line height for readability.
      </p>
      
      <p class="font-montserrat font-regular text-body text-grey-800">
        Second paragraph with generous space above and below to create visual breathing room.
      </p>
      
      <p class="font-montserrat font-regular text-body text-grey-800">
        Third paragraph continues the pattern of spacing to maintain rhythm and reduce cognitive load.
      </p>
    </div>
  </div>
</div>
```

## Animation & Transitions

### Trauma-informed Motion Principles

Motion in trauma-informed interfaces should be:
- Gentle and predictable
- Optional when possible
- Purposeful rather than decorative
- Consistent across the interface
- Never sudden or jarring

### Transition Implementation

```javascript
// tailwind.config.js - Animation configuration
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        'DEFAULT': '300ms',
      },
      transitionTimingFunction: {
        'DEFAULT': 'ease-in-out',
      },
      scale: {
        'hover': '1.02',
      },
      opacity: {
        'hover': '0.9',
      },
    },
  },
}
```

### Transition Usage Examples

```html
<!-- Default transition -->
<button class="bg-sunstone-orange-DEFAULT text-selenite-white-50 hover:bg-sunstone-orange-600 transition-all duration-300 px-lg py-md rounded-md">
  Gentle Hover State
</button>

<!-- Subtle scale transition -->
<div class="bg-selenite-white-50 p-lg rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
  Card with subtle grow effect
</div>

<!-- Fade transition for modals -->
<div class="fixed inset-0 bg-grey-900 bg-opacity-50 transition-opacity duration-300">
  <div class="bg-selenite-white-50 p-xl rounded-xl max-w-md mx-auto mt-2xl transition-all duration-300 transform">
    Modal content
  </div>
</div>
```

## Layout Patterns for Specific Components

### Card Layout Pattern

```html
<!-- Card layout with consistent spacing -->
<div class="bg-selenite-white-50 border border-grey-200 rounded-lg overflow-hidden">
  <!-- Optional image with consistent aspect ratio -->
  <div class="aspect-w-16 aspect-h-9 bg-grey-100">
    <img src="image.jpg" alt="Card image" class="object-cover w-full h-full">
  </div>
  
  <!-- Content with consistent padding -->
  <div class="p-lg">
    <h3 class="font-playfair font-bold text-h3-mobile md:text-h3-tablet lg:text-h3-desktop text-azurite-blue-900 mb-md">
      Card Title
    </h3>
    
    <p class="font-montserrat font-regular text-body text-grey-800 mb-lg">
      Card description with adequate space below for separation from action.
    </p>
    
    <button class="bg-sunstone-orange-DEFAULT text-selenite-white-50 hover:bg-sunstone-orange-600 transition-all duration-300 px-lg py-md rounded-md w-full">
      Card Action
    </button>
  </div>
</div>
```

### Form Layout Pattern

```html
<!-- Form layout with consistent spacing -->
<form class="bg-selenite-white-50 border border-grey-200 rounded-lg p-xl">
  <h2 class="font-playfair font-bold text-h2-mobile md:text-h2-tablet lg:text-h2-desktop text-chrysocolla-green-DEFAULT mb-xl">
    Form Title
  </h2>
  
  <!-- Form fields with consistent spacing -->
  <div class="space-y-lg mb-xl">
    <!-- Single field with label -->
    <div>
      <label class="font-montserrat font-medium text-small text-grey-800 block mb-sm">
        Field Label
      </label>
      <input 
        type="text" 
        class="border border-grey-200 bg-selenite-white-50 focus:border-azurite-blue-300 font-montserrat font-regular text-body p-md rounded-md w-full transition-all duration-300"
        placeholder="Enter information"
      >
    </div>
    
    <!-- Text area with helper text -->
    <div>
      <label class="font-montserrat font-medium text-small text-grey-800 block mb-sm">
        Text Area Label
      </label>
      <textarea 
        class="border border-grey-200 bg-selenite-white-50 focus:border-azurite-blue-300 font-montserrat font-regular text-body p-md rounded-md w-full transition-all duration-300 mb-xs"
        placeholder="Enter more details"
        rows="4"
      ></textarea>
      <p class="font-montserrat font-light text-caption text-grey-600">
        Helper text to provide guidance
      </p>
    </div>
  </div>
  
  <!-- Form actions with right alignment -->
  <div class="flex justify-end space-x-md">
    <button type="button" class="border border-grey-300 text-grey-700 hover:bg-grey-100 transition-all duration-300 px-lg py-md rounded-md">
      Cancel
    </button>
    <button type="submit" class="bg-sunstone-orange-DEFAULT text-selenite-white-50 hover:bg-sunstone-orange-600 transition-all duration-300 px-lg py-md rounded-md">
      Submit
    </button>
  </div>
</form>
```

### Two-Column Layout Pattern

```html
<!-- Two-column layout with responsive stacking -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-xl">
  <!-- Main content column -->
  <div class="order-2 lg:order-1">
    <h2 class="font-playfair font-bold text-h2-mobile md:text-h2-tablet lg:text-h2-desktop text-chrysocolla-green-DEFAULT mb-lg">
      Main Content Title
    </h2>
    
    <div class="space-y-lg">
      <p class="font-montserrat font-regular text-body text-grey-800">
        First paragraph of content.
      </p>
      
      <p class="font-montserrat font-regular text-body text-grey-800">
        Second paragraph of content.
      </p>
    </div>
  </div>
  
  <!-- Sidebar column -->
  <div class="order-1 lg:order-2">
    <div class="bg-selenite-white-100 p-lg rounded-lg sticky top-lg">
      <h3 class="font-playfair font-bold text-h3-mobile md:text-h3-tablet lg:text-h3-desktop text-azurite-blue-900 mb-md">
        Sidebar Title
      </h3>
      
      <p class="font-montserrat font-regular text-body text-grey-800 mb-lg">
        Sidebar content.
      </p>
      
      <button class="bg-sunstone-orange-DEFAULT text-selenite-white-50 hover:bg-sunstone-orange-600 transition-all duration-300 px-lg py-md rounded-md w-full">
        Sidebar Action
      </button>
    </div>
  </div>
</div>
```

## Implementation Best Practices

1. **Maintain Consistent Spacing**: Use the defined spacing scale consistently throughout the interface
   ```html
   <!-- Use consistent spacing with defined classes -->
   <div class="mb-lg">
     <h2 class="mb-md">Section Title</h2>
     <p>Content</p>
   </div>
   ```

2. **Create Responsive Layouts**: Design mobile-first and enhance for larger screens
   ```html
   <!-- Mobile-first responsive design -->
   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md lg:gap-lg">
     <div>Content 1</div>
     <div>Content 2</div>
     <div>Content 3</div>
   </div>
   ```

3. **Use Visual Boundaries**: Create clear visual separation between different content sections
   ```html
   <!-- Visual boundaries -->
   <section class="border-b border-grey-200 pb-xl mb-xl">
     Section 1 content
   </section>
   <section>
     Section 2 content
   </section>
   ```

4. **Implement Progressive Disclosure**: Allow users to control how much content they see
   ```html
   <!-- Progressive disclosure pattern -->
   <details class="mb-lg">
     <summary class="font-montserrat font-medium text-body text-grey-800 cursor-pointer">
       Click to expand
     </summary>
     <div class="mt-md">
       Expanded content
     </div>
   </details>
   ```

5. **Create Safe Containers**: Use padding, borders, and backgrounds to create safe content containers
   ```html
   <!-- Safe content container -->
   <div class="bg-selenite-white-50 border border-grey-200 rounded-lg p-lg mb-xl">
     <h3 class="mb-md">Contained Content</h3>
     <p>Safe, predictable content presentation</p>
   </div>
   ```

By following this guide, you'll implement spacing and layout that supports Dr. G's Lab's trauma-informed design principles while creating visually harmonious and psychologically safe interfaces.
