"use client";

import { useState } from "react";
import { Sidebar } from "@/components/mail/sidebar";
import { MailList } from "@/components/mail/mail-list";
import { MailDisplay } from "@/components/mail/mail-display";
import { ComposeMail } from "@/components/mail/compose-mail";
import { Mail } from "@/types/mail";
import { folders, mails } from "@/data/mock";

export default function Home() {
  const [selectedMailId, setSelectedMailId] = useState<string | null>(null);
  const [composeOpen, setComposeOpen] = useState(false);
  const [currentMails] = useState<Mail[]>(mails);
  
  const selectedMail = currentMails.find(mail => mail.id === selectedMailId) || null;
  
  const handleSelectMail = (mail: Mail) => {
    setSelectedMailId(mail.id);
  };
  
  // サイドバーの「作成」ボタン押下時のイベントハンドラをオーバーライドするための要素
  const sidebarWithEvents = (
    <div onClick={(e) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-testid="compose-button"]')) {
        e.preventDefault();
        setComposeOpen(true);
      }
    }}>
      <Sidebar folders={folders} />
    </div>
  );
  
  // メール表示コンポーネント
  const mailDisplay = <MailDisplay mail={selectedMail} />;

  return (
    <main className="flex h-screen overflow-hidden">
      {/* サイドバー */}
      {sidebarWithEvents}
      
      {/* メールリスト */}
      <div className="w-full md:w-1/3 xl:w-1/4 border-r">
        <MailList 
          mails={currentMails} 
          selectedMailId={selectedMailId}
          onSelectMail={handleSelectMail}
        />
      </div>
      
      {/* メール詳細表示 */}
      <div className="hidden md:flex w-2/3 xl:w-3/4 flex-col">
        {mailDisplay}
      </div>
      
      {/* メール作成ダイアログ */}
      <ComposeMail 
        open={composeOpen} 
        onClose={() => setComposeOpen(false)} 
      />
    </main>
  );
}
