// types/case.ts
import React from 'react';

export interface DesignStep {
  number: string;
  title: string;
  jpTitle: string;
  subTitle?: string;
  points: string[];
  description?: React.ReactNode;
  image?: React.ReactNode;
  sections?: SubSection[];
  titleEn?: string;
  extraContent?: React.ReactNode;
}

export interface CaseData {
  id: string; // 增加 ID 用于过滤自身
  group: 'a' | 'b' | 'c'; // 用于分组推荐
  title: string;
  themeColor: string;
  titleEn: string;
  subtitleEn?: string;
  firstViewImage: string;
  prototypeUrl?: string;
  heroElement?: React.ReactNode;
  analysis: {
    product: string;
    problem: string;
    goal: string;
    role: string;
    timeline: string;   // 确保这里没有 ?，解决 image_9c9ca0.png 的 "timeline" 不存在报错
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