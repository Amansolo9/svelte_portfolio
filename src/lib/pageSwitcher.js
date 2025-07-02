import { rootPage } from './pageControlStore.js';

// Utility functions to switch between pages
export function showPortfolio() {
  rootPage.set('portfolio');
}

export function showMaintainance() {
  rootPage.set('maintainance');
}

// Get current page
export function getCurrentPage() {
  return rootPage;
} 