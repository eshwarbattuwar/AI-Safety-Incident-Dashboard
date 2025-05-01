import { Incident } from '../types/incident';

export const mockIncidents: Incident[] = [
  { 
    id: 1, 
    title: "Biased Recommendation Algorithm", 
    description: "Algorithm consistently favored certain demographics in job recommendations, potentially limiting opportunities for underrepresented groups. Investigation found data imbalance in training set that needs correction.", 
    severity: "Medium", 
    reported_at: "2025-03-15T10:00:00Z" 
  },
  { 
    id: 2, 
    title: "LLM Hallucination in Critical Info", 
    description: "LLM provided incorrect safety procedure information to industrial manufacturer, which could have led to dangerous operating conditions. Immediate fix applied with enhanced factuality checks.",
    severity: "High", 
    reported_at: "2025-04-01T14:30:00Z" 
  },
  { 
    id: 3, 
    title: "Minor Data Leak via Chatbot", 
    description: "Chatbot inadvertently exposed non-sensitive user metadata during conversation. Issue contained to small user group and resolved within 2 hours of detection.", 
    severity: "Low", 
    reported_at: "2025-03-20T09:15:00Z" 
  },
  {
    id: 4,
    title: "Deepfake Detection Failure",
    description: "AI safety system failed to detect sophisticated deepfake video, allowing it to be distributed on platform. Content moderation team caught the issue manually but highlights need for improved detection algorithms.",
    severity: "High",
    reported_at: "2025-04-10T11:45:00Z"
  },
  {
    id: 5,
    title: "Translation Error in Medical Context",
    description: "AI translator mistranslated medical instructions in specific language pair, potentially causing confusion about medication dosage. Error was caught during routine quality check before distribution.",
    severity: "Medium",
    reported_at: "2025-03-25T16:20:00Z"
  }
];