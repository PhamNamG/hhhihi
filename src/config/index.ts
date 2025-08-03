import { Metadata } from 'next';
import { seoConfig } from './seo';
import { pwaConfig } from './pwa';

export const defaultMetadata: Metadata = {
  ...seoConfig,
  ...pwaConfig,
}; 