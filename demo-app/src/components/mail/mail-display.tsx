import { useState } from "react";
import { Mail } from "@/types/mail";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { TrashIcon, SendIcon } from "@/components/ui/icons";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { toast } from "sonner";

interface MailDisplayProps {
  mail: Mail | null;
}

export function MailDisplay({ mail }: MailDisplayProps) {
  const [replyText, setReplyText] = useState("");
  const [sending, setSending] = useState(false);
  
  const handleSend = () => {
    if (!replyText.trim() || !mail) return;
    
    setSending(true);
    
    // 送信シミュレーション (1秒遅延)
    setTimeout(() => {
      toast.success("メールを送信しました", {
        description: `To: ${mail.from}`,
        duration: 3000,
      });
      
      // 送信後にテキストエリアをクリア
      setReplyText("");
      setSending(false);
    }, 1000);
  };
  if (!mail) {
    return (
      <div className="flex h-full items-center justify-center" data-testid="mail-display-empty">
        <div className="text-center">
          <h3 className="text-2xl font-bold tracking-tight">No mail selected</h3>
          <p className="text-muted-foreground">Select a mail to read</p>
        </div>
      </div>
    );
  }

  const formattedDate = format(new Date(mail.date), "yyyy年MM月dd日 HH:mm", { locale: ja });

  return (
    <div className="flex flex-col h-full overflow-hidden" data-testid="mail-display">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-semibold">{mail.subject}</h2>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <TrashIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <SendIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <div className="flex items-start gap-4 mb-4">
          <Avatar>
            <div className="bg-primary text-white rounded-full w-full h-full flex items-center justify-center">
              {mail.from.charAt(0).toUpperCase()}
            </div>
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{mail.from}</h3>
              <span className="text-sm text-muted-foreground">{formattedDate}</span>
            </div>
            <p className="text-sm text-muted-foreground">To: {mail.to}</p>
          </div>
        </div>
        {mail.labels?.length > 0 && (
          <div className="flex gap-1 my-2">
            {mail.labels.map((label) => (
              <Badge key={label} variant="outline">
                {label}
              </Badge>
            ))}
          </div>
        )}
        <Separator className="my-4" />
        <div className="whitespace-pre-wrap">{mail.body}</div>
      </div>
      
      {/* シンプルな返信フォーム - 画像のデザインに合わせる */}
      <div className="border-t mt-auto p-4">
        <div>
          <textarea 
            className="w-full p-3 border rounded-md min-h-[80px] resize-none" 
            placeholder={`Reply ${mail.from.split('@')[0]}...`}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            data-testid="reply-input"
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
            <input type="checkbox" className="rounded" />
            Mute this thread
          </label>
          <Button 
            size="sm"
            className="ml-auto bg-green-600 hover:bg-green-700 text-white"
            data-testid="send-button"
            disabled={sending || !replyText.trim()}
            onClick={handleSend}
          >
            {sending ? "送信中..." : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
}
