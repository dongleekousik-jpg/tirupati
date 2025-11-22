
export interface Place {
  id: string;
  categoryKey: string;
  mapQuery: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'narada';
  text: string;
  audioUrl?: string;
  mapLink?: string;
}

export interface Rule {
  id: string;
  icon: 'dress' | 'prohibited' | 'clean' | 'queue' | 'mobile' | 'respect';
}
