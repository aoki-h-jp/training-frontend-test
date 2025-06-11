import { Mail } from "@/types/mail";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";

interface MailListProps {
  mails: Mail[];
  selectedMailId: string | null;
  onSelectMail: (mail: Mail) => void;
}

export function MailList({ mails, selectedMailId, onSelectMail }: MailListProps) {
  return (
    <div className="flex flex-col border-r" data-testid="mail-list">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-semibold">Inbox</h2>
        <Badge variant="secondary">{mails.length}</Badge>
      </div>
      <div className="overflow-auto flex-1">
        {mails.map((mail) => (
          <div
            key={mail.id}
            className={`p-4 border-b cursor-pointer ${
              selectedMailId === mail.id
                ? "bg-muted"
                : mail.read
                ? "bg-background"
                : "bg-background font-medium"
            } hover:bg-muted/50 transition-colors`}
            onClick={() => onSelectMail(mail)}
            data-testid={`mail-item-${mail.id}`}
          >
            <div className="flex justify-between items-start mb-1">
              <div className="font-medium">{mail.from}</div>
              <div className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(mail.date), {
                  addSuffix: true,
                  locale: ja,
                })}
              </div>
            </div>
            <div className="text-sm font-medium mb-1">{mail.subject}</div>
            <div className="text-xs text-muted-foreground line-clamp-2">
              {mail.body}
            </div>
            {mail.labels?.length > 0 && (
              <div className="flex gap-1 mt-2">
                {mail.labels.map((label) => (
                  <Badge key={label} variant="outline">
                    {label}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
