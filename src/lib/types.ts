export interface Project {
  id: string;
  title: string;
  slug: string;
  shortSummary: string;
  fullDescription: string;
  strengths: string[];
  workCompleted: string[];
  challengesSolved: string[];
  toolsUsed: string[];
  liveUrl: string;
  sourceCodeUrl: string;
  coverImage: string;
  isFeatured: boolean;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number>;
  timestamp: string;
}
