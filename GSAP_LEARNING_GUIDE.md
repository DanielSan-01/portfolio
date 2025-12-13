# GSAP Learning Guide - Portfolio Website Refactor

## What is GSAP?

GSAP (GreenSock Animation Platform) is a powerful JavaScript animation library that provides:
- **High Performance**: Uses hardware acceleration and optimized animations
- **Precise Control**: More control than CSS animations
- **Timeline System**: Sequence multiple animations easily
- **ScrollTrigger Plugin**: Create scroll-based animations
- **Cross-browser Compatibility**: Works consistently across browsers

## Key GSAP Concepts

### 1. Basic Animation Methods

#### `gsap.to(element, {properties})`
Animates an element TO a target state:
```javascript
gsap.to(".my-element", {
  x: 100,        // Move 100px right
  y: 50,         // Move 50px down
  opacity: 0,    // Fade out
  duration: 1,   // 1 second
  ease: "power2.out"
});
```

#### `gsap.from(element, {properties})`
Animates an element FROM a starting state:
```javascript
gsap.from(".my-element", {
  y: -50,        // Start 50px above
  opacity: 0,    // Start invisible
  duration: 1
});
```

#### `gsap.fromTo(element, fromProps, toProps)`
Animates with both start and end states:
```javascript
gsap.fromTo(".my-element", 
  { x: -100, opacity: 0 },  // From
  { x: 0, opacity: 1, duration: 1 }  // To
);
```

### 2. React + GSAP Pattern

In React, we use `useRef` and `useEffect`:

```javascript
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

function MyComponent() {
  const elementRef = useRef(null);

  useEffect(() => {
    // Animation runs when component mounts
    gsap.from(elementRef.current, {
      opacity: 0,
      y: 20,
      duration: 1
    });
  }, []);

  return <div ref={elementRef}>Animated Element</div>;
}
```

### 3. Timelines - Sequencing Animations

Timelines let you sequence multiple animations:

```javascript
const tl = gsap.timeline();

tl.to(".title", { opacity: 1, y: 0, duration: 0.8 })
  .to(".description", { opacity: 1, y: 0, duration: 0.8 }, "-=0.4") // Start 0.4s before previous ends
  .to(".button", { opacity: 1, scale: 1, duration: 0.5 });
```

### 4. ScrollTrigger - Scroll-Based Animations

ScrollTrigger makes elements animate as you scroll:

```javascript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
  scrollTrigger: {
    trigger: ".card",
    start: "top 80%",  // When top of element hits 80% of viewport
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 50,
  duration: 1
});
```

### 5. Stagger - Animate Multiple Elements

Animate a group of elements with delays:

```javascript
gsap.from(".item", {
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.2  // 0.2s delay between each element
});
```

## Our Refactor Plan

### Phase 1: Setup ✅
- [x] Install GSAP
- [ ] Create utility hooks file
- [ ] Register ScrollTrigger plugin

### Phase 2: Hero Section Animations
- [ ] Animate hero title (fade in + slide up)
- [ ] Animate description (sequential after title)
- [ ] Animate feature icons (stagger effect)

### Phase 3: Project Cards
- [ ] Animate cards on scroll (fade in + slide up)
- [ ] Stagger animation for multiple cards
- [ ] Hover animations with GSAP (smoother than CSS)

### Phase 4: Language/Tools Grid
- [ ] Scroll-triggered reveal
- [ ] Stagger animation for grid items
- [ ] Scale/rotate on hover

### Phase 5: Page Transitions
- [ ] Fade in new pages
- [ ] Smooth exit animations

### Phase 6: Header Scroll Behavior
- [ ] Hide/show header on scroll
- [ ] Smooth transitions

## Best Practices

1. **Use refs, not querySelector**: In React, use `useRef` instead of `querySelector`
2. **Cleanup animations**: Use `useEffect` return to kill animations on unmount
3. **Use ScrollTrigger.refresh()**: Call after dynamic content loads
4. **Performance**: Animate `transform` and `opacity` for best performance
5. **Easing**: Experiment with different eases (`power1`, `power2`, `elastic`, etc.)

## Common Easing Functions

- `"power1.out"` - Gentle deceleration
- `"power2.out"` - Medium deceleration (most common)
- `"elastic.out"` - Bouncy
- `"back.out"` - Overshoot then settle
- `"bounce.out"` - Bouncy at end

## Resources

- GSAP Docs: https://greensock.com/docs/
- ScrollTrigger Docs: https://greensock.com/docs/v3/Plugins/ScrollTrigger
- GSAP Ease Visualizer: https://greensock.com/docs/v3/Eases

