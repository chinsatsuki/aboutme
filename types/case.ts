// types/case.ts
import React from 'react';

export interface DesignStep {
  number?: string;
  title?: string;
  jpTitle?: string;
  subTitle?: string;
  points?: string[];
  description?: React.ReactNode;
  image?: React.ReactNode;
  sections?: SubSection[];
  titleEn?: string;
  extraContent?: React.ReactNode;
}

export interface CaseData {
  id: string;
  group: 'a' | 'b' | 'c';
  title: string;
  themeColor: string;
  titleEn: string;
  subtitleEn?: string;
  firstViewImage?: string;
  hoverImage?: string;
  mainImage?: string;
  prototypeUrl?: string;
  heroElement?: React.ReactNode;
  analysis: {
    product?: string;
    problem?: React.ReactNode;
    goal?: React.ReactNode;
    role?: string;
    timeline: string;
    tools: string;
  };
  steps: DesignStep[];
  learning?: string;
  relatedCases: { title: string; image: string; link: string }[];
  learningData?: { title: string; desc: string }[];
}

export interface SubSection {
  subTitle?: string;
  description?: React.ReactNode;
  image?: React.ReactNode;
}