export interface Mail {
  id: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  date: string;
  read: boolean;
  labels: string[];
}

export interface Folder {
  id: string;
  name: string;
  icon?: string;
  count?: number;
}

export type FolderType = 'inbox' | 'drafts' | 'sent' | 'junk' | 'trash' | 'archive';
