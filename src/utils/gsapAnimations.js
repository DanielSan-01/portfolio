/**
 * GSAP Animation Utilities
 * 
 * Reusable animation functions for the portfolio website.
 * These functions demonstrate different GSAP patterns.
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin (needed once in the app)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Fade in animation - slides element up and fades in
 * @param {HTMLElement|string} element - Element or selector
 * @param {Object} options - Animation options
 */
export const fadeInUp = (element, options = {}) => {
  const defaults = {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: 0
  };

  return gsap.from(element, { ...defaults, ...options });
};

/**
 * Fade out animation
 * @param {HTMLElement|string} element - Element or selector
 * @param {Object} options - Animation options
 */
export const fadeOut = (element, options = {}) => {
  const defaults = {
    opacity: 0,
    duration: 0.6,
    ease: "power2.in"
  };

  return gsap.to(element, { ...defaults, ...options });
};

/**
 * Stagger animation for multiple elements
 * @param {string} selector - CSS selector for elements
 * @param {Object} options - Animation options
 */
export const staggerFadeIn = (selector, options = {}) => {
  const defaults = {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
  };

  return gsap.from(selector, { ...defaults, ...options });
};

/**
 * Scroll-triggered reveal animation
 * @param {HTMLElement|string} element - Element or selector
 * @param {Object} options - Animation and ScrollTrigger options
 */
export const scrollReveal = (element, options = {}) => {
  const defaults = {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  };

  // Merge ScrollTrigger options
  const scrollTriggerOptions = { ...defaults.scrollTrigger, ...(options.scrollTrigger || {}) };
  const animationOptions = { ...defaults, ...options };
  animationOptions.scrollTrigger = scrollTriggerOptions;

  return gsap.from(element, animationOptions);
};

/**
 * Stagger scroll reveal for multiple elements
 * @param {string} selector - CSS selector for elements
 * @param {Object} options - Animation and ScrollTrigger options
 */
export const staggerScrollReveal = (selector, options = {}) => {
  const defaults = {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  };

  const scrollTriggerOptions = { ...defaults.scrollTrigger, ...(options.scrollTrigger || {}) };
  const animationOptions = { ...defaults, ...options };
  animationOptions.scrollTrigger = scrollTriggerOptions;

  return gsap.from(selector, animationOptions);
};

/**
 * Create a timeline for sequential animations
 * @param {Array} animations - Array of animation configs
 * @returns {gsap.core.Timeline} Timeline instance
 */
export const createTimeline = (animations = []) => {
  const tl = gsap.timeline();

  animations.forEach((anim, index) => {
    const {
      element,
      props,
      position = null  // If null, animations play sequentially
    } = anim;

    if (position) {
      tl.to(element, props, position);
    } else {
      tl.to(element, props);
    }
  });

  return tl;
};

/**
 * Scale animation on hover
 * @param {HTMLElement} element - Element to animate
 * @param {Object} options - Animation options
 */
export const hoverScale = (element, options = {}) => {
  const defaults = {
    scale: 1.05,
    duration: 0.3,
    ease: "power2.out"
  };

  const enterAnimation = { ...defaults, ...options };

  return {
    onEnter: () => gsap.to(element, enterAnimation),
    onLeave: () => gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out" })
  };
};

/**
 * Kill all ScrollTrigger instances (cleanup function)
 */
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

/**
 * Refresh ScrollTrigger (call after dynamic content loads)
 */
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

