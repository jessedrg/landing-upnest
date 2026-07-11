import type { Metadata } from 'next';
import ExpertsContent from '../../components/ExpertsContent';

export const metadata: Metadata = {
  title: 'Upnest Expert Calls — Screened experts for your deal, in 48 hours.',
  description:
    'A boutique expert network run by headhunters. We custom-recruit former executives — competitors, customers, suppliers — and put them on the phone with your team. Pay per completed call. First profiles in 48 hours.',
};

export default function ExpertsPage() {
  return <ExpertsContent />;
}
