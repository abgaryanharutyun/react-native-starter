import { action } from './index'
export const AAA = 'AAA';
export const loadFirst = () => console.warn('eeeee') || action(AAA);
